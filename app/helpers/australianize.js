export default function(userName) {
    if (!userName) {
        return userName
    }

    function capitalizeJustFirstLetter(string) {
        const lowerString = string.toLowerCase()
        return lowerString.charAt(0).toUpperCase() + lowerString.slice(1)
    }

    const firstName = userName.split(' ')[0]
    const firstNameCapitalized = capitalizeJustFirstLetter(firstName)
    let aussieName = firstNameCapitalized
    if (aussieName.endsWith('a') || aussieName.endsWith('o')) {
        // Drop the last letter
        aussieName = aussieName.slice(0, -1)
    }
    aussieName += 'o'
    return aussieName
}
