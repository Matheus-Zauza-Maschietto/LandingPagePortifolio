<template>
        <div class="text-center" id="projetos">
            <h2>Meus Projetos</h2>
            <div class="row row-cols-md-2 m-auto justify-content-around">
                <cardProjeto v-for="(card, index) in projetos" :key="index" :titulo="card.titulo" :capaImgPath="card.capaImgPath" :tecImgPath="card.tecImgPath" class="col-xxl-3 m-xxl-5 col-md-5 m-md-4 col-11 m-4"/>
            </div>
        </div>
</template>

<script>
import cardProjeto from './cardProjeto.vue'

export default {
    name: "ProjetosC",
    components: {
        cardProjeto
    },
    data(){
        return{
            projetos: [
                {
                    titulo: "Food Place",
                    capaImgPath: "FoodPlace.png",
                    imgAlt: "Sistema de gerenciamento de pedidos para restaurantes desenvolvido em C# com banco de dados SQL Server, OAuth 2 e API RESTful",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png"
                    ]
                },
                {
                    titulo: "Auto Mapeamento (Ganhador do desafio de inovação Ploomes 2024)",
                    capaImgPath: "AutoMapeamento.png",
                    imgAlt: "Sistema para mapeamento de rotas de Web APIs para pattern de excel. Desenvolvido com C# e Vue.js",
                    tecImgPath: [
                        "cSharpC.png",
                        "vueC.png"
                    ]
                },
                {
                    titulo: "I Want",
                    capaImgPath: "IWant.png",
                    imgAlt: "API com sistema de autenticação OAuth 2 desenvolvida em C# para cadastro de produtos",
                    tecImgPath: [
                        "cSharpC.png"
                    ]
                },
                {
                    titulo: "Gerênciador de Tarefas",
                    capaImgPath: "gerenciadorDeTarefas.png",
                    imgAlt: "API RESTful para gerenciamento de tarefas desenvolvida em node utilizando express, typeorm e Header Auth para autenticação",
                    tecImgPath: [
                        "node.png",
                        "dockerlogo.png"
                    ]
                },
                {
                    titulo: "Maringá Frotas",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Sistema web para gestão de frota de veiculos",
                    tecImgPath: [
                        "vueC.png"
                    ]
                },
                {
                    titulo: "Rede Social para Programador",
                    capaImgPath: "redeSocial.png",
                    imgAlt: "Rede social com funcionalidades basicas para posts",
                    tecImgPath: [
                        "vueC.png"
                    ]
                },
                {
                    titulo: "Filmaria",
                    capaImgPath: "filmaria.png",
                    imgAlt: "Site de lançamento de filmes",
                    tecImgPath: [
                        "vueC.png"
                    ]
                },
                {
                    titulo: "Controle de Pedidos",
                    capaImgPath: "controleDePedidos.png",
                    imgAlt: "Site para controle de estoque de items",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ]
                },
                {
                    titulo: "Me Acha",
                    capaImgPath: "MeAcha.png",
                    imgAlt: "Site busca de CEPs",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ]
                },
                {
                    titulo: "My Clouth Stock",
                    capaImgPath: "myClouthStock.png",
                    imgAlt: "Site para controle de estoque de roupas",
                    tecImgPath: [
                        "pythonC.png"
                    ]
                },
                {
                    titulo: "Downloader de Video do Youtube",
                    capaImgPath: "youtubeDownloader.png",
                    imgAlt: "Site para baixar videos e audios do youtube",
                    tecImgPath: [
                        "pythonC.png"
                    ]
                },
                {
                    titulo: "Gerênciador de Estacionamentos",
                    capaImgPath: "controleDeEstacionamento.png",
                    imgAlt: "Aplicativo desktop para gerênciar o estacionamento",
                    tecImgPath: [
                        "pythonC.png"
                    ]
                },
        
            ]
        }
    }
}
</script>

<style scoped>
    .icon-img{
        width: 70px;
    }
    
    h2, h3, span{
        color: white;
    }
    h3{
        font-size: 24px;
    }
    .board{
        border: 3px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        height: 450px;
    }

    img{
        max-height: 340px;
    }

    .brightness{
        box-shadow: 0px 0px 25px 10px rgba(255, 255, 255, 0.1);
    }
</style>