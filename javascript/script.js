const sel_carro = document.querySelector('#sel_carro') // resgatando o elemento pelo id
const obj_img_carros = document.querySelector('#img_carros')
const obj_h2texto = document.querySelector('#h2texto')
const obj_h3texto = document.querySelector('#h3texto')
const obj_p_detalhes = document.querySelector('#p_detalhes')

sel_carro.addEventListener('change', FunMudaFigura) // adcionando o evento escolha e dando o nome de FunMudaFigura

function FunMudaFigura() { // criando a função a partir da change 
    obj_img_carros.setAttribute('src', 'imagens/' + sel_carro.value + '.jpg') // adcionando a linha src="" ao objeto 
    obj_img_carros.setAttribute('alt', 'Logo ' + sel_carro.value) 
    obj_img_carros.setAttribute('title', 'Logo ' + sel_carro.value)
    if (sel_carro.value == 'Hyundai Hb20'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2015` 
        obj_h3texto.innerText = 'Aluguel: R$120,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo com travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`

    }else if (sel_carro.value == 'Ford Fiesta'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2019` 
        obj_h3texto.innerText = 'Aluguel: R$140,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo completo com Ar condicionado, travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`

    }else if (sel_carro.value == 'VolksWagen Gol'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2020` 
        obj_h3texto.innerText = 'Aluguel: R$130,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo completo com Ar condicionado, travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`

    }else if (sel_carro.value == 'Fiat Novo Uno'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2018 <br>` 
        obj_h3texto.innerText = 'Aluguel: R$100,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo completo travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`

    }else if (sel_carro.value == 'Chevrolet Onix'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2020` 
        obj_h3texto.innerText = 'Aluguel: R$130,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo completo com Ar condicionado, travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`

    }else if (sel_carro.value == 'Renaul Kwid'){
        obj_h2texto.innerHTML = `${sel_carro.value} Ano 2021` 
        obj_h3texto.innerText = 'Aluguel: R$120,00 Diaria' 
        obj_p_detalhes.innerText = 'Modelo completo com Ar condicionado, travas e vidros eletricos. '
        obj_p_detalhes.innerHTML += `Deseja Alugar? <a href="#alugueaqui"> Clique aqui!</a>`
    }
}

const obj_enviar_form = document.querySelector('#enviar_form')
const obj_resposta = document.querySelector('#resposta')

obj_enviar_form.addEventListener('click', FunEnviarDados)

function FunEnviarDados(){
    obj_resposta.innerHTML = 'Dados Enviados com Sucesso! Aguarde que Entraremos em contato com você.'

}