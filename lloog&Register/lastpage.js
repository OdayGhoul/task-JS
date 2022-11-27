let abdAbsent = 1;
let abrarAbsent = 0;
let ahmadAbsent = 1;
let amrooAbsent = 3;
let abdTask = 10;
let abrarTask = 10;
let ahmadTask = 10;
let amrooTask = 10;
let abdSolvedTask = 10;
let abrarSolvedTask = 8;
let ahmadSolvedTask = 9;
let amrooSolvedTask = 5;
// 

let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) 
let currentUser = JSON.parse(localStorage.getItem("current-user"));

let studentData = JSON.parse(localStorage.getItem('student-data')) ||  [
    {
        id : 1,
        name : 'Abdelmajied Abu Suliman',
        absent : abdAbsent,
        addTask : abdTask,
        solvedTask : abdSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 2,
        name : 'Abrar Alhilawy',
        absent : abrarAbsent,
        addTask : abrarTask,
        solvedTask : abrarSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 3,
        name : 'Ahmad Zytoon',
        absent : ahmadAbsent,
        addTask : ahmadTask,
        solvedTask : ahmadSolvedTask,
        MFeedback : "...",
        Afeedback : "...",

    },
    {
        id : 4,
        name : 'Amroo Al-Wageei',
        absent : amrooAbsent,
        addTask : amrooTask,
        solvedTask : amrooSolvedTask,
        MFeedback : "...",
        Afeedback : "...",
    }
]

window.localStorage.setItem('student-data' , JSON.stringify(studentData))
let callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

if(currentUser.email == 'mona.salih@yahoo.com'){
    document.getElementById("you-can-change-A").style.display = 'none'
    
} else if (currentUser.email == 'Alaa.amayreh2022@yahoo.com') {
    document.getElementById("you-can-change-A").style.display = 'block'
    document.getElementById("you-can-change-M").style.display = 'none'
}


document.getElementById("select").innerHTML = `<option value='first-select'>Select</option>`
callDataFromLocal.forEach( function(element, index) {
    document.getElementById("select").innerHTML += `<option id='${index+1}' value='${index}' class='student'>ID ${index+1} : ${element.name}</option>`
});


function setData() {
        callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

        let myValue = document.getElementById('select').value
        document.getElementById("tableContainer").style.display = 'block'
        document.getElementById("tableForNew").style.display = 'none'
        var html = "<table  border='2' style='width:100%'>";
      
        html += "<tr>";
        html += "<td>" + `  ID  ` + "</td>";
        html += "<td>" + `Student Name` + "</td>";
        html += "<td>" + `Number of absent` + "</td>";
        html += "<td>" + `Number of Total Task` + "</td>";
        html += "<td>" + `Number of Task's Solved` + "</td>";
        html += "<td>" + `Feedback from Coach Mona` + "</td>";
        html += "<td>" + `Feedback from Coach Alaa` + "</td>";
        html += `<td> Delete Student </td>`
        html += "</tr>";

        html += "<tr>";
        
        
        html += "<td>" + callDataFromLocal[myValue].id + "</td>";
        html += "<td>" + callDataFromLocal[myValue].name + "</td>";
        html += `<td id='AddAbsentHere'> ${callDataFromLocal[myValue].absent} <button id='clickToAddAbsent' onclick='increaseAbs(${callDataFromLocal[myValue].absent},${myValue})' > + </button> <button id='clickToSubAbsent' onclick='decreaseAbs(${callDataFromLocal[myValue].absent},${myValue})' > - </button> </td>`;
        html += `<td id='AddTaskHere'>  ${callDataFromLocal[myValue].addTask} <button id='clickToAddTask' onclick='increaseTask(${callDataFromLocal[myValue].addTask},${myValue})' > + </button> <button id='clickToSubTask' onclick='decreaseTask(${callDataFromLocal[myValue].addTask},${myValue})'> - </button>  </td>`;
        html += `<td id='AddSolvedHere'> ${callDataFromLocal[myValue].solvedTask} <button id='clickToAddSolved' onclick='increaseSolv(${callDataFromLocal[myValue].solvedTask},${myValue})' > + </button> <button id='clickToSubSolved' onclick='decreaseSolv(${callDataFromLocal[myValue].solvedTask},${myValue})'> - </button> </td>`;
        html += `<td id='coach-mona-feedback'> <p id='Mfeedbck'> ${callDataFromLocal[myValue].MFeedback} </p> </td>`;
        html += `<td id='coach-alaa-feedback'> <p id='Afeedbck'> ${callDataFromLocal[myValue].Afeedback} </p> </td>`;
        html += `<td> <button id='delete-student' class='trash' ondblclick='clickToRemoveStudent( ${myValue} )'> Remove <i class="fa-regular fa-trash-can"></i> </td> </button> `
        html += "</tr>";
        html += "</table>";
        document.getElementById("tableContainer").innerHTML = html;
}
function increaseAbs(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].absent = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseAbs(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].absent = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function increaseTask(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].addTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseTask(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].addTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function increaseSolv(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].solvedTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseSolv(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].solvedTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function sendMfeedback () {
    let myValue = document.getElementById("select").value
    let feedback = document.getElementById("M-give-me-feedback").value;
    callDataFromLocal[myValue].MFeedback = feedback;
    localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
    setData()
    document.getElementById("M-give-me-feedback").value = ""
}
function sendAfeedback () {
    let myValue = document.getElementById("select").value
    let feedback = document.getElementById("A-give-me-feedback").value;
    callDataFromLocal[myValue].Afeedback = feedback;
    localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
    setData()
    document.getElementById("A-give-me-feedback").value = ""
}
function addNewStudent() {
    document.getElementById("tableForNew").style.display = 'block'
    document.getElementById("tableContainer").style.display = 'none'
    var addTable = "<table  border='2' style='width:100%'>";  
    addTable += "<tr>";
    addTable += "<td>" + `ID` + "</td>";
    addTable += "<td>" + `Student Name` + "</td>";
    addTable += "<td>" + `Number of abcent` + "</td>";
    addTable += "<td>" + `Number of Total Task` + "</td>";
    addTable += "<td>" + `Number of Task's Solved` + "</td>";
    addTable += "<td>" + `Feedback from Coach Mona` + "</td>";
    addTable += "<td>" + `Feedback from Coach Alaa` + "</td>";
    addTable += "</tr>";
    addTable += "<tr>";
    addTable += `<td> ${callDataFromLocal.length + 1} </td>`;
    addTable += `<td id='newName'>  </td>`;
    addTable += `<td id='numOfAbsent'>  </td>`;
    addTable += `<td id='numOfAbsent'>  </td>`;
    addTable += `<td id='numOfTasks'>  </td>`;
    addTable += `<td id='numOfSolved'>  </td>`;
    addTable += `<td id='FeedBkFromM'>  </td>`;
    addTable += `<td id='FeedBkFromA'>  </td>`;
    addTable += "</tr>";
    addTable += "</table>";

    addTable += `<table>
                    <tr>
                        <td>
                            <label>Add New Name :</label>
                        </td>
                        <td>
                            <input type='text' id='NN' value=''> *
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Add Num Of Absent :</label>
                        </td>
                        <td>
                            <input type='number' id='NA' value=''> *
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Add Add Num Of Tasks :</label>
                        </td>
                        <td>
                            <input type='number' id='NT' value=''> *
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Add Add Num Of Solved :</label>
                        </td>
                        <td>
                            <input type='number' id='NS' value=''> *
                        </td>
                    </tr>
                </table>`
    addTable += `<button id='clickToAdd' onclick='addNewData()'>Add Now</button>`
    addTable += `<p id="fill-txt" style="display:none; color:red; font-size:15px">Please fill all the fields</p>`
    document.getElementById("tableForNew").innerHTML = addTable;  
}
function addNewData(){
    newName = document.getElementById(`NN`).value;
    newAbssent = document.getElementById(`NA`).value;
    newTask = document.getElementById(`NT`).value;
    newSolve = document.getElementById(`NS`).value;

    if (newName != "" && newAbssent != "" && newTask != "" && newSolve != ""){
        document.getElementById("select").innerHTML += `<option id='${callDataFromLocal.length + 1}' value='${callDataFromLocal.length + 1}' class='student'>${newName}</option>`
        let newStu = {
        id : callDataFromLocal.length + 1,
        name : newName,
        absent : newAbssent,
        addTask : newTask,
        solvedTask : newSolve,
        MFeedback : "...",
        Afeedback : "...",
        }
        console.log(document.getElementById("select"));
        callDataFromLocal.push(newStu)
        console.log(callDataFromLocal);
        localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal));
        window.location.reload();
    } else {
        document.getElementById("fill-txt").style.display = 'block'
    } 
}
function clickToRemoveStudent(index){
    let lengthOfSelectOption = document.getElementById("select").length-2
    document.getElementById("tableContainer").style.display = 'none';
    document.getElementById("select").innerHTML = `<option value='first-select'>Select</option>`
    for ( let i=0 ; i<(lengthOfSelectOption) ; i++ ){
        if (i != index){
        document.getElementById("select").innerHTML += `<option id='${i+1}' value='${i}' class='student'>ID ${i+1} : ${callDataFromLocal[i].name}</option>`
    }else {
        continue
    }}
    
    let removeFromSotre = callDataFromLocal.forEach(function(element, indexOfObj){
        if (indexOfObj == index){
            callDataFromLocal.splice(index, 1)
        }
        localStorage.setItem(`student-data` , JSON.stringify(callDataFromLocal))
    });
}
