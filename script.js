//membuat variabel untuk menyimpan angka
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

//membuat function updet screen
const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number) => {
    calculatorScreen.value = number
}
//akhir update

const numbers = document.querySelectorAll(".number")

//function untuk mendapatkan angka sekarang dan menginput lebih dari 1 angka
//dan membuat statement if
const inputNumber = (number) => {
    if (currentNumber === '0') {
        // console.log();
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

//mengambil element button operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//function operator definisi
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = '0'
}

//function equal sign (=)
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
    // console.log("test equal")
})

//function calculate(pengoprasian) 4 pola + - x /
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber) //ganti dengan parseFloat(untuk desimal)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

//mengambil element btn class all-clear
const hapus = document.querySelector(".all-clear")

hapus.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
    // console.log("tombol hapus berfungsi");
})

//definisi tombol hapus
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

//mengambil element btn class decimal
const decimal = document.querySelector(".decimal")

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value); //ganti dengan inputDecimal
    updateScreen(currentNumber)
})

//definisi function decimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}