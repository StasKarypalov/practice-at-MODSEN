function printLastCharacter(str) {
    if (str.length === 0) {
        console.log('Строка пуста.');
        return;
    }

    const lastChar = str.charAt(str.length - 1);
    console.log(`Последний символ строки: ${lastChar}`);
}


const inputString = "Пример строки";
printLastCharacter(inputString);