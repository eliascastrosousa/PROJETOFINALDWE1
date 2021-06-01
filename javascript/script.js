function confirmar() {
    
    var qtd = document.getElementById('qtd')
    var quant = Number(qtd.value)
    var msg = document.getElementById('msg')
    //var opts = document.querySelectorAll("select option");
    msg.innerHTML = `<p> O valor do aluguel será de R$${quant*80},00. Valido por ${quant} Horas. </p> `
    

}
