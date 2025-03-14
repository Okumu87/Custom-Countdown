"use strict";

const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

// Set date input Min with Today is Date

const today = new Date().toISOString().split("T")[0];

console.log(today);

dateEl.setAttribute("min", today);
