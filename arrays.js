// Написать приложение "генератор красивых фраз"

async function generatePleasantPhrase() {
    const who = ['он', 'она'];
    const is = ['такой', 'такая'];
    const it = [['красивый', 'умный', 'добрый', 'сильный', 'мужественный', 'заботливый'],
    ['красивая', 'умная', 'добрая', 'приятная', 'милая', 'очаровательная']];

    const rnd1 = await (await fetch("https://www.random.org/integers/?num=1&min=0&max=1&col=1&base=10&format=plain&rnd=new")).json();
    const rnd2 = await (await fetch("https://www.random.org/integers/?num=1&min=0&max=5&col=1&base=10&format=plain&rnd=new")).json();


    alert(`${who[rnd1]} ${is[rnd1]} ${it[rnd1][rnd2]}`)
}

// generatePleasantPhrase();

// Подсчет мыльных пузырей

function bubblesCount() {
    const scores = [
        60, 50, 60, 58, 54, 54,
        58, 50, 52, 54, 48, 69,
        34, 55, 51, 52, 44, 51,
        69, 64, 66, 55, 52, 61,
        46, 31, 57, 52, 44, 18,
        41, 53, 55, 61, 51, 44];

    scores.forEach((value, index) => {
        document.write(`<p>Bubble solution #${index} score: ${value}</p>`);
    })

    let max = 0;
    let indexes = [];

    document.write(`<p>Bubbles test: ${scores.length}</p>`);
    document.write(`<p>Highest bubble score: ${max = Math.max(...scores)}</p > `);

    scores.forEach((value, index) => {
        if (value == max)
            indexes.push(index);
    });

    document.write(`<p>Solutions with highes score: #${indexes.join(', #')}</p > `);

}

// bubblesCount();

// Задания повышенной сложности

// Задание 1: В одномерном массиве, заполненном случайными числами, определить
// минимальный и максимальный элементы

function findMaxAndMin(arr) {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr),
    }
}

function parseArray() {
    const arr = [];

    for (let i = 0; i < 10; i++)
        arr.push(~~(Math.random() * 10) - 5);

    console.log(arr);
    console.log("max: " + findMaxAndMin(arr).max);
    console.log("min: " + findMaxAndMin(arr).min);
}

// parseArray();

// Задание 2: Пользователь вводит прибыль фирмы за год (12 месяцев). Затем пользователь
// вводит диапазон (например, 3 и 6 – поиск между 3-м и 6-м месяцем). Необходимо определить
// месяц, в котором прибыль была максимальна и месяц, в котором прибыль была минимальна с
// учетом выбранного диапазона.

function calculateProfitInfo() {
    let monthes = [];
    let range = [];

    for (let i = 0; i < 12; i++)
        monthes.push(+prompt("Profit for " + new Date(2019, i, 2).toLocaleString("en", { month: "long" })));

    const from = +prompt("Enter a month number from");
    const to = +prompt("Enter a month number to");

    for (let i = from - 1; i < to - 1; i++) {
        range.push(monthes[i]);
    }

    alert("Max profit " + findMaxAndMin(range).max);
    alert("Min profit " + findMaxAndMin(range).min);
}

// calculateProfitInfo();

// Задание 3: В одномерном массиве, состоящем из N вещественных чисел вычислить:
// • Сумму отрицательных элементов.
// • Произведение элементов, находящихся между min и max элементами.
// • Произведение элементов с четными номерами.
// • Сумму элементов, находящихся между первым и последним отрицательными
// элементами.

function task3() {
    const arr = [];

    for (let i = 0; i < 10; i++)
        arr.push(~~(Math.random() * 10) - 5);

    let sumNeg = 0;
    let multBetweenMaxAndMin = 1;
    let evenMult = 1;
    let sumBetweenFirstAndLastNegElements = 0;

    arr.forEach(elem => {
        if (elem < 0)
            sumNeg += elem;
    });

    const minIndex = arr.indexOf(Math.min(...arr));
    const maxIndex = arr.indexOf(Math.max(...arr));


    if (minIndex < maxIndex) {
        for (let i = minIndex; i <= maxIndex; i++)
            multBetweenMaxAndMin *= arr[i];
    } else {
        for (let i = maxIndex; i <= minIndex; i++)
            multBetweenMaxAndMin *= arr[i];
    }

    arr.forEach((elem, index) => {
        if (index % 2 == 0)
            evenMult *= elem;
    });


    console.log(arr);
    console.log("Sum of negative elements " + sumNeg);
    console.log("Product of elements between max and min " + multBetweenMaxAndMin);
    console.log("Product of elements with event indexes " + evenMult);
}

task3();

// Задание 4:
// Написать программу, копирующую последовательно элементы одного массива размером 10
// элементов в 2 массива размером 5 элементов каждый.
// Задание 5:
// Напишите программу, которая выполняет поэлементную сумму двух массивов и результат
// заносит в третий массив.

