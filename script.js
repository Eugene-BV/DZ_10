//Задание 1,2

function Max() {
    var a = document.getElementById('num1').value;
    var b = document.getElementById('num2').value;
    if (a === b) {
        p1.innerHTML += 'Числа №1 и №2 равны <br>';
    }
    else if (a > b) {
        p1.innerHTML += 'Число №1 большее <br>';
    }
    else {
        p1.innerHTML += 'Число №2 большее <br>';
    }
}
var p1 = document.getElementById('out1');
document.getElementById('btnmax').onclick = Max;

//Задание 3

function Blk() {
    var a1 = document.getElementById('block').value;
    if (a1 >= 1 && a1 <= 20) {
        p2.innerHTML = 'Квартира в парадной №1';
    }
    else if (a1 >= 21 && a1 <= 48) {
        p2.innerHTML = 'Квартира в парадной №2';
    }
    else if (a1 >= 49 && a1 <= 90) {
        p2.innerHTML = 'Квартира в парадной №3';
    }
    else {
        p2.innerHTML = 'В этом доме нет такой квартиры!';
    }
}


document.getElementById('btnblock').onclick = Blk;
var p2 = document.getElementById('out2');

//Задание 4

function Pswrd() {
    var a2 = document.getElementById('log').value;
    var b2 = document.getElementById('pass').value;
    if (a2 == 'ivan' && b2 == '334455') {
        p3.innerHTML = 'Добро пожаловать';
    }
    else if (a2 == 'alex' && b2 == '777') {
        p3.innerHTML = 'Добро пожаловать';
    }
    else if (a2 == 'petr' && b2 == 'b5678') {
        p3.innerHTML = 'Добро пожаловать'
    }
    else {
        p3.innerHTML = 'Ошибка входа';
    }
}

var p3 = document.getElementById('out3');
document.getElementById('btnpass').onclick = Pswrd;

//Здание 5

function Fdate() {
    var a3 = document.getElementById('date').value;
    var b3 = 2017 - a3;
    if (b3 >= 16) {
        p4.innerHTML = 'Ваш возраст '+b3+', добро пожаловать!';
    }
    else    {
        p4.innerHTML = 'Ваш возраст '+b3+', вход воспрещен!';
    }
}

var p4 = document.getElementById('out4');
document.getElementById('btndate').onclick = Fdate;

//задание 6

function Fseniority() {
    var a4 = document.getElementById('seniority').value;
    if (a4 >= 0 && a4 <= 3) {
        p5.innerHTML = 'Надбавка за стаж 0%';
    }
    else if (a4 > 3 && a4 <= 10) {
        p5.innerHTML = 'Надбавка за стаж 10%';
    }
    else if (a4 > 10 && a4 < 30) {
        p5.innerHTML = 'Надбавка за стаж 20%';
    }
    else if (a4 >= 30) {
        p5.innerHTML = 'Надбавка за стаж 30%';
    }
    else {
        p5.innerHTML = 'Ошибка! Введено отрицательное число.'
    }
}

var p5 = document.getElementById('out5');
document.getElementById('btnseniority').onclick = Fseniority;