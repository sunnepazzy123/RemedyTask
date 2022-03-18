function foo(a, b) {
    let result = false;
    for( let i=0; i<a.length; i++){
            if(b.indexOf(a.charAt(i)) === -1){
                result = false;
                break;
            };
        (b.charAt(b.length - 1) !== a.charAt(i) && a.length === b.length) ? result = false : result = true;
    }
    return result;
}

console.log(foo('abc', 'abcd'))
console.log(foo('abc', 'abde'))
console.log(foo('abca', 'abcd'))
console.log(foo('bca', 'adbc'))

// a     | b     | foo
// ----------------------
// abc   | abcd  | true
// abc   | abde  | false
// abca  | abcd  | false
// bca   | adbc  | true


// skuzmich@remedypointsolutions.com