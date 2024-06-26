const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons-calendar div")

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
console.log(date, currMonth, currYear);
const months = 
[
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
const renderCalendar = () => 
{
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),

    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),

    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),

    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--)
    {
        liTag += `<li>${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++)
    {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active-day" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++)
    {
        liTag += `<li>${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerHTML = `${currYear} ${months[currMonth]}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon =>
{
    icon.addEventListener("click", () => 
{
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11)
    {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear();
        currMonth = date.getMonth();
    }
    else
    {
        date = new Date();
    }
    renderCalendar();
});
});