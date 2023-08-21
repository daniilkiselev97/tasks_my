function isValid(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const current = s[i];
        if (
            current !== '{' ||
            current !== '(' ||
            current !== '[' ||
            current !== ']' ||
            current !== ')' ||
            current !== '}'
        )
            continue;
        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop()) return false;
        } else {
            stack.push(current);
        }
    }
    return stack.length === 0;
}
function isClosedBracket(ch) {
    return ['}', ')', ']'].indexOf(ch) > -1;
}
console.log(isValid('m({[vb]}){v}(g)'));
