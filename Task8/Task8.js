var p = 20;

function test (){
    P = 30;
    p = 25;
    console.log('result 0', p);
}
function test1 (){
    console.log('result 1', p)
    test2();
}
function test2 (p){
    console.log('result 2', p);
    test3(p);
    function test3 (k){
        var k=30 ;
        console.log('result 3', k)
    }
}
function test4 (M){
    test4();
    console.log('result 4',M)
}
test();
// test4(p)
test1();
//test3(p)
console.log('result 5', p)
console.log('result 5', P)