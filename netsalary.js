const prompt = require("prompt-sync")({ sigint: true });
const name = prompt("Please enter your name: ");
const basicSalary = prompt ("Please enter your basic salary: ")


function calculateNetSalary(basicSalary, benefits) {
    // Calculate the gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate the KRA tax
    let kraTax = 0;
    if (grossSalary <= 24000) {
      kraTax = 0;
    } else if (grossSalary > 24000 && grossSalary <= 32330) {
      kraTax = 2400 * 0.1;
      kraTax += (grossSalary - 24000) * 0.25;
    } else if (grossSalary > 32330) {
      kraTax = 2400 * 0.1;
      kraTax += (32330 - 24000) * 0.25;
      kraTax += (grossSalary - 32330) * 0.3;
    }
  
    // Calculate the NHIF deductions
    let nhifDeduction = 0;
    if (basicSalary <= 5999) {
      nhifDeduction = 150;
    } else if (basicSalary > 5999 && basicSalary <= 7999) {
      nhifDeduction = 300;
    } else if (basicSalary > 7999 && basicSalary <= 11999) {
      nhifDeduction = 400;
    } else if (basicSalary > 11999 && basicSalary <= 15999) {
      nhifDeduction = 500;
    } else if (basicSalary > 15999 && basicSalary <= 19999) {
      nhifDeduction = 600;
    } else if (basicSalary > 19999 && basicSalary <= 25999) {
      nhifDeduction = 750;
    } else if (basicSalary > 25999 && basicSalary <= 31999) {
      nhifDeduction = 850;
    } else if (basicSalary > 31999 && basicSalary <= 39999) {
      nhifDeduction = 950;
    } else if (basicSalary > 39999 && basicSalary <= 47999) {
      nhifDeduction = 1050;
    } else if (basicSalary > 47999 && basicSalary <= 55999) {
      nhifDeduction = 1150;
    } else if (basicSalary > 55999 && basicSalary <= 62999) {
      nhifDeduction = 1250;
    } else if (basicSalary > 62999) {
      nhifDeduction = 1350;
    } else {
      nhifDeduction = 0;
    }
    // Calculate the NSSF deductions
  const nssfDeduction = grossSalary * 0.06;

  // Calculate the net salary
  const netSalary = grossSalary - kraTax - nhifDeduction - nssfDeduction;

  // Return the result
  return netSalary;
  }console.log(`Hello ${name} , your netsalary is ${calculateNetSalary(basicSalary)}`);