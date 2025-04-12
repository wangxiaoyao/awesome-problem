//1 variable shadowing: hoisted, TDZ
var shadowing = 'hello'
function shadowingFn() {
    console.log('variable shadowing:',shadowing);
    // let => TDZ
    var shadowing = 'world'
}
shadowingFn();


// 2 const => primitive but reference type can mutate
