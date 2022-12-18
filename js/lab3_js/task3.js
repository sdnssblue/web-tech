var input = document.getElementById("input_text");
var text_1 = document.getElementById("text_1");

input.addEventListener("change", (e) => {
    let x = "Не трогай, это на новый год!";
    if (x != e.target.value){
        text_1.textContent = "Быстро сделай все, как было!";
    }
    else{
        text_1.textContent = "";
    }
})
