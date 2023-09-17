let inputFirst = document.querySelector(".inputs .first");
let inputSecond = document.querySelector(".inputs .second");
let resultCal = document.querySelector(".result input")

let sumNums = document.querySelector(".buttoms button:nth-child(1)");
let minusNums = document.querySelector(".buttoms button:nth-child(2)");
let multiplyNums = document.querySelector(".buttoms button:nth-child(3)");
let dividedNums = document.querySelector(".buttoms button:nth-child(4)");



sumNums.addEventListener("click", function(){
    // var a = parseFloat(inputFirst.value);
    // var b = parseFloat(inputSecond.value);
    // resultCal.value = a+b;
    
    resultCal.value = parseFloat(inputFirst.value)+ parseFloat(inputSecond.value);

    
    
})

minusNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    resultCal.value = a-b;
    resultCal.innerText=resultCal.value
    
    // resultCal.value = parseFloat(inputFirst.value) - parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})

multiplyNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    resultCal.value = a*b;
    
    // resultCal.value = parseFloat(inputFirst.value) * parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})

dividedNums.addEventListener("click", function(){
    var a = parseFloat(inputFirst.value);
    var b = parseFloat(inputSecond.value);
    resultCal.value = a/b;
    
    // resultCal.value = parseFloat(inputFirst.value) / parseFloat(inputSecond.value);
    // resultCal.innerText = resultCal.value
})


