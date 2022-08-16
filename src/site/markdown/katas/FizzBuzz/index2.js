class fizzbuzz {

    transform(number){  

        if (typeof number !== 'number'){

            throw new TypeError("This is not a number");
            
        }

        let multiple15 = number % 15;
        let multiple5 = number % 5;
        let multiple3 = number % 3;

        if (multiple15 === 0) {

            return "Fizzbuzz";

        } else if (multiple5 === 0){
            
            return "Buzz";  

        } else if (multiple3 === 0){
            
            return "Fizz";  

        }

        return number;

    }

    returnsString(){

        let string = "";
    
        for (let i = 1; i <= 100; i++) {

            let transformNum = this.transform(i);
    
            if(string == ""){
    
                string = transformNum;
    
            }else{
    
                string = string + "," + transformNum;
            }
    
        }
    
        return string;
    
    }

}

let string = new fizzbuzz();

console.log(string.returnsString());

module.exports = { fizzbuzz };
