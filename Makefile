SRC_DIR = app
BUILD_DIR = build
ARTIFACT_DIR = artifacts

ESLINT = ./node_modules/.bin/eslint
STYLELINT = ./node_modules/.bin/stylelint
JEST = ./node_modules/.bin/jest
STORYBOOK = ./node_modules/.bin/start-storybook
BUILD_STORYBOOK = ./node_modules/.bin/build-storybook
WEBPACK = ./node_modules/.bin/webpack

ESLINT_JUNIT_FLAGS = --format junit --output-file artifacts/test_results/eslint/eslint.junit.xml
STYLELINT_JUNIT_FLAGS = --custom-formatter node_modules/stylelint-junit-formatter > artifacts/test_results/stylelint/stylelint.junit.xml
WEBPACK_PRODUCTION_FLAGS = --config internals/webpack/webpack.prod.babel.js -p --hide-modules --display-optimization-bailout

# .PHONY: prevents files named 'clean' from stopping the 'clean' task from running
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html
.PHONY: help
help:
	@echo "--------------------- Useful Commands for Development ----------------------"
	@echo "make help                            - show this help message"
	@echo "make install                         - install dependencies"
	@echo "make start                           - builds and runs the project, autoreloading on file changes"
	@echo "make start-tunnel                    - runs the project and provides a globally accessible proxy url for testing on other devices"
	@echo "make lint                            - runs eslint and stylelint"
	@echo "make lint-fix                        - attempts to autofix linting errors"
	@echo "make test                            - runs the full test suite with jest"
	@echo "make test-watch                      - re-runs tests on file changes - VERY useful"
	@echo "make test-snapshots                  - updates the jest snapshots"
	@echo "make test-coverage                   - creates a coverage report and opens it in your browser"
	@echo "make analyze                         - analyzes your webpack bundle"
	@echo ""
	@echo "------------------ Other Commands (for CI / Production) --------------------"
	@echo "make build                           - build the project distribution"
	@echo "make install-no-clean                - installs without clearning dependencies, for improved caching on CI"
	@echo "make lint-js-junit                   - runs eslint and generates a junit file containing any errors"
	@echo "make lint-css-junit                  - runs stylelint and generates a junit file containing any errors"
	@echo "make test-ci                         - runs the jest test suite and outputs coverage and junit information"
	@echo "make install-deployment-deps         - installs dependencies needed for the deployment scripts"
	@echo "make deploy-staging                  - deploys the staging environment"
	@echo "make deploy-production               - deploys the production environment"

# ---- Installing, Building and Running ----

.PHONY: install
install: check-versions clean
	yarn install

.PHONY: build
build: check-versions
	@rm -rf ${BUILD_DIR}
	NODE_ENV=production ${WEBPACK} ${WEBPACK_PRODUCTION_FLAGS}

.PHONY: start
start: check-versions
	@NODE_ENV=development node server

.PHONY: start-tunnel
start-tunnel: check-versions
	NODE_ENV=development ENABLE_TUNNEL=true node server

# -------------- Linting --------------

.PHONY: lint
lint: check-versions
	${ESLINT} '${SRC_DIR}/**/*.js' || true
	${STYLELINT} '${SRC_DIR}/**/*.js' || true

.PHONY: lint-fix
lint-fix: check-versions
	${ESLINT} --fix '${SRC_DIR}/**/*.js'

# -------------- Testing --------------

.PHONY: test
test: check-versions ensure-artifact-dir
	NODE_ENV=test ${JEST}

.PHONY: test-watch
test-watch: check-versions ensure-artifact-dir
	NODE_ENV=test ${JEST} --watch

.PHONY: test-coverage
test-coverage: check-versions ensure-artifact-dir
	NODE_ENV=test ${JEST} --coverage
	open ${ARTIFACT_DIR}/coverage/lcov-report/index.html

.PHONY: test-snapshots
test-snapshots: check-versions ensure-artifact-dir
	NODE_ENV=test ${JEST} -u

# ---------------- Misc -----------------

.PHONY: analyze
analyze: check-versions
	node ./internals/scripts/analyze.js

# --------------- CI Scripts -----------------

.PHONY: install-no-clean
install-no-clean: check-versions
	yarn install

.PHONY: lint-js-junit
lint-js-junit: check-versions ensure-artifact-dir
	${ESLINT} ${ESLINT_JUNIT_FLAGS} '${SRC_DIR}/**/*.js'

.PHONY: lint-css-junit
lint-css-junit: check-versions ensure-artifact-dir
	${STYLELINT} ${STYLELINT_JUNIT_FLAGS} '${SRC_DIR}/**/*.js'

.PHONY: test-ci
test-ci: check-versions ensure-artifact-dir
	NODE_ENV=test ${JEST} --ci --coverage

.PHONY: install-deployment-deps
install-deployment-deps:
	./internals/scripts/deployment/install-deployment-deps.sh

.PHONY: deploy-staging
deploy-staging:
	./internals/scripts/deployment/deploy-staging.sh

.PHONY: deploy-production
deploy-production:
	./internals/scripts/deployment/deploy-production.sh

# ----------------- Helpers ------------------

.PHONY: check-versions
check-versions:
	@./internals/scripts/check-versions.sh

.PHONY: clean
clean:
	@rm -rf ${BUILD_DIR}
	@rm -rf ${ARTIFACT_DIR}
	@rm -rf node_modules

.PHONY: ensure-artifact-dir
ensure-artifact-dir:
	@mkdir -p ${ARTIFACT_DIR}/build
	@mkdir -p ${ARTIFACT_DIR}/coverage/lcov-report
	@mkdir -p ${ARTIFACT_DIR}/test_results/eslint
	@mkdir -p ${ARTIFACT_DIR}/test_results/stylelint
	@mkdir -p ${ARTIFACT_DIR}/storybook-dist
