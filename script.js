const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Loop through each dropdown element
for (let select of dropdown)
{
    for(currCode in countryList) // Loop through each currency code in the countryList object
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value= currCode;
        if (select.name ==="from" && currCode === "USD") 
        {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
        select.addEventListener("change" , (evt) => {
            updateFlag(evt.target)
        })
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode  = countryList [currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click" , async (evt)=>{
    evt.preventDefault();

