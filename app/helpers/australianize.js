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
    if (aussieName === 'Shouvik') {
        aussieName = 'Rosé'
    } else if (aussieName.endsWith('ine')) {
        // Drop the last 3 letters
        aussieName = aussieName.slice(0, -3)
    } else if (aussieName.endsWith('ly') || aussieName.endsWith('ie')) {
        // Drop the last 2 letters
        aussieName = aussieName.slice(0, -2)
    } else if (aussieName.endsWith('a') || aussieName.endsWith('o')) {
        // Drop the last letter
        aussieName = aussieName.slice(0, -1)
    }
    aussieName += 'o'
    return aussieName
}
