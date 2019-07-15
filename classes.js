// Задание 1

// Создать массив «Список покупок». Каждый элемент массива
// является объектом, который содержит название продукта, необ-
// ходимое количество и куплен или нет. Написать несколько функ-
// ций для работы с таким массивом.
// 1. Вывод всего списка на экран таким образом, чтобы сначала
// шли некупленные продукты, а потом – купленные.
// 2. Добавление покупки в список. Учтите, что при добавлении
// покупки с уже существующим в списке продуктом, необ-
// ходимо увеличивать количество в существующей покупке,
// а не добавлять новую.
// 3. Покупка продукта. Функция принимает название продукта
// и отмечает его как купленный.

class Purchase {
    constructor(name, count, isPurchased) {
        this.name = name;
        this.count = count;
        this.isPurchased = isPurchased;
    }
}

class PurchasesList {
    constructor(arr) {
        this.purchases = arr;
    }

    showAll() {
        this.purchases.sort((a, b) => a.isPurchased - b.isPurchased);
        for (let elem of this.purchases) {
            document.write(`<p>${elem.name} in count <span class="purchase_count">${elem.count}</span> 
                ${elem.isPurchased
                    ? "<span class='is_purchased'>is purchased</span>"
                    : "<span class='is_not_purchased'>is not purchased</span>"
                }</p>`);
        }
    }

    add(purchase) {
        for (let elem of this.purchases) {
            if (elem.name == purchase.name) {
                elem.count += purchase.count;
                return;
            }
        }

        this.purchases.push(purchase);
    }

    buy(name) {
        let p = this.purchases.find(a => a.name == name);
        let index = this.purchases.indexOf(p);

        p.isPurchased = true;
        this.purchases[index] = p;
    }
}

let p1 = new Purchase("macbook", 4, false);
let p2 = new Purchase("hourse", 2, true);
let p3 = new Purchase("macbook", 2, false);
let p4 = new Purchase("sheep", 3, true);
let p5 = new Purchase("pliers", 3, false);

let arr = [p1, p2, p3, p4, p5];
let list = new PurchasesList(arr);


// list.buy("pliers");
// list.showAll();

// Задание 2

// Создать массив, описывающий чек в магазине. Каждый эле-
// мент массива состоит из названия товара, количества и цены за
// единицу товара. Написать следующие функции.
// 1. Распечатка чека на экран.
// 2. Подсчет общей суммы покупки.
// 3. Получение самой дорогой покупки в чеке.
// 4. Подсчет средней стоимости одного товара в чеке.

class Product {
    constructor(name, count, price) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
}

class ProductList {
    constructor(arr) {
        this.list = arr;
    }

    print() {
        // All products

        for (const elem of this.list) {
            document.write(`<p>${elem.name} ${elem.count} items ----- ${elem.count * elem.price}$</p>`)
        }

        document.write(`<p>----------------------------------</p>`)

        // Total price

        document.write(`<p>Total price = <span class="is_not_purchased">${this.getTotalPrice()}$</span></p>`)
        document.write(`<p>Most expensive product is 
                            <span class="is_purchased">
                                ${this.getDearestProduct().name}
                            </span>
                        </p>`); // почти ангуляр)

        // Average price

        document.write(`<p>Average price is 
                            <span class="is_not_purchased">
                                ${this.getAveragePrice()}$
                            </span>
                        </p>`);

    }

    getTotalPrice() {
        let total = 0;

        for (const elem of this.list)
            total += elem.count * elem.price;

        return total;
    }

    getDearestProduct() {
        const prices = this.list.map(p => p.price * p.count); // делаем массив c ценами
        const max = Math.max(...prices); // не, ну это лайк

        return this.list.find(p => p.price * p.count == max);
    }

    getAveragePrice() {
        let sum = 0;

        for (const elem of this.list)
            sum += elem.price;

        return sum / this.list.length;
    }
}

let pr1 = new Product("milk", 2, 24);
let pr2 = new Product("butter", 1, 34);
let pr3 = new Product("ice cream", 5, 14);

let prs = [pr1, pr2, pr3];
let products = new ProductList(prs);

// products.print();


// Задание 3

// Создать массив css-стилей (цвет, размер шрифта, выравнива-
// ние, подчеркивание и т. д.). Каждый элемент массива – это объ-
// ект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и
// текст, и выводит этот текст с помощью document.write() в тегах
// <p></p>, добавив в открывающий тег атрибут style со всеми сти-
// лями, перечисленными в массиве.

class Style {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

let s1 = new Style("font-size", "20px");
let s2 = new Style("font-weight", "bold");
let s3 = new Style("font-family", "'Arial', sans-serif");
let s4 = new Style("font-style", "italic");
let s5 = new Style("color", "blue");

let styles = [s1, s2, s3, s4, s5];

function getStylesInNormalView(styles) {
    return styles.map(style => style.name + ":" + style.value).join(";");
}

function writeParagraph(text, styles) {
    document.write(`<p style="${getStylesInNormalView(styles)}">${text}</p>`)
}

// writeParagraph("Lorem ipsum dolor sit amet.", styles);


// Задание 4

// Создать массив аудиторий академии. Объект-аудитория со-
// стоит из названия, количества посадочных мест (от 10 до 20) и
// названия факультета, для которого она предназначена.
// Написать несколько функций для работы с ним.
// 1. Вывод на экран всех аудиторий.
// 2. Вывод на экран аудиторий для указанного факультета.
// 3. Вывод на экран только тех аудиторий, которые подходят для
// переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета.
// 4. Функция сортировки аудиторий по количеству мест.
// 5. Функция сортировки аудиторий по названию (по алфа-
// виту).

class Group {
    constructor(name, count, faculty) {
        this.name = name;
        this.count = count;
        this.faculty = faculty;
    }
}

class Classroom {
    constructor(name, seats, faculty) {
        this.name = name;
        this.seats = seats;
        this.faculty = faculty;
    }
}

class Academy {
    constructor(arr) {
        this.list = arr;
    }

    display() {
        for (const elem of this.list)
            document.write(`<p>Classroom #${elem.name}; Capacity: ${elem.seats}; Faculty: ${elem.faculty}</p>`);
    }

    displayForFaculty(faculty) {
        document.write(`<p style="color: red">Classrooms for faculty <span>${faculty}</span></p>`);

        for (const elem of this.list)
            if (elem.faculty == faculty)
                document.write(`<p>Classroom #${elem.name}; Capacity: ${elem.seats}; Faculty: ${elem.faculty}</p>`)
    }

    displayForGroup(group) {
        document.write(`<p style="color: red">Classrooms for group <span>${group.name}</span></p>`);

        for (const elem of this.list)
            if (elem.faculty == group.faculty)
                document.write(`<p>Classroom #${elem.name}; Capacity: ${elem.seats}; Faculty: ${elem.faculty}</p>`)
    }

    sortBySeatsCount() {
        this.list.sort((a, b) => a.seats - b.seats);
    }

    sortByName() {
        this.list.sort((a, b) => {
            if (a.name > b.name)
                return 1;
            if (b.name > a.name)
                return -1;
            return 0;
        });
    }
}

let group = new Group("PS/RPO/17/5", 7, "RPO");

let c1 = new Classroom(4, 17, "RPO");
let c2 = new Classroom(2, 18, "KGaD");
let c3 = new Classroom(3, 16, "NaCB");

let cls = [c1, c2, c3];


let academy = new Academy(cls);
academy.sortByName();
academy.display();
academy.displayForGroup(group);









