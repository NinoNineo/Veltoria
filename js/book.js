let time_input = document.getElementById('time');
let numberguest_input = document.getElementById('numberguest');
let phonenum_input = document.getElementById('phonenum');
let book_btn = document.getElementById('black-order-btn');
let val = "";
let val2 = "";
let val3 = "";
book_btn.disabled = true;
time_input.addEventListener("keyup", (e) => 
{
    val = e.currentTarget.value;
    
});
phonenum_input.addEventListener("keyup", (i) => 
{
    val2 = i.currentTarget.value;
    
});
numberguest_input.addEventListener("keyup", (i) => 
{
    val3 = i.currentTarget.value;
    
});
function Check()
{
    if(val != "" && val2 != "" && val3 != "")
    {
        book_btn.disabled = false;
    }
    else
    {
        book_btn.disabled = true;
    }
}
time_input.addEventListener("keyup", Check);
numberguest_input.addEventListener("keyup", Check);
phonenum_input.addEventListener("keyup", Check)
book_btn.addEventListener('click', book_btn);