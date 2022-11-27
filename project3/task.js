

//------------------------------------------------------------
let arr = JSON.parse(localStorage.getItem('array')) 

   let array = arr || []

// ------------------------------------------------
let btn=document.querySelector("#saveData")
btn.addEventListener("click", save)
let name = document.getElementById("inputName").value

function save(event){

let name = document.getElementById('inputName').value
let select = document.getElementById(`select`).value
console.log(name)
    if(select==="dessert"){
        a="desseret"
        x="./1.jpg";
        z=7
    }
    if(select==="mainCo"){
        a="mainCo"
        x="./2.jpg";
        z=18
    }
    if(select==="aptizer"){
        a="aptizer"
        x="./3.jpg";
        z=10
    }
    let obj ={
    
       'orderImage'  : x,
        'customerName': name,
        'foodType':a,
        'payment':z
    }
    array.push(obj)
localStorage.setItem("array",JSON.stringify(array))

printData()
     event.preventDefault()
}

function printData(){

let table1 = '<table border=2>';
    table1 += '<tr><th>order image</th><th>customer name</th><th>food type</th><th>payment</th></tr>';
    array.map( ele => {
      
 
        table1 = table1 + '<tr>',
        table1 = table1 + '<td>'+ `<img src=${ele.orderImage} style="width:150px ;">` + '</td>',
        table1 = table1 + '<td>' + `${ele.customerName}` + '</td>',
        table1 = table1 + '<td>' + `${ele.foodType}` + '</td>'
        table1 = table1 + '<td>'  + `${ele.payment}` + '</td>'
     });  
     table1 += "</table>"

     
     document.getElementById("list").innerHTML = table1;


}
//----------------------------------------------
// remove data in body
let btnRemove=document.getElementById(`remove`)
btnRemove.addEventListener(`click`,removetable)

function removetable(){

    document.getElementById("list").innerHTML = "";
console.log(array)

}
// //----------------------------------------------

// delete data in local storage
let removeLocal=document.getElementById(`delete`)
removeLocal.addEventListener(`click`,deleteLocal)

function deleteLocal(){
    localStorage.removeItem('array')
    document.getElementById("list").innerHTML = "";



}
//----------------------------------------------
