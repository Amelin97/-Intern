let str = "НННКПРРРРОРППППР";
let ob = str.split('');
//console.log(ob);
let l = ob.length;
let obj ={
}
let sum = 0;
for (i=0 ; i<=l ; i++){
  if (ob[i]=='Н'){
    obj.Н=(1)
    sum+=1
  };
  if(ob[i]=='К'){
  
    obj.K=(5)
    sum+=5
  };
  if(ob[i]=='П'){
    
    obj.П=(2)
    sum+=2
  };
  if(ob[i]=='Р'){
    
    obj.Р=(4)
    sum+=4
  };
  if(ob[i]=='О'){
    
    obj.O=(7)
    sum+=7
  }

}
console.log(obj);
console.log(Object.values(obj))
console.log(sum)

