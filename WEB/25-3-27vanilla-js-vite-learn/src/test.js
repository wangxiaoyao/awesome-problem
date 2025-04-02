function outer() {
    
    function inner() {
        console.log(x); // has access to x from outer
    }
    const x = 10;
    inner();
    
}
outer()