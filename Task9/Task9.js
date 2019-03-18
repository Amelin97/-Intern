function clc() {

 document.body.form.textview.value=""

}
function insert (num){
    document.form.textview.value=document.form.textview.value+num
}  
function equal () {
    let exp =   document.form.textview.value ;
    if(exp){

    document.form.textview.value = eval(exp)
    }
}

/*Наполнять одну переменную которую ппреобразовывать в строку 
и затем производить с ней вычисления
*/ 