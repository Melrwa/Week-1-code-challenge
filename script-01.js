let grade = parseInt(prompt("Enter student marks (0 - 100):"));// prompts user to enter student marks in number form
const marks = (grade >= 0 && grade <= 100) //maintains the marks entered to be between 0 and 100
if (marks) {
    if (grade > 79) {               //checks if the grade entered is greater than 79 if true 
        alert("Your grade is A"); // returns your grade is A
    } else if (grade >= 60) {     //checks if the grade entered is greater than 60 if true 
        alert("Your grade is B");// returns your grade is B
    } else if (grade >= 49) {     //checks if the grade entered is greater than 49 if true 
        alert("Your grade is C"); //returns your grade is C
    } else if (grade >= 40) { //checks if the grade entered is greater than 40 if true 
        alert("Your grade is D");//returns your grade is D
    } else {
        alert("Your grade is E");// return E if grade is less than 40
    
    }   
    }
    


