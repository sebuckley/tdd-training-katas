

function fizzbuzz(){

    let string = "";

    for(let i=0; i <= 100; i++){

        if(string == ""){

            string = i;

        }else{

            string = string + "," + i;
        }

    }

    return string;

}


// let string = fizzbuzz();

// console.log(string);

module.exports = { fizzbuzz };
