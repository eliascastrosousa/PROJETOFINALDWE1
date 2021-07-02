const obj_sel_rede_social = document.querySelector('#sel_rede_social') // resgatando o elemento pelo id
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener('change', FunMudaFigura) // adcionando o evento escolha e dando o nome de FunMudaFigura

function FunMudaFigura() { // criando a função a partir da change 
    obj_img_rede_social.setAttribute('src', 'imagens/' + obj_sel_rede_social.value + '.jpg') // adcionando a linha src="" ao objeto 
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value) 
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value // adcionando o texto ao paragrafo vazio
}