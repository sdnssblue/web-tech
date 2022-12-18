function generate() {
    return (Math.floor(Math.random() * 201) - 100);
}

function generate_array() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(generate());
    }
    return array;
}

function get_max_modul(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (Math.abs(array[i]) > Math.abs(max)) {
            max = array[i];
        }
    }
    return max;
}

let array = document.getElementById("array");
let result = document.getElementById("result");

document.getElementById("btn_task1").addEventListener("click", () => {
    let x = generate_array();
    let y = get_max_modul(x);
    let z = x.map(item => {
        return " " + item;
    })

    array.textContent = `Сгенерированный массив значений: ${z}`
    result.textContent = `Максимальное значение по модулю: ${y}`
})