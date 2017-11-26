var data = [12, 41, 62, 28];

function massOut() {
    var index = document.getElementById('inp1').value;
    var newData = document.getElementById('inp2').value;
    data[index] = newData;
    console.log(data);
    for (var i in data) {
        p.innerHTML += i + ' : ' + data[i] + "<br>";
    }
    p.innerHTML += "<br><br>"
}

function massPop() {
    p.innerHTML += "Удаленный POPом: " + data.pop() + ";<br><br>";
    p.innerHTML += "Оставшиеся : <br>"
    for (var i in data) {
        p.innerHTML += i + ' : ' + data[i] + "<br>";
    }
    p.innerHTML += "<br><br>"
}

function massShift() {
    p.innerHTML += "Удаленный SHIFTом: " + data.shift() + ";<br><br>";
    p.innerHTML += "Оставшиеся : <br>"
    for (var i in data) {
        p.innerHTML += i + ' : ' + data[i] + "<br>";
    }
    p.innerHTML += "<br><br>"
}

function massPush() {
    var newData = document.getElementById('inp2').value;
    data.push(newData);
    p.innerHTML += "Добавленный PUSHем: " + newData + ";<br><br>";
    p.innerHTML += "Итоговый : <br>"
    for (var i in data) {
        p.innerHTML += i + ' : ' + data[i] + "<br>";
    }
    p.innerHTML += "<br><br>"
}

function massUnshift() {
    var newData = document.getElementById('inp2').value;
    data.unshift(newData);
    p.innerHTML += "Добавленный UNSHIFTом: " + newData + ";<br><br>";
    p.innerHTML += "Итоговый : <br>"
    for (var i in data) {
        p.innerHTML += i + ' : ' + data[i] + "<br>";
    }
    p.innerHTML += "<br><br>"
}

var p = document.getElementById("new");
document.getElementById('buttonOk').onclick = massOut;
document.getElementById('buttonPop').onclick = massPop;
document.getElementById('buttonShift').onclick = massShift;
document.getElementById('buttonPush').onclick = massPush;
document.getElementById('buttonUnshift').onclick = massUnshift;
