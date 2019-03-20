let a;
let b;
let operator;
let result;
 

function clc() {
    a = 0;
    b = 0;
    operator = null;
    result = null;
    updateScreen () ;
}





function insert (num){
    if (!operator && !a) {
        a = num;
    } else if (!operator && a) {
        a += num;
    } else if (operator && !b) {
        b = num;
    } else if (operator && b) {
        b += num;
    }

    updateScreen();
}

function insertOperator(op){
    if(result) {}
    operator = op;
    updateScreen();

}

function updateScreen() {
    console.log('a', a);
    console.log('operator', operator);
    console.log('b', b);
    if(!operator) {
        document.querySelector('#textview').value = a || 0;
    } else {
        document.querySelector('#textview').value = b || 0;
    }
    

    // document.querySelector('#textview').value = !operator ? a : b;
}

function equal () {
   const numA = Number(a);
   const numB= Number(b);
   if (operator == '/' && b == 0){
       return  ;
   }
    switch(operator)
    {
          case '-' :
            a = numA-numB;
            b = null ;
            operator = null ;
            break;
          case '+' :
          
            a = numA + numB ;
            b = null ;
            operator = null ;
            break;
          case '/' :
            a = numA/numB;
            b = null ;
            operator = null ;
            break;
          case '*' :
            a = numA * numB ;
            b = null ;
            operator = null ;
            break 
    }
        a = a.toString() ;
  
    updateScreen()
    
}

/*Наполнять одну переменную которую преобразовывать в строку 
и затем производить с ней вычисления
*/ 