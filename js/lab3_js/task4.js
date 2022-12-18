var searcher = document.getElementById("searcher");
var button = document.getElementById("btn_search");

button.addEventListener("click", () => {
    alert("Уже ищем ваш запрос!")
    setTimeout(() => {
        window.location.href=`https://www.yandex.ru/search/?lr=67&offline_search=1&text=${searcher.value}`
    }, 1000);  
})