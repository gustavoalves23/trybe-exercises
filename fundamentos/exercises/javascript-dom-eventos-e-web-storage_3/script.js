function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //ex1

  function createDaysNumbers(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let listOfNumberDays = document.querySelector("#days");
    

    for (let index = 0; index < dezDaysList.length; index += 1){
        if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
            let createNumberDay = document.createElement("li");
            createNumberDay.innerHTML = dezDaysList[index];
            if (dezDaysList[index] === 25){
                createNumberDay.classList = "day holiday friday";
            }
            else{
                createNumberDay.classList = "day holiday";
            }
            
        
            listOfNumberDays.appendChild(createNumberDay);
        }else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
            let createNumberDay = document.createElement("li");
            createNumberDay.innerHTML = dezDaysList[index];
            createNumberDay.classList = "day friday";
        
        
            listOfNumberDays.appendChild(createNumberDay);
        }else{
        let createNumberDay = document.createElement("li");
        createNumberDay.innerHTML = dezDaysList[index];
        createNumberDay.classList = "day";
        listOfNumberDays.appendChild(createNumberDay);
    }

  }
}


  createDaysNumbers();


  //ex2
function createButtonHoliday(feriados) {
    let buttonContainer = document.querySelector(".buttons-container");
    let button = document.createElement("button");
    button.innerText = "Feriados";
    button.id = "btn-holiday";
    buttonContainer.appendChild(button);
}

createButtonHoliday();

//ex3

function clickButtonHolliday () {

    function changeHollidayBG (){
        let holydayDaysSize = document.getElementsByClassName("holiday").length;
        let color;
            if (document.getElementsByClassName("holiday")[0].style.backgroundColor == "blue"){
                color = "rgb(238,238,238)" ;
            }else {
                color = "blue";
            }
        for (let index = 0; index < holydayDaysSize; index += 1){
            let holidayDay = document.querySelectorAll(".holiday")[index];
            holidayDay.style.backgroundColor = color;
        }
    }
    let buttonSelection = document.querySelector("#btn-holiday");
    buttonSelection.addEventListener("click", changeHollidayBG);
}

clickButtonHolliday();

//ex4 

function createButtonFriday(feriados) {
    let buttonContainer = document.querySelector(".buttons-container");
    let button = document.createElement("button");
    button.innerText = "Sexta-feira";
    button.id = "btn-friday";
    buttonContainer.appendChild(button);
}

createButtonFriday();


function clickButtonFriday () {

    function changeFridayBG (){
        let fridayDaysSize = document.getElementsByClassName("friday").length;
        let color;
            if (document.getElementsByClassName("friday")[0].style.backgroundColor == "blue"){
                color = "rgb(238,238,238)" ;
            }else {
                color = "blue";
            }
        for (let index = 0; index < fridayDaysSize; index += 1){
            let fridayDay = document.querySelectorAll(".friday")[index];
            fridayDay.style.backgroundColor = color;
        }
    }
    let buttonSelection = document.querySelector("#btn-friday");
    buttonSelection.addEventListener("click", changeFridayBG);
}

clickButtonFriday();

//ex5
function daySizeInteraction (){
    function dayEnlarger(numberDay) {
        console.log (numberDay.target);
        numberDay.target.style.fontSize = "30px"
    }
    function dayReturner(numberDay) { 
        console.log (numberDay.target);
        numberDay.target.style.fontSize = "20px"
    }
        for (let index = 0; index < document.querySelectorAll(".day").length; index += 1){
    let anyDay = document.querySelectorAll(".day")[index];
    anyDay.addEventListener ("mouseover", dayEnlarger);
    anyDay.addEventListener ("mouseout", dayReturner);
        }
    }
    daySizeInteraction ();

//ex6

