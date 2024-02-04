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

}