
let ary = []
min = prompt("Введите мин");
max = prompt("Введите макс");
min = 7;
max = 10;
function write (min,max) {

    for (i=min; i<=max; i++){
        ary.push(i)
    }

}

write(min,max);
console.log(ary);
console.log(ary.length);
aryclone=JSON.stringify(ary);
aryclone=JSON.parse(aryclone);
console.log(aryclone)

let  aryfilter = []
function filter (aryclone)
{
    let l = aryclone.length 
for (i=0 ; i<= l; i++)
    {
    b=aryclone[i]%3
    if (b==1){
        aryfilter.push(aryclone[i])
        }
    }

}
filter(aryclone)
console.log(aryfilter)
