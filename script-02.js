
let totalDemeritPoints=0 //Variable for storing cummulative demerit points
function checkSpeed(speed){ 
    const speedLimit=70;
    const demeritInterval=5;
    if (speed<70){         //checks if the speed is greater than 70 if false
        console.log("Your speed is okay, Happy driving!") // responds by stating that the speed is okay
    }
    else{           //if speed is greater than 70 by 5km/h it awards a ticket 
        const demeritPoints=Math.floor((speed-speedLimit)/demeritInterval); // calculates demerit points to be deducted when speed is above 70km/h by 5km/h
        totalDemeritPoints+=demeritPoints; //adds the current demerit  points to total  
        console.log(`You have been given ${demeritPoints} demerit points. Warning! Total of 12 demerit points lead to license suspension! Keep it below 70km/h`);// logs messaege on the amount of demerit points awarded 
        console.log(`Your total demirit points is ${totalDemeritPoints}`);

        if (totalDemeritPoints>=12){// checks if the user total demerit point is greater or equal to 12 for it to suspend the license
            console.log("Your License has been suspended!"); //suspends the license if the conditions are met
        }
    }
}


checkSpeed(77); //calling the checkSpeed function to ensure it is operating as required. only 1 point is rewarded for 77km/h due to math.floor
checkSpeed(83); 
checkSpeed(120)









