window.onload = function() {
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')

    document.getElementById('somar').onclick = function() {
        var resultado = num1.value + num2.value
        document.getElementById('resultado').innerHTML = resultado
    }
}

function calculo() {
    var resultado = parseInt(num1.value) + parseInt(num2.value)
}

