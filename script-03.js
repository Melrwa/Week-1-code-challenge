


let monthlyBasicSalary = parseInt(prompt("Enter your basic salary:")); //prompts user to enter their Basic salary
let benefits = parseInt(prompt("Enter your benefits:"));// propmt user to enter their benefits


function calculatePaye(monthlyBasicSalary) {
    let tax = 0;
    if (monthlyBasicSalary <= 24000) {
        tax = monthlyBasicSalary * 0.10; // 10% on income up to 24,000 Ksh
    } else if (monthlyBasicSalary <= 32333) {
        tax = (24000 * 0.10) + ((monthlyBasicSalary - 24000) * 0.25); // 25% on income above 24,000 Ksh
    } else if (monthlyBasicSalary <= 500000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + ((monthlyBasicSalary - 32333) * 0.30); // 30% on income above 32,333 Ksh
    } else if (monthlyBasicSalary <= 800000) {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((monthlyBasicSalary - 500000) * 0.325); // 32.5% for high income
    } else {
        tax = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((monthlyBasicSalary - 800000) * 0.35); // 35% for income above 800k
    }
    return tax;
}

function calculateNHIF(monthlyBasicSalary) { // find the amount of nhif to be deducted per amount of salary
    let nhifDeduction = 0;

    if (monthlyBasicSalary <= 5999) {
        nhifDeduction = 150;
    } else if (monthlyBasicSalary <= 7999) {
        nhifDeduction = 300;
    } else if (monthlyBasicSalary <= 11999) {
        nhifDeduction = 400;
    } else if (monthlyBasicSalary <= 14999) {
        nhifDeduction = 500;
    } else if (monthlyBasicSalary <= 19999) {
        nhifDeduction = 600;
    } else if (monthlyBasicSalary <= 24999) {
        nhifDeduction = 750;
    } else if (monthlyBasicSalary <= 29999) {
        nhifDeduction = 850;
    } else if (monthlyBasicSalary <= 34999) {
        nhifDeduction = 900;
    } else if (monthlyBasicSalary <= 39999) {
        nhifDeduction = 950;
    } else if (monthlyBasicSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (monthlyBasicSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (monthlyBasicSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (monthlyBasicSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (monthlyBasicSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (monthlyBasicSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (monthlyBasicSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    return nhifDeduction;
}
let housingLevy = 0;

function calculateNetSalary(monthlyBasicSalary, benefits) {//initiates calculation of net salary 
    const grossSalary = monthlyBasicSalary + benefits;
    
    const paye = calculatePaye(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    housingLevy = (monthlyBasicSalary * 0.015); // Housing levy is 1.5%

    
    const netSalary = grossSalary - (paye + nssf + nhif + housingLevy);//finds basic salary by subtracting deduction from the gross salary.

    return { //object containing return values of of the netSalary calculation
        grossSalary: grossSalary,  // The total salary before any deductions
        paye: paye, // Pay As You Earn tax deduction
        nssf: nssf,// National Social Security Fund deduction
        nhif: nhif,// National Hospital Insurance Fund deduction
        housingLevy: housingLevy, // Housing levy deduction
        netSalary: netSalary, // The final salary after all deductions
    };
}

function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 1080); // 6% of gross or a cap of 1080
}
const salaryDetails = calculateNetSalary(monthlyBasicSalary, benefits);

alert(`Gross Salary: ${salaryDetails.grossSalary.toFixed(2)}\n` + //alert, returns users Gross salary, PAYE, NSSF, NHIF, Hoousing Levy, and Net Salary.
      `PAYE: ${salaryDetails.paye.toFixed(2)}\n` + //toFixed(2)returns the every number result it is called on to 2 decimal places
      `NSSF: ${salaryDetails.nssf.toFixed(2)}\n` +
      `NHIF: ${salaryDetails.nhif.toFixed(2)}\n` +
      `Housing Levy: ${salaryDetails.housingLevy.toFixed(2)}\n` +
      `Net Salary: ${salaryDetails.netSalary.toFixed(2)}`);



    





