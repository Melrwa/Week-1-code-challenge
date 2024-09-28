
let totalDemeritPoints=0 //Variable for storing cummulative demerit points
function checkSpeed(speed){
    const speedLimit=70;
    const demeritInterval=5;
    if (speed<70){
        console.log("Your speed is okay, Happy driving!")
    }
    else{
        const demeritPoints=Math.floor((speed-speedLimit)/demeritInterval); // calculates demerit points to be deducted when speed is above 70km/h by 5km/h
        totalDemeritPoints+=demeritPoints; //adds the current demerit  points to total  
        console.log(`You have been given ${demeritPoints} demerit points. Warning! Total of 12 demerit points lead to license suspension! Keep it below 70km/h`);
        console.log(`Your total demirit points is ${totalDemeritPoints}`);

        if (totalDemeritPoints>=12){
            console.log("Your License has been suspended!");
        }
    }
}


checkSpeed(100);








