const getcolor = () =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color_code").innerHTML = randomCode;

    navigator.clipboard.writeText(randomCode);
    // console.log(randomNumber);
}
document.getElementById("btn").addEventListener("click",getcolor)
getcolor();