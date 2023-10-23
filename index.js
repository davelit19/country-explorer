"use strict"

import jsonData from './data.json' assert { type: 'json' };

const darkMode = document.getElementById("dark_mode");
const lightMode = document.getElementById("light_mode");
const boxColor = document.getElementsByClassName("box-light");
const lightDark = document.getElementById("mode");
const inputCountry = document.getElementById("country");
const ulDropDown = document.getElementById("ul-drop");
const region = document.querySelector(".region-cont");
const flagTab = document.querySelector(".flags-section");
const searchImg = document.getElementById("enter-img");
const overview = document.querySelector(".overview");
const main = document.querySelector(".main-tab");
const backBtn = document.getElementById("btn");
const overviewImg = document.getElementById("overview-img");
const regionLi = document.getElementsByClassName("li-region");
const lightCont = document.getElementsByClassName("light");
const btnText = document.getElementById("btn-text");
const arrowLeft = document.getElementById("arrow-left");
const chevron = document.getElementById("drop_down_icon")


darkMode.addEventListener("click", function () {
    darkMode.classList.toggle("moon");
    lightMode.classList.toggle("sun"); 
    document.body.style.backgroundColor = "var(--Very-Dark-Blue-Dark-Mode-Background)";
    document.body.style.color = " var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    lightDark.textContent = "light mode";
    inputCountry.style.color = " var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    btnText.style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    arrowLeft.src = "images/arrow-left-white.svg";
    searchImg.src = "images/search.white.svg";
    chevron.src = "images/chevron-up-white.svg";

    //Accessing all the whole elements with the box shadow property for dark mode
    for (let i = 0, j = 0; i < boxColor.length && j < lightCont.length; i++, j++) {
        boxColor[i].style.boxShadow = "2px 0 7px var(--Very-Dark-Blue-Light-Mode-Text)";
        boxColor[i].style.backgroundColor = "var(--Dark-Blue-Dark-Mode-Elements)";
       // lightCont[j].style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";

        //remove the box-dark classs from the boxColor array element
        if(boxColor[i].classList.contains("box-dark")){
            boxColor[i].classList.remove("box-dark")
        } 
    }
     // Iterating through ligthCont
    for(let j= 0; j < lightCont.length; j++ ){
        lightCont[j].style.color = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
    }
})



lightMode.addEventListener("click", function () {
    darkMode.classList.toggle("moon");
    lightMode.classList.toggle("sun");
    document.body.style.backgroundColor = "var(--Very-Light-Gray-Light-Mode-Background)";
    document.body.style.color = " var(--Very-Dark-Blue-Light-Mode-Text)";
    lightDark.textContent = "dark mode";
    inputCountry.style.color = " var(--Very-Dark-Blue-Light-Mode-Text)";
    btnText.style.color = "var(--Very-Dark-Blue-Light-Mode-Text) ";
    arrowLeft.src = "images/arrow-left.svg";
    searchImg.src = "images/search.white.svg";
    chevron.src = "images/chevron-up.svg";

    //Same for light mode
    for (let i = 0; i < boxColor.length; i++) {
        boxColor[i].style.boxShadow = "2px 0 7px var(--Box-Color)"
        boxColor[i].style.backgroundColor = "var(--White-Dark-Mode-Text-Light-Mode-Elements)";
        //lightCont[j].style.color = "var(--Very-Dark-Blue-Light-Mode-Text) "

        //remove the box-dark classs from the boxColor array element
        if(boxColor[i].classList.contains("box-dark")){
            boxColor[i].classList.remove("box-dark")
        } 

            // Iterating through ligthCont
        for(let j= 0; j < lightCont.length; j++ ){
            lightCont[j].style.color = "var(--Very-Dark-Blue-Light-Mode-Text) "
        }
    }
})

function regionBox() {
    ulDropDown.classList.toggle("active");
}
region.addEventListener("click", () => {
    setTimeout(regionBox, 300)
    // regionBox();
    document.getElementById("drop_down_icon").classList.toggle("active");
})

document.addEventListener("DOMContentLoaded", function () {
    showFlag(jsonData.length, jsonData);
})


function showFlag(num, argArr) {
    let count = 0;
    while (flagTab.childElementCount < num) {
        diff(count, argArr);
        count++
    }
}

function diff(n, useArr) {
    //creating the flag container div and adding the necessary class name
    let div = document.createElement("div");
   if(window.getComputedStyle(document.body).backgroundColor === "rgb(32, 44, 55)"){
        div.className += " box-dark box-light flag-div"
    } else {
        div.className += "box-light flag-div";  
    }
    
    flagTab.appendChild(div)
    //creating the img element
    let flagImg = document.createElement("img");
    flagImg.src = useArr[n].flags.svg;
    flagImg.alt = "flag";
    flagImg.className += "img1";
    div.appendChild(flagImg);
    //creating the box-light div child
    let childDiv = document.createElement("div");
    childDiv.className += "country-info";
    div.appendChild(childDiv);
    //creating the unordered list 
    let ul = document.createElement("ul");
    childDiv.appendChild(ul);
    //creating the first list item
    let li1 = document.createElement("li");
    li1.textContent = "population:";
    ul.appendChild(li1)
    let span1 = document.createElement("span");
    li1.appendChild(span1)
    span1.textContent = useArr[n].population
    span1.className += "light"
    li1.appendChild(span1)

    //creating the seconde list item
    let li2 = document.createElement("li");
    li2.textContent = "region:";
    ul.appendChild(li2)
    let span2 = document.createElement("span");
    li1.appendChild(span2)
    span2.textContent = useArr[n].region;
    span2.className += "light"
    li2.appendChild(span2)
    //creating the third list item
    let li3 = document.createElement("li");
    li3.textContent = "capital:";
    ul.appendChild(li3)
    let span3 = document.createElement("span");
    li3.appendChild(span3)
    span3.textContent = useArr[n].capital;
    span3.className += "light"
    li3.appendChild(span3)
}

