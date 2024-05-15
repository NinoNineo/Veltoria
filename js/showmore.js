document.getElementById('more').innerHTML = "see more...";
function ShowMore() 
{
   let listi = document.getElementById('list');

   if(listi.style.height == '890px')
   {
    listi.style.height = '2000px';
    document.getElementById('more').innerHTML = "see less...";
   } else {
    listi.style.height = '890px';
    document.getElementById('more').innerHTML = "see more...";
   }    
}