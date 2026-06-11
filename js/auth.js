import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

async function loadEmployees(){

  const employeeList =
  document.getElementById("employeeList");

  employeeList.innerHTML = "";

  const querySnapshot =
  await getDocs(collection(db,"employees"));

  querySnapshot.forEach((doc)=>{

    const employee = doc.data();

    employeeList.innerHTML += `
      <tr>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>₱${employee.salary}</td>
      </tr>
    `;

  });

}

if(saveBtn){

  saveBtn.addEventListener("click", async ()=>{

    const name =
    document.getElementById("name").value;

    const position =
    document.getElementById("position").value;

    const salary =
    document.getElementById("salary").value;

    await addDoc(
      collection(db,"employees"),
      {
        name:name,
        position:position,
        salary:Number(salary)
      }
    );

    alert("Employee Saved!");

    loadEmployees();

  });

}

loadEmployees();