searchImg.addEventListener("click", showCountry);
document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        showCountry();
    }
})


function showCountry() {
    let country = inputCountry.value
    //capitalizing the inputted value
    let arr = country.split(" ")
    // country = country.charAt(0).toUpperCase() + country.slice(1, country.length).toLowerCase();
    for (let x = 0; x < arr.length; x++) {
        arr.splice(arr.indexOf(arr[x]), 1, (arr[x].charAt(0).toUpperCase().concat(arr[x].slice(1, arr[x].length).toLowerCase())))
    }
    country = arr.join(" ")

    for (let i = 0; i < jsonData.length; i++) {
        if (country === jsonData[i].name) {
            main.style.display = "none";
            overview.style.display = "block";
            overviewImg.src = jsonData[i].flags.svg
            //
            document.getElementById("overview-name").textContent = jsonData[i].name
            document.querySelector(".over-span1").textContent = jsonData[i].nativeName;
            document.querySelector(".over-span2").textContent = jsonData[i].population;
            document.querySelector(".over-span3").textContent = jsonData[i].region;
            document.querySelector(".over-span4").textContent = jsonData[i].subregion;
            document.querySelector(".over-span5").textContent = jsonData[i].capital;
            document.querySelector(".over-span6").textContent = jsonData[i].topLevelDomain;
            document.querySelector(".over-span7").textContent = jsonData[i].currencies[0].code;
            //iterating through the language array to get the names
            document.querySelector(".over-span8").textContent = "";
            for (let k = 0; k < jsonData[i].languages.length; k++) {
                document.querySelector(".over-span8").textContent += jsonData[i].languages[k].name + ", "
            }
            border(i);
        }
    }
}
backBtn.addEventListener("click", function () {
    main.style.display = "block";
    overview.style.display = "none";
    inputCountry.value = ""
})

function regionOverview (arrInput) {
    let flagContainer = document.getElementsByClassName("flag-div")
    for (let i = 0; i < flagContainer.length; i++) {
        flagContainer[i].addEventListener("click", function () {
            main.style.display = "none";
            overview.style.display = "block";
            overviewImg.src = arrInput[i].flags.svg
            //
            document.getElementById("overview-name").textContent = arrInput[i].name
            document.querySelector(".over-span1").textContent = arrInput[i].nativeName;
            document.querySelector(".over-span2").textContent = arrInput[i].population;
            document.querySelector(".over-span3").textContent = arrInput[i].region;
            document.querySelector(".over-span4").textContent = arrInput[i].subregion;
            document.querySelector(".over-span5").textContent = arrInput[i].capital;
            document.querySelector(".over-span6").textContent = arrInput[i].topLevelDomain;
            document.querySelector(".over-span7").textContent = arrInput[i].currencies[0].code;

            //iterating through the language array to get the names
            document.querySelector(".over-span8").textContent = "";
            for (let k = 0; k < jsonData[i].languages.length; k++) {
                document.querySelector(".over-span8").textContent += arrInput[i].languages[k].name + ","
            }
            border(i);
        })
    }
}

//Collecting and looping through all the flag div 
document.addEventListener("DOMContentLoaded", function () {
    regionOverview(jsonData);

})



function border(n) {
    document.querySelector(".span-country").innerHTML = "";
 if(jsonData[n].hasOwnProperty("borders")) { 
    const num =  jsonData[n].borders.length;
    let m = 0;
    while(m < num){
        let spanCount = document.createElement("span");
        // spanCount.className += " box-light";
        if(window.getComputedStyle(document.body).backgroundColor === "rgb(32, 44, 55)"){
            spanCount.className += "box-dark box-light";
        } else {
            spanCount.className += "box-light";  
        }
        spanCount.textContent = jsonData[n].borders[m];
        document.querySelector(".span-country").appendChild(spanCount);
        m++
    }
  } else {
    document.querySelector(".span-country").innerHTML = "None"
} 
}  

//Iterating through the region list items
for(let i = 0; i < regionLi.length; i++){
   let arr;
    regionLi[i].addEventListener("click", function(){
      flagTab.innerHTML = ""
       arr = [];
        for(let j = 0; j < jsonData.length; j++) {
        if(jsonData[j].region === regionLi[i].textContent){
          arr.push(jsonData[j])
        }
    }
    showFlag(arr.length, arr);
    regionBox();
    showCountry();
    regionOverview(arr)
    console.log(arr)
    })
}
