function foo(a, b) {
    
    const [_aDictionary, _bDictionary] = [{}, {}];

    if (a.length === 0) return false;

    for (let i = 0; i < a.length; i++) {
        const key = a[i];
        if (_aDictionary[key])
            _aDictionary[key] += 1;
        else
            _aDictionary[key] = 1;
    }

    for (let i = 0; i < b.length; i++) {
        const key = b[i];
        if (_bDictionary[key])
            _bDictionary[key] += 1;
        else
            _bDictionary[key] = 1;
    }

    for (let key in _aDictionary) {
        if (!_bDictionary[key] || _bDictionary[key] != _aDictionary[key])
            return false;
    }

    return true;
}

console.log(foo('abc', 'abcd'));
console.log(foo('abc', 'abde'));
console.log(foo('abca', 'abcd'));
console.log(foo('bca', 'adbc'));


// a     | b     | foo
// ----------------------
// abc   | abcd  | true
// abc   | abde  | false
// abca  | abcd  | false
// bca   | adbc  | true


