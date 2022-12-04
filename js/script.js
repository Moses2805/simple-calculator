
//variables
var number = document.querySelectorAll(".number");
var result = document.querySelector(".result");
var operation = document.querySelectorAll(".operation");
var showing = document.querySelector("#calc");
var clear = document.querySelector(".clear");


//for numbers

for (var i = 0; i < number.length; i++) {

	number[i].addEventListener('click', function () {

        if(showing.value != "0") {
    showing.value += this.value;

} else{
    showing.value = showing.value.slice(showing.value[0], showing.value[length]);
    showing.value += this.value;

}

}

)}

//for operations

for (var i = 0; i < operation.length; i++) {

operation[i].addEventListener('click', function() {

    if(showing.value[showing.value.length - 1] != "+" && showing.value[showing.value.length - 1] != "*" && showing.value[showing.value.length - 1] != "-" && showing.value[showing.value.length - 1] != "/" && showing.value.length != 0) {

    showing.value += this.value;
}
}
)}

//for resut =

result.addEventListener('click', function() {

if(showing.value[showing.value.length - 1] != "+" && showing.value[showing.value.length - 1] != "*" && showing.value[showing.value.length - 1] != "-" && showing.value[showing.value.length - 1] != "/") {

   showing.value = eval(showing.value);
}else if(showing.value[showing.value.length - 1] == "+" || showing.value[showing.value.length - 1] == "-"){
    console.log("test")
    showing.value += "0";
   showing.value = eval(showing.value);

} else{
    showing.value += "1";
    showing.value = eval(showing.value); 
}

})

//for clear button
clear.addEventListener('click', function() {
    showing.value = showing.value.slice(showing.value[0], showing.value[length]);
    showing.value += "0";
})



