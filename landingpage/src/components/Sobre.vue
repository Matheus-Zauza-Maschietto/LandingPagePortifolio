<template>
  <div id="sobre">
        <div class="col-md-10 text-center m-2 p-3 brightness rounded-2 mx-auto" id="meu-resumo">
            <h2>Sobre</h2>
            <p class="p-4">Natural de Loanda, Pr sempre tive muita afinidade com a matemática, lógica e criatividade. Comecei meus estudos em programação como hobby, porem com o passar do tempo entendi que gostaria de ter isso como algo além de um hobby, percebi que gostaria de fazer isso como minha profissão. Gosto de xadrez, leitura e sou um amante de ciência/astronomia</p>
        </div>
        <div class="row justify-content-around m-2 info-cards">
            <div class="col-lg-5 text-center m-5 p-4 rounded-3">
                <h3>Detalhes Pessoais</h3>
                <div class="col-9 m-auto">
                    <div class="d-flex justify-content-between ">
                        <h3>Nome</h3>
                        <span>Matheus Zauza Maschietto</span>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <h3>E-mail</h3>
                        <span>matheus_maschietto@yahoo.com.br</span>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <h3>Experiência</h3>
                        <span>3 Anos</span>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <h3>Endereço</h3>
                        <span>Maringá, PR</span>
                    </div>
                    <div class="d-flex justify-content-between ">
                        <h3>Idade</h3>
                        <span>19 Anos</span>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 d-flex flex-column text-center m-5 p-4 rounded-3">
                <h3>Trilha Percorrida</h3>
                <span>Inicio dos estudos em Programação: 2020</span>
                <span>Ensino Médio (Concluido): 2021</span>
                <span>Ensino Superior (Inicio): 2022</span>
                <span>HackaTruck: 2022</span>
                <span>Trainee: Setembro, 2022</span>
                <span>Programador Junior: Março, 2023</span>
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
    font-size: 18px;
}
.info-cards>div h3{
    font-size: 20px;
}
</style>