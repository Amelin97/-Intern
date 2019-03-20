
//let number = "";


function Valid(str) {  
   
  let l = str.match(/[ABEKMHOPCTYX]{1}\d{3}[ABEKMHOPCTYX]{2}\d{2,3}/)
  console.log(l)
  if (str.length <= 9) {
  if ( l === str){
  console.log("Номер правильный")}
  else{console.log("Not")}
  }else{console.log("Not")}}

  Valid('A123AC112')