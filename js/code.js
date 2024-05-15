function GenerateCode()
{
    const numbers = "0123456789";
    const len = numbers.length;
    let num = "";
    for(let i = 0; i < 9; i++)
    {
        num += numbers[Math.floor(Math.random() * len)];
        console.log(num);
        const inputElement = document.getElementById("code");
        inputElement.value = num;
    }        
    return num;
}
GenerateCode();
