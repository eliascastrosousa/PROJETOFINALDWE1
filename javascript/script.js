var nome = document.getElementsByClassName('nome'.toUpperCase)
var qtd = document.getElementsByClassName('qtd')
var quantidade = Number(qtd.value)
var msg = document.getElementById('msg')

function calcular() {

    if (nome = 'BMW') {
        var taxa = 200
        msg.innerHTML = `O valor para o aluguel da BMW durante ${quantidade} Horas será de  R$${taxa * quantidade},00.`
    }
    else if (nome = 'AUDI') {
        var taxa = 250
        msg.innerHTML = `O valor para o aluguel do Audi G3 durante ${quantidade} Horas será de  R$${taxa * quantidade},00.`
    }
    else if (nome = 'MERCEDES') {
        var taxa = 280
        msg.innerHTML = `O valor para o aluguel da Mercedes durante ${quantidade} Horas será de  R$${taxa * quantidade},00.`
    }
    else if (nome = 'HYUNDAI') {
        var taxa = 170
        msg.innerHTML = `O valor para o aluguel da Hyundai durante ${quantidade} Horas será de  R$${taxa * quantidade},00.`
    }
    else {
        alert('Valores inconcistentes')
    }
}