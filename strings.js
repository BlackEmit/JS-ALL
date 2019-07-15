// task 1

// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

function getInfo(str) {
    let countOfNumbers = 0;
    let countOfLetters = 0;
    let countOfAnotherSymbol = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match("[0-9]"))
            countOfNumbers++;
        else if (str[i].toLowerCase() != str[i].toUpperCase())
            countOfLetters++;
        else
            countOfAnotherSymbol++;

    }

    console.log("Count of numbers: " + countOfNumbers);
    console.log("Count of letters: " + countOfLetters);
    console.log("Count of other symbols: " + countOfAnotherSymbol);
}

// getInfo("d12$%@^3s");

// task 2

// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.

function convertToWords(num) {
    let number1 = String(num)[0];
    let number2 = String(num)[1];

    console.log(number1);
    console.log(number2);

    let str = "";

    if (num <= 19) {
        switch (num) {
            case 10: str = "десять"; break;
            case 11: str = "одиннадцать"; break;
            case 12: str = "двенадцать"; break;
            case 13: str = "тринадцать"; break;
            case 14: str = "четырнадцать"; break;
            case 15: str = "пятнадцать"; break;
            case 16: str = "шестнадцать"; break;
            case 17: str = "семнадцать"; break;
            case 18: str = "восемнадцать"; break;
            case 19: str = "девятнадцать"; break;
        }
    }
    else {
        switch (number1) {
            case "2": str = "двадцать"; break;
            case "3": str = "тридцать"; break;
            case "4": str = "сорок"; break;
            case "5": str = "пятьдесят"; break;
            case "6": str = "шестьдесят"; break;
            case "7": str = "семьдесят"; break;
            case "8": str = "восемьдесят"; break;
            case "9": str = "девяносто"; break;
        }

        switch (number2) {
            case "1": str += " один"; break;
            case "2": str += " два"; break;
            case "3": str += " три"; break;
            case "4": str += " четыре"; break;
            case "5": str += " пять"; break;
            case "6": str += " шесть"; break;
            case "7": str += " семь"; break;
            case "8": str += " восемь"; break;
            case "9": str += " девять"; break;
        }
    }

    return str;
}

// alert(convertToWords(87));

// task 3

// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.

function inverseLetters(str) {
    let newstr = str;
    for (let i = 0; i < str.length; i++) {
        if (str[i].match("[a-z]")) {
            newstr = newstr.replace(newstr.charAt(i), newstr.charAt(i).toUpperCase());
        } else if (str[i].match("[A-Z]")) {
            newstr = newstr.replace(newstr.charAt(i), newstr.charAt(i).toLowerCase());
        } else if (str[i].match("[0-9]")) {
            newstr = newstr.replace(newstr.charAt(i), "_");
        }
    }
    return newstr;
}

// alert(inverseLetters("QWE3asd234"));

// task 4 

// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign
// в textAlign.

function toCamel(str) {
    let underScope = str.indexOf("-");

    str = str.replace("-", "");
    str = str.substring(0, underScope) + str.charAt(underScope).toUpperCase() + str.substring(underScope + 1);

    return str;
}

// alert(toCamel("background-color"));

// task 5

// Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.

function getAbbreviation(str) {
    let arr = str.split(" ");
    let firstLetters = arr.map(val => val[0]);

    return firstLetters.join("").toUpperCase();
}

// alert(getAbbreviation("hyper text markup language"));

// task 6

// Написать функцию, которая принимает любое коли-
// чество строк, объединяет их в одну длинную строку и
// возвращает ее.

function concat(...strings) {
    return strings.join("");
}

// alert(concat("Do", "this", "words", "as", "one", "string"));

// task 7

// Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

function stupidCalculator(expression) {
    expression = expression.replace(/\s/g, "").trim(); // remove all spaces

    // trying to find operation sign
    // if we dont have a "+" expression.indexOf("+") will return -1
    // I make expression.indexOf("+") + 1 to check is true or false (0 == false)
    let indexOfOperation =
        expression.indexOf("+") + 1
        || expression.indexOf("-") + 1
        || expression.indexOf("*") + 1
        || expression.indexOf("/") + 1;

    indexOfOperation--;

    const loperand = +expression.substring(0, indexOfOperation); // take left operand
    const roperand = +expression.substring(indexOfOperation + 1, expression.length); // take right operand

    let result;
    const operationSign = expression.charAt(indexOfOperation);

    // parse operation sign
    switch (operationSign) {
        case "+":
            result = loperand + roperand; break;
        case "-":
            result = loperand - roperand; break;
        case "*":
            result = loperand * roperand; break;
        case "/":
            result = loperand / roperand; break;

        default: new Error("Invalid string in param");
    }

    return `${loperand} ${operationSign} ${roperand} = ${Math.round(result * 100) / 100}`;

    // console.log(roperand);
}

// alert(stupidCalculator("12 / 3"));

// task 8

// Написать функцию, которая получает url и выводит под-
// робную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.

function parseUrl(url) {
    let urlInfo = {};

    let protocol = url.substring(0, url.indexOf("//") + 2); // https://
    let pureProtocol = url.substring(0, url.indexOf(":")); // https

    let trimedUrl = url.replace(protocol, ""); // itstep.org/ua/about

    let domain = trimedUrl.substring(0, trimedUrl.indexOf("/")); // itstep.org
    let path = trimedUrl.substring(trimedUrl.indexOf("/"), trimedUrl.length); // /ua/about

    return {
        protocol: pureProtocol,
        domain: domain,
        path: path,
    }
}

// let url = "https://itstep.org/ua/about";

// console.log("Info about url: " + url);
// console.log("Protocol: " + parseUrl(url).protocol);
// console.log("Domain: " + parseUrl(url).domain);
// console.log("Path: " + parseUrl(url).path);

// task 9

// Написать функцию, которая принимает строку и раздели-
// тель и возвращает массив подстрок, разбитых с помощью
// указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().

// Вот это задание ваще - мозговой штурм на максималках

function split(str, separator) {
    let arr = [];

    do {
        let trimed;

        // если есть "/", тогда берем строку до него
        // если нет - то вырезаем все до конца строки
        let end = str.indexOf(separator) != -1 ? str.indexOf(separator) : str.length;

        trimed = str.substring(0, end); // берем 10
        str = str.replace(str.substring(0, end + 1), ""); // вырезали 10/
        arr.push(trimed);

        // на следующей итерации будет 02/2000

    } while (str); // пока есть, что вырезать

    return arr;
}

// alert(split("10/02/2000", "/"));

// task 10

// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.

function print(template, ...params) {
    for (index in params)
        template = template.replace("%" + (+index + 1), params[index]);

    alert(template);
}

print("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020)