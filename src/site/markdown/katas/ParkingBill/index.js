function ParkingBill(string) {

    if(string === ""){

        throw new TypeError("please enter correct start and end time");

    }

    let splitString = string.split(",");

    if(splitString.length === 1){

        return 100;

    }else{

        const entryTimeHour = splitString[0].split(":")[0];
        const entryTimeMin = splitString[0].split(":")[1];
        const exitTimeHour = splitString[1].split(":")[0];
        const exitTimeMin = splitString[1].split(":")[1];
        
        let totalCharge = 0;

        let hourDiff = parseInt(exitTimeHour) - parseInt(entryTimeHour);
        let minDiff = parseInt(exitTimeMin) - parseInt(entryTimeMin);

        if(hourDiff === 0 && minDiff <= 5){

            totalCharge = 0;

        }else{

            if (minDiff > 0){

                hourDiff += 1;

            }

            if (hourDiff === 1) {

                totalCharge = 2;

            } else if (hourDiff > 1 && hourDiff <= 4) {

                hourDiff = hourDiff - 1;
                let hour1 = 2;

                totalCharge = hour1 + (hourDiff * 3);

            } else if (hourDiff > 4) {

                hourDiff = hourDiff - 4;
                let hour1 = 2;
                let hour2 = 3 * 3;

                totalCharge = hour1 + hour2 + (hourDiff * 5);

            }

        }

        return totalCharge;

    }

}

module.exports = { ParkingBill };