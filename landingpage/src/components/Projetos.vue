<template>
        <div class="text-center" id="projetos">
            <h2>Meus Projetos</h2>
            <div class="row row-cols-md-2 m-auto justify-content-around">
                <cardProjeto v-for="(card, index) in projetos" :key="index" :titulo="card.titulo" :capaImgPath="card.capaImgPath" :tecImgPath="card.tecImgPath" :repoUrl="card.repoUrl" class="col-xxl-3 m-xxl-5 col-md-5 m-md-4 col-11 m-4"/>
            </div>
        </div>
</template>

<script>
import cardProjeto from './CardProjeto.vue'

export default {
    name: "ProjetosC",
    components: {
        cardProjeto
    },
    data(){
        return{
            projetos: [
                {
                    titulo: "Biblioteca PDF",
                    capaImgPath: "bibliotecapdf-1.png",
                    imgAlt: "Aplicação para gerenciamento e compartilhamento de bliblioteca online.",
                    tecImgPath: [
                        "cSharpC.png",
                        "postgres.png",
                        "redis.png",
                        "vueC.png",
                        "websocket.png",
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/BibliotecaPDF"
                },
                {
                    titulo: "Treinamento RabbitMQ",
                    capaImgPath: "rabbitMqPatterns.png",
                    imgAlt: "Treinamento ministrado por mim sobre padrões RabbitMQ",
                    tecImgPath: [
                        "cSharpC.png",
                        "rabbitmq.png",
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/RabbitMQ-Patterns"
                },
                {
                    titulo: "Jogo de Cartas",
                    capaImgPath: "cardGame.png",
                    imgAlt: "API de jogo de cartas com traduções e performance",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png",
                        "redis.png",
                        "kafka.png",
                        "sqlserver.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Card-Game"
                },
                {
                    titulo: "Integração Chat GPT",
                    capaImgPath: "gptIntegration.png",
                    imgAlt: "API de chat integrada com Chat GPT",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png",
                        "gptlogo.png",
                        "postgres.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/GPT-Integration"
                },
                {
                    titulo: "Food Place",
                    capaImgPath: "FoodPlace.png",
                    imgAlt: "Sistema de API para gerenciamento de pedidos de restaurantes",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/foodPlace"

                },
                {
                    titulo: "Auto Mapeamento (Vencedor do desafio de inovação Ploomes 2024)",
                    capaImgPath: "AutoMapeamento.png",
                    imgAlt: "Sistema para mapeamento de rotas de Web API para padrões Excel. Desenvolvido com C# e Vue.js",
                    tecImgPath: [
                        "cSharpC.png",
                        "vueC.png",
                        "sqlserver.png"
                    ],
                    repoUrl: "https://github.com/matheuszauzamaschietto/Auto-Mapeamento"
                },
                {
                    titulo: "I Want",
                    capaImgPath: "IWant.png",
                    imgAlt: "API com sistema de autenticação OAuth 2 desenvolvida em C# para cadastro de produtos",
                    tecImgPath: [
                        "cSharpC.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/IWantApp"
                },
                {
                    titulo: "Gerenciador de Tarefas",
                    capaImgPath: "gerenciadorDeTarefas.png",
                    imgAlt: "API RESTful para gerenciamento de tarefas desenvolvida em node usando express, typeorm e Header Auth para autenticação",
                    tecImgPath: [
                        "node.png",
                        "dockerlogo.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Gerenciador-de-tarefas-Node"
                },
                {
                    titulo: "Minhas Tarefas",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Sistema web para tarefas produtivas",
                    tecImgPath: [
                        "vueC.png",
                        "cSharpC.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/MyTasksAPI"
                },
                {
                    titulo: "Maringá Frotas",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Sistema web para gerenciamento de frota de veículos",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Maringa-Frotas-Vue"
                },
                {
                    titulo: "Rede Social para Programadores",
                    capaImgPath: "redeSocial.png",
                    imgAlt: "Rede social com funcionalidades básicas para posts",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Social-Media-with-VUE"
                },
                {
                    titulo: "Notícias IBGE",
                    capaImgPath: "IBGEnews.png",
                    imgAlt: "Centro de notícias do IBGE",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Noticias-IBGE"
                },
                {
                    titulo: "Gerenciador de Estoque",
                    capaImgPath: "controleDePedidos.png",
                    imgAlt: "Website para gerenciamento de estoque de itens",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/HtmlCssTIAcademy/tree/main/desafio2/projeto1"
                },
                {
                    titulo: "Me Acha",
                    capaImgPath: "MeAcha.png",
                    imgAlt: "Website simples para obter informações de endereços brasileiros baseado no CEP",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Me-Acha"
                }
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