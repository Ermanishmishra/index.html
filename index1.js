let myform = document.querySelector("form");
let inp1 = document.getElementById("name");
let inp2 = document.getElementById("employeeID");
let inp3 = document.getElementById("department");
let inp4 = document.getElementById("exp");
let inp5 = document.getElementById("email");
let inp6 = document.getElementById("mbl");

let tbody = document.querySelector("tbody");

let Alldata = [];

myform.addEventListener("submit",function(ele){

    ele.preventDefault();

    let data = {};

    data.name = inp1.value;
    data.employeeID = inp2.value;
    data.department = inp3.value;
    data.exp = inp4.value;
    data.email = inp5.value;
    data.mbl = inp6.value;
    Alldata.push(data);
    tbody.innerText = null;
    Alldata.map((ele)=>{

     let row = document.createElement("tr");
     let th1 = document.createElement("th");
     let th2 = document.createElement("th");
     let th3 = document.createElement("th");
     let th4 = document.createElement("th");
     let th5 = document.createElement("th");
     let th6 = document.createElement("th");
     let th7 = document.createElement("th");
     let th8 = document.createElement("th");
     let th9 = document.createElement("button")

     if(ele.exp > 5){
        th7.innerText = "Senior";
     }
     else if(ele.exp > 2 && ele.exp <= 5){
        th7.innerText = "Junior";
     }
     else if(ele.exp <= 1){
        th7.innerText = "Fresher"
     }



     th1.innerText = ele.name;
     th2.innerText = ele.employeeID;
     th3.innerText = ele.department;
     th4.innerText = ele.exp;
     th5.innerText = ele.email;
     th6.innerText = ele.mbl;
     

     row.append(th1,th2,th3,th4,th5,th6,th7);

     tbody.append(row);

    })
})
function click(){
   tbody = ""
}