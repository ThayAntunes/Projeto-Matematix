var num = document.getElementById('num')
var sel = document.getElementById('sel')
var res = document.getElementById('contar')
var valores = []

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inSel(n, l) { 
    if (l.indexOf(Number(n)) != -1) {
        return true 
    } else {
        return false
    }

}

function contar() {
    if(isNum(num.value) && !inSel(num.value, valores)) {
        window.alert('tudo ok')
    } else {
        window.alert('Valor Inválido ou já foi adicionado.')
    }
}