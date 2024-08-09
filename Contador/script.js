function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert ('[Erro] Faltam dados!')
        res.innerHTML = 'Impossível contar :( verifique os dados!'
    } else {
        res.innerHTML = 'Contando...'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if(p <= 0){
            window.alert('Passo invalido. Considerando então, passo 1 :)')
            p = 1
        }
        if ( i < f) {
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `\u{1F4AD} ${c}  `
        }
    } else {
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `\u{1F4AD} ${c}  `
        }
    }
        res.innerHTML += `\u{2714}`
    }
}