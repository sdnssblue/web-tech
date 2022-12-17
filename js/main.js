function EditColorButton(btn1, btn2) {
    btn1.style.color = "black";
    btn2.style.color = "rgb(202, 12, 12)";
}

function DrawTable(semestr) {
    var k = document.getElementById(semestr);
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    if (semestr == "1semester") {
        EditColorButton(btn2, btn1)
        var k2 = document.getElementById("2semester");
    }

    else {
        EditColorButton(btn1, btn2);
        var k2 = document.getElementById("1semester");
    }

    k2.style.display = "none";
    k.style.display == "none" ? k.style.display = "table" : k.style.display = "table";
}