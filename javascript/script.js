function confirmar() {
    
    var qtd = document.getElementById('qtd')
    var horas = Number(qtd.value)
    var msg = document.getElementById('msg')
    //var opts = document.querySelectorAll("select option");
    var opts = document.getElementById('opcoes') 
    var opcoes = Number(opts.value)
    
    //if (opcoes == 1) //cadillac 
    //{
        var taxa = 120
        if (horas == 0){
            alert('Digite um valor Valido!!')
        }
        else {
            msg.innerHTML = `<p> O valor do aluguel será de R$${horas*taxa},00. Valido por ${horas} Horas. </p> `
        }
   // }

}
