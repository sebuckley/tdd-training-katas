import { ParkingBill } from "./";

describe("Parking bill", () => {


    it("a string is input and it returns a number", () => {

        let input = ParkingBill("09:00,10:00");
        expect(typeof input).toEqual('number');

    });

    it("it accepts a string with comma seperated values HH:MM throws an error is not", () => {

        expect(() => { ParkingBill("") }).toThrow('please enter correct start and end time');

    });

    it("if only an exit time is presented a fee of 100 is charged", () => {

        let input = ParkingBill("10:00");
        expect(input).toEqual(100);

    });

    it("if entry time and exit time is 09:00,09:05, 5 minutes or less, a fee of 0 returned", () => {

        let input = ParkingBill("09:00,09:05");
        expect(input).toEqual(0);

    });

    it.each([["09:00,09:10", 2],["09:00,10:00", 2]])("if entry time,exit time %s a fee of %i is returned", (input, expected) => {

        expect(ParkingBill(input)).toEqual(expected);

    });

    it.each([["09:00,10:10", 5],["09:00,13:00", 11]])("if entry time,exit time %s a fee of %i is returned", (input, expected) => {

        expect(ParkingBill(input)).toEqual(expected);

    });

    it.each([["09:00,14:10", 21],["09:00,18:00", 36]])("if entry time,exit time %s a fee of %i is returned", (input, expected) => {

        expect(ParkingBill(input)).toEqual(expected);

    });



    

})