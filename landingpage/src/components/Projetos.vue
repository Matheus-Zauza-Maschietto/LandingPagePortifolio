<template>
        <div class="text-center" id="projetos">
            <h2>My Projects</h2>
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
                    titulo: "RabbitMQ Training",
                    capaImgPath: "rabbitMqPatterns.png",
                    imgAlt: "Training given by me about rabbitMQ Patterns",
                    tecImgPath: [
                        "cSharpC.png",
                        "rabbitmq.png",
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/RabbitMQ-Patterns"
                },
                {
                    titulo: "Card Game",
                    capaImgPath: "cardGame.png",
                    imgAlt: "Magic game API with translations and performance",
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
                    titulo: "Chat GPT Integration",
                    capaImgPath: "gptIntegration.png",
                    imgAlt: "Chat API integrated with Chat GPT",
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
                    imgAlt: "Order management api system for restaurants",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/foodPlace"

                },
                {
                    titulo: "Auto Mapeamento (Winner of the Ploomes innovation challenge 2024)",
                    capaImgPath: "AutoMapeamento.png",
                    imgAlt: "System for mapping Web API routes to Excel patterns. Developed with C# and Vue.js",
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
                    imgAlt: "API with OAuth 2 authentication system developed in C# for product registration",
                    tecImgPath: [
                        "cSharpC.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/IWantApp"
                },
                {
                    titulo: "Task Manager",
                    capaImgPath: "gerenciadorDeTarefas.png",
                    imgAlt: "RESTful API for task management developed on node using express, typeorm and Header Auth for authentication",
                    tecImgPath: [
                        "node.png",
                        "dockerlogo.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Gerenciador-de-tarefas-Node"
                },
                {
                    titulo: "My Task",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Web system for productive tasks",
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
                    imgAlt: "Web system for vehicle fleet management",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Maringa-Frotas-Vue"
                },
                {
                    titulo: "Social Network for Programmers",
                    capaImgPath: "redeSocial.png",
                    imgAlt: "Social network with basic features for posts",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Social-Media-with-VUE"
                },
                {
                    titulo: "IBGE News",
                    capaImgPath: "IBGEnews.png",
                    imgAlt: "IBGE news center",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Noticias-IBGE"
                },
                {
                    titulo: "Inventory Manager",
                    capaImgPath: "controleDePedidos.png",
                    imgAlt: "Website for item stock manage",
                    tecImgPath: [
                        "HTML5.png",
                        "CSS3.png",
                        "JS.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/HtmlCssTIAcademy/tree/main/desafio2/projeto1"
                },
                {
                    titulo: "Search Me",
                    capaImgPath: "MeAcha.png",
                    imgAlt: "Simple website to get Brazil address informations based on zip code",
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