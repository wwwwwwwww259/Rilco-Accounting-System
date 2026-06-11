import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

if (saveBtn) {

  saveBtn.addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const salary = document.getElementById("salary").value;

    try {

      await addDoc(collection(db, "employees"), {
        name: name,
        position: position,
        salary: Number(salary)
      });

      alert("Employee Saved!");

    } catch (error) {

      alert(error.message);

    }

  });

}
