<template>
  <div id="sobre">
        <div class="col-md-11 p-3 rounded-2 m-md-auto m-2" id="meu-resumo">
            <h2 class="text-center">Sobre</h2>
            <p class="p-4 text-justify">Natural de Loanda (PR), sempre tive muita afinidade com a matemática, lógica e criatividade. Comecei meus estudos em programação como hobby, porem com o passar do tempo entendi que gostaria de ter isso como minha profissão. Atualmente trabalho desenvolvendo integrações em APIs, e banco dados, utilizando Dotnet. Gosto de xadrez, leitura e sou um estusiasta de ciência/astronomia</p>
        </div>
        <div class="row justify-content-around m-2 info-cards">
            <div class="col-lg-5 col-11 text-center m-lg-5 m-md-4 p-md-4 p-2 mx-auto my-3 py-4 rounded-3 brightness">
                <h3>Detalhes Pessoais</h3>
                <div class="col-lg-9 col-12 m-auto d-flex flex-column justify-content-evenly h-100">
                    <div class="d-flex justify-content-between information">
                        <h3>Nome</h3>
                        <span class="w-auto text-end">Matheus Zauza Maschietto</span>
                    </div>
                    <div class="d-flex justify-content-between information">
                        <h3>E-mail</h3>
                        <span class="w-auto text-end">matheus_maschietto@yahoo.com.br</span>
                    </div>
                    <div class="d-flex justify-content-between information">
                        <h3>Experiência</h3>
                        <span class="w-auto text-end">3 Anos</span>
                    </div>
                    <div class="d-flex justify-content-between information">
                        <h3>Endereço</h3>
                        <span class="w-auto text-end">Maringá, PR</span>
                    </div>
                    <div class="d-flex justify-content-between information">
                        <h3>Idade</h3>
                        <span class="w-auto text-end">19 Anos</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-11 d-flex flex-column text-center m-lg-5 m-md-4 p-md-4 p-2 mx-auto my-3 rounded-3 brightness">
                <h3>Trilha Percorrida</h3>
                <span class="init-jorney-ball"></span>
                <span class="init-jorney-stick"></span>
                <p>Inicio dos estudos em Programação: 2020</p>
                <span class="init-jorney-stick"></span>
                <p>Ensino Médio (Concluido): 2021</p>
                <span class="init-jorney-stick"></span>
                <p>Ensino Superior (Inicio): 2022</p>
                <span class="init-jorney-stick"></span>
                <p>HackaTruck: maio, 2022</p>
                <span class="init-jorney-stick"></span>
                <p>Trainee: Setembro, 2022</p>
                <span class="init-jorney-stick"></span>
                <p>Programador Junior: Março, 2023</p>
                <span class="init-jorney-stick"></span>
                <p>Hackathon InovaAgro 3° lugar: maio, 2023</p>
                <span class="init-jorney-stick"></span>
                <p>Desafio Inovação Ploomes 1° Lugar: março, 2024</p>
                <span class="init-jorney-stick"></span>
                <p>Programador Pleno: Agosto, 2024</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "SobreC"
}
</script>

<style scoped>
.brightness{
    box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.1);
}

#sobre{
    color: white;
    font-size: 20px;
}

#meu-resumo{
    background: #3A3A3A;
}

h2{
    font-size: 28px;
}

h3{
    font-size: 24px;
}

.info-cards>div{
    border: 3px solid #3A3A3A;
    background: #1E1E1E;
    font-size: 18px;
}
.info-cards>div h3{
    font-size: 20px;
}

p{
    margin: 0;
}

#init-jorney{
    margin: auto;
}

.init-jorney-ball{
    background: white;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: auto;
}

.init-jorney-stick{
    background: white;
    width: 2px;
    height: 20px;
    margin: auto;
}

.information{
    flex-wrap: wrap;
}

.brightness>p, .information{
    transition: 0.3s;
    padding: 5px;
}

.brightness>p:hover, .information:hover{
    transform: scale(1.05);
}

.text-justify{
    text-align: justify;
}
</style>