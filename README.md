# fe-good-morning
The Frontend for Good Morning Tophat
https://good-morning.tophat.com/

###
For the backend service see:
https://github.com/jakebolam/good-morning-service (https://good-morning-service.tophat.com/)

## Getting Started

1. Update Dependencies
    
    This repo uses `node==8.6.0` and `yarn>=1.0.2`. You need to as well.
    
    Use `nvm` for managing different versions of node
    ```bash
    brew install nvm
    nvm install 8.6.0
    nvm use 8.6.0
    ```
    
    Upgrade Yarn with `brew upgrade yarn`

1. Install Project Dependencies
    
    ```bash
    make install
    ```

1. Start Developing!

    ```bash
    make start
    ```

1. Optional Dependencies

    [Watchman](https://facebook.github.io/watchman/) for using `make test-watch`
    
    ```bash
    brew install watchman
    ```


## Make Tasks
#### Useful Commands for Development

- `make help` - show this help message
- `make install` - install dependencies
- `make start` - builds and runs the project, autoreloading on file changes
- `make start-tunnel` - runs the project and provides a globally accessible proxy url for testing on other devices
- `make lint` - runs eslint and stylelint
- `make lint-fix` - attempts to autofix linting errors
- `make test` - runs the full test suite with jest
- `make test-watch` - re-runs tests on file changes - VERY useful
- `make test-snapshots` - updates the jest snapshots
- `make test-coverage` - creates a coverage report and opens it in your browser
- `make storybook` - starts storybook and watches for changes
- `make analyze` - analyzes your webpack bundling

#### Other Commands (for CI / Production)

- `make build` - build the project distribution
- `make install-no-clean` - installs without clearning dependencies, for improved caching on CI
- `make lint-js-junit` - runs eslint and generates a junit file containing any errors
- `make lint-css-junit` - runs stylelint and generates a junit file containing any errors
- `make test-ci` - runs the jest test suite and outputs coverage and junit information
- `make storybook-build` - builds the storybook distribution
- `make install-deployment-deps` - installs dependencies needed for the deployment scripts
- `make deploy-staging` - deploys the staging environment
- `make deploy-production` - deploys the production environment

## How Do I Develop in this Repo?

Please read through the documentation, and ask questions if you can't find the answers within

- [General](docs/general)
  - [Introduction ](docs/general/introduction.md)
  - [FAQ](docs/general/faq.md)
  - [Debugging](docs/general/debugging.md)  
  - [Gotchas](docs/general/gotchas.md)
  - [Extracting components](docs/general/components.md)
- [Testing](docs/testing)
  - [Unit Testing](docs/testing/unit-testing.md)
  - [Component Testing](docs/testing/component-testing.md)
  - [Remote Testing](docs/testing/remote-testing.md)
  - [Saga Testing](docs/testing/saga-testing.md)
- [Styling (CSS)](docs/css)
  - [Next Generation CSS](docs/css/README.md#next-generation-css)
  - [styled-components](docs/css/README.md#styled-components)
- [JS](docs/js)
  - [Async Components](docs/js/async-components.md)
  - [Redux](docs/js/redux.md)
  - [ImmutableJS](docs/js/immutablejs.md)
  - [reselect](docs/js/reselect.md)
  - [redux-saga](docs/js/redux-saga.md)
  - [routing](docs/js/routing.md)
