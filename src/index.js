module.exports = function reverse (n) {
    let nToS =  String(n).replace(/[^0-9]/g, '')
    return  Number(nToS.split('').reverse().join(''))
}

