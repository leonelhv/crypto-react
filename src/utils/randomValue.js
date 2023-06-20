export function getRandomValueFromArray (array) {
    if (array.length === 0) {
        return "😎"
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
