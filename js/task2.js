var date_now = new Date();
var spring_equinoxes = new Date(date_now.getFullYear() + 1, 2, 23);
var autumn_equinoxes = new Date(date_now.getFullYear() + 1, 8, 23);
var one_day = 1000 * 60 * 60 * 24;

let springEquinoxes = document.getElementById("spring equinoxes");
let autumnEquinoxes = document.getElementById("autumn equinoxes");

document.getElementById("btn_task2").addEventListener("click", () => {
   let date1 = spring_equinoxes.getTime();
   let date2 = autumn_equinoxes.getTime();
   let date3 = date_now.getTime();

   let x = Math.round((date1 - date3) / one_day);
   let y = Math.round((date2 - date3) / one_day);

   springEquinoxes.textContent = `Дней осталось до весеннего равноденствия: ${x}`
   autumnEquinoxes.textContent = `Дней осталось до осеннего равноденствия: ${y}`
})