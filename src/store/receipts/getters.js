let addPrecedingZero = function(value){
     return value < 10 ? `0${value}` : value
}

let getTodayFormatted = function(){
    let today = new Date()
    return `${today.getFullYear()}/${addPrecedingZero(today.getMonth()+1)}/${addPrecedingZero(today.getDate())}`
}

export function getReceipts (state) {
    return state.receipts.filter(receipt => receipt.date >= getFromDate(state) && receipt.date <= getToDate(state) )
}

export function getDateFilterDisplay (state) {
    return `${getFromDate(state)} الى ${getToDate(state)}`
}

export function getFromDate (state) {
    return state.fromDate === '' ? getTodayFormatted() : state.fromDate
}

export function getToDate (state) {
    return state.toDate === '' ? getTodayFormatted() : state.toDate
}

