function gerarTabuada() {
    var pegarNumeroInserido = document.getElementById('numeroInserido')
    var tab = document.getElementById('tabela')
    if (pegarNumeroInserido.value.length == 0) {
        window.alert('ERRO')
    }else{
        var n = Number(pegarNumeroInserido.value)
        tab.innerHTML = ''
        for(var c = 1 ; c <= 10 ; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

    }
}