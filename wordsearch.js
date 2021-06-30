const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let emptyStr = ""
    for (let x = 0; x < letters[0].length; x++) {
        for (let y = 0; y < letters.length; y++) {
            emptyStr += letters[x][y];
        }
    }
    if (emptyStr === word) {
        return true;
    }
    return false;
}




module.exports = wordSearch