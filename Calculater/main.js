let buttons=document.querySelectorAll(" button");
let display=document.querySelector(".display");
const specialCharters=["%","+","-","/","=","*","="];
let output="";

function calculate(btnValue) {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } else {
        if (output === "" && specialCharters.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}


buttons.forEach(btn => {
   
    btn.addEventListener("click",(e)=>calculate(e.target.dataset.value));
});
const Setting=document.querySelector(".Settings");
Setting.onclick=()=>{

  document.body.classList.toggle("Dark-theme");
}

