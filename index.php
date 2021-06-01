<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aluguel de Veiculos | Elias Castro</title>
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css" />
    <link rel="icon" href="../imagens/logohead.png" />
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>

<body>
    <nav>
        <ul class="botoes">
            <li> <a href="#top"> Home </a> </li>
            <li> <a href="#cat"> Catalogo | Simulação</a> </li>
            <li> <a href="#ani"> Seja nosso Parceiro </a> </li>
            <li> <a href="#faleconosco">Fale conosco </a> </li> 
        </ul>
    </nav>

    <div class="fundo1">
        <div class="destaque"> Os Clássicos </div>
    </div>
    <div id="fun" class="conteudo texto">
        <h3>O Aluguel</h3>
        Somos uma startup com o objetivo de deixar você mais perto do seu sonho de pilotar uma maquina! Trabalhamos aproximando você do nosso parceiro colecionador, para experimentar aquela sensação que marcou época!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus nostrum, totam nesciunt libero unde inventore! Inventore animi earum nihil delectus explicabo iusto consequuntur nemo quisquam reprehenderit mollitia, id, accusantium necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ad, sint ipsa beatae eius excepturi nulla dolorum hic laboriosam quae deserunt ab cupiditate quo aliquam, voluptates molestiae optio? In, dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis voluptatem perferendis. Itaque numquam quia reprehenderit molestiae placeat quod, optio obcaecati dolorem dolores libero eius ad dolorum quibusdam quaerat dignissimos?
    </div>
    <div class="fundo2">
        <div class="destaque">#alugueclassicos</div>
    </div>
    
    <div id="cat" class="conteudo">
        <h3>Galeria</h3>
        <main class="fotos">
            <div class="container" >
                <img src="imagens/fotocat01.jpg" alt="Cadillac" title="Cadillac" > 
                <img src="imagens/fotocat02.jpg" alt="Kombi" title="Kombi" > 
                <img src="imagens/fotocat03.jpg" alt="Mustang" title="Mustang" > 
                <img src="imagens/fotocat04.jpg" alt="Fusca" title="Fusca" >     
            </div>
        </main>
        <h3>Simulação</h3>
        
        Selecione o Carro: 
        <select class="form-select" aria-label="Default select example">
            <option selected id="opcoes">Open this select menu</option>
            <option value="1" id="opcoes">Cadillac</option>
            <option value="2" id="opcoes">Kombi</option>
            <option value="3" id="opcoes">Mustang</option>
            <option value="4" id="opcoes">Fusca</option>
        </select>
        <br>
        Quantas Horas: <input type="number" name="qtd" id="qtd">
        <input type="button" value="Confirmar" onclick="confirmar()">
        <div id="msg"></div>
    </div>

    <div class="fundo3" id="quadro_animado">
        <div class="destaque">Nossos Parceiros</div>
    </div>
    
    <div id="ani" class="conteudo" >
        <main class="fotos">
            <div class="container" >
                <img src="imagens/marca01.png" alt="Ford">
                <img src="imagens/marca02.png" alt="Ford">
                <img src="imagens/marca03.png" alt="Ford">
                <img src="imagens/marca04.png" alt="Ford">
            </div>
        </main>
        <h2>Seja Nosso parceiro</h2>
        <h3>Você tem um carro e deseja disponibiliza-lo? Cadastre-se e entraremos em contato com você!</h3>
    </div>

    <div class="fundo4">
        <div class="destaque" id="faleconosco">Fale conosco</div>
    </div>

    <div id="fun" class="conteudo">
        <h3>Formulario de parceria - Tire suas Duvidas</h3>
        <div class="quadro_animado"> </div>
    </div>
    
    <footer>Desenvolvido por Elias Castro | <?= date('Y'); ?>  </footer>

    <script src="javascript/script.js">    </script>
</body>

</html>

