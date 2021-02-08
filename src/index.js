let arrOne = ['zero','one','two','three','four','five','six','seven','eight','nine',
            'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
let arrTwenty = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

function gNum(num){
    let strNumb = String(num)
    if(num < 20) {return arrOne[num]}
    else {return arrTwenty[strNumb.charAt(0)] + (strNumb.charAt(1) == 0 ? '' : ' ' + arrOne[strNumb.charAt(1)])  }
}

module.exports = function toReadable (number) {
    let strNumb = String(number)
    let twoLustNum
    if(strNumb.length >= 3){
        twoLustNum = strNumb.charAt(1) == 0 ? '' + strNumb.charAt(2): strNumb.charAt(1) + strNumb.charAt(2)
        return gNum(strNumb.charAt(0)) + ' hundred' + (twoLustNum == 00 ? '': ' ' + gNum(twoLustNum))
    }
    else{ return gNum(number)}
}
