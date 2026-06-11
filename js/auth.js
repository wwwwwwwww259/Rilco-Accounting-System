import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

console.log("AUTH LOADED");

async function loadEmployees() {

    const employeeList =
    document.getElementById("employeeList");

    employeeList.innerHTML = "";

    const querySnapshot =
    await getDocs(collection(db,"employees"));

    console.log("TOTAL:", querySnapshot.size);

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

loadEmployees();
