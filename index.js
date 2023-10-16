// Passing functions as arguments in JS
var years = [1992,1988,1948,2006,1994];//Concept of Array in JS


//Genereic function with a some value of the array and methods inside

function arrayCalc(arr, fn) {
     var arrRes = [];//Empty array inside of function
     for (var i = 0; i < arr.length; i++)//concept of for each
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

// Calculate the years of birth inside of the array list
function calAge(el){
    return 2023 - el;
}

//Function as argument created to see what age on the array is true greater than 18
function isFullAges(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }
    else{
        return -1;
    }
}


//In here we could pass the arrayCalc as argument to use inside the variable which consult these values
var ages = arrayCalc(years, calAge);

var isFulAge = arrayCalc(ages, isFullAges);

var maxRate = arrayCalc(ages, maxHeartRate)


console.log(ages);
console.log(isFulAge);
console.log(maxRate);

