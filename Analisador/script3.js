var num = document.getElementById('num')
var sel = document.getElementById('sel')
var res = document.getElementById('res')
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
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
        res.innerHTML = ''
       if (valores.length === 1) {
            sel.options[0].remove()
        }
    } else {
        window.alert('Valor Inválido ou já foi adicionado.')
    }
    num.value = ''
    num.focus()
}

function analisar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de continuar.')
    } else {
        var total = valores.length
        var maior = valores[0]
        let menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>A soma de todos os valores foi de ${soma}.`
        res.innerHTML += `<p>A média dos valores é de ${media}</p>`
    }
}
