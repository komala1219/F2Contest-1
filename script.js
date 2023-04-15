// function calculate(num1, num2, operator) {
//     // Use if-else statements to determine which arithmetic operation to perform based on the operator entered.
//     // return the final value that you get after operating on num1 and num2 based on what the operator is
//     // if operator == "+" then return num1+num2 , else if operator == "-" then return num1-num2 and so on....
//     //   write your code here -->
//   }

//   // ignore the function below
//   function performOperations() {
//     // Get the values of the two input fields and the operator.
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var result = document.getElementById("result");
//     var operator = document.getElementById("operator").value;
//     // Check if the input values are valid.
//     if (isNaN(num1) || isNaN(num2)) {
//       result.textContent = "Please enter valid numbers!";
//     }
//     if (operator === "") {
//       result.textContent = "Please select an operator!";
//     }
//     const res = calculate(parseFloat(num1), parseFloat(num2), operator);
//     result.textContent = "Result is : " + res;
//   }

//********************************************************************************* */

let array = [{ id: 1, name: "john", age: "18", profession: "developer" }, { id: 2, name: "jack", age: "20", profession: "developer" }, { id: 3, name: "karen", age: "19", profession: "admin" }]


//1. console.log all the employees which have the profession of developer using the map function.

function PrintDeveloperbyMap() {


    let result = array.map(employee => {
        if (employee.profession == "developer")

            console.log(employee);
    })


}

//PrintDeveloperbyMap() ;



// 2. console.log all the employees which have the profession of developer using the for each function.

function PrintDeveloperbyForEach() {


    let result = array.forEach(employee => {
        if (employee.profession == "developer")

            console.log(employee);

    })

}

// PrintDeveloperbyForEach();






//3.In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.


function addData() {

    let obj4 ={id:4,name:"susan",age:"20",profession:"intern"} ;
    
    array.push(obj4);
    console.log(array);
}

// addData();






//4.In this function remove the object where the profession is admin. console.log the changed array.

function removeAdmin() {
    
    array= array.filter(employee => employee.profession !== 'admin');
    console.log(array);
    
}

// removeAdmin();
 




//5.Make another array with 3 objects just like the one in the above given array.
 function ConcatinateArray() 
 {
    let array2=[{ idno: 10, Studentname: "john", age: "18"}, { idno: 20, Studentname: "jack", age: "20" }, { idno: 30, studentname: "karen", age: "19"  }]
    console.log(array.concat(array2));
 }

 ConcatinateArray() ;





 


