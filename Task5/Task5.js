
//let number = "";


function Valid(number) {  
    let l = number.length;
    //console.log(l);
    let s=number[0].match(/[ABEKMHOPCTYX]{1}/);//ищем первую букву
    number1=number[1]+number[2]+number[3]; 
    let d = number1.match(/\d{3}/);//ПОТОМ 3 цифры
    number2 = number[4]+number[5];
    
    let f = number2.match(/[ABEKMHOPCTYX]{2}/);//потом еще две буквы
    number3=number[6]+number[7]+number[8];
    //console.log(number3)
    let g = number3.match(/\d{2,3}/);//и еще 3 цифры
    
    if (l == 9 ||l==8){    
        if ((s) && (d) &&(f)&&(g) ){
            console.log("Номер правильный")}else{console.log("Not")}
    }
    else{console.log("Not")}
      }
    console.log(Valid("A123ACB12"))