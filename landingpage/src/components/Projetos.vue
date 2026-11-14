<template>
        <div class="text-center" id="projects">
            <h2>My Projects</h2>
            <div class="row row-cols-md-2 m-auto justify-content-around">
                <cardProjeto v-for="(card, index) in projetos" :key="index" :titulo="card.titulo" :capaImgPath="card.capaImgPath" :tecImgPath="card.tecImgPath" :repoUrl="card.repoUrl" :descricao="card.imgAlt" class="col-xxl-3 m-xxl-5 col-md-5 m-md-4 col-11 m-4"/>
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
                    titulo: "PDF Library",
                    capaImgPath: "bibliotecapdf-1.png",
                    imgAlt: "Application for managing and sharing an online library.",
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
                    titulo: "RabbitMQ Training",
                    capaImgPath: "rabbitMqPatterns.png",
                    imgAlt: "Training I delivered on RabbitMQ messaging patterns",
                    tecImgPath: [
                        "cSharpC.png",
                        "rabbitmq.png",
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/RabbitMQ-Patterns"
                },
                {
                    titulo: "Card Game",
                    capaImgPath: "cardGame.png",
                    imgAlt: "Card game API focused on translations and performance",
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
                    titulo: "ChatGPT Integration",
                    capaImgPath: "gptIntegration.png",
                    imgAlt: "Chat API integrated with ChatGPT",
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
                    imgAlt: "API system for managing restaurant orders",
                    tecImgPath: [
                        "cSharpC.png",
                        "dockerlogo.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/foodPlace"

                },
                {
                    titulo: "Auto Mapping (Winner of the Ploomes Innovation Hackathon 2024)",
                    capaImgPath: "AutoMapeamento.png",
                    imgAlt: "System for mapping Web API routes to Excel templates. Built with C# and Vue.js",
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
                    imgAlt: "Product registration API built in C# with OAuth 2 authentication",
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
                    imgAlt: "RESTful task management API built with Node.js, Express, TypeORM and header-based authentication",
                    tecImgPath: [
                        "node.png",
                        "dockerlogo.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Gerenciador-de-tarefas-Node"
                },
                {
                    titulo: "My Tasks",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Web platform for productivity tasks, later adopted for internal use at Benner",
                    tecImgPath: [
                        "vueC.png",
                        "cSharpC.png",
                        "sqlserver.png",
                        "oauth2.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/MyTasksAPI"
                },
                {
                    titulo: "Maringá Fleet",
                    capaImgPath: "MaringaFrotas.png",
                    imgAlt: "Web system for vehicle fleet management",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Maringa-Frotas-Vue"
                },
                {
                    titulo: "Social Network for Developers",
                    capaImgPath: "redeSocial.png",
                    imgAlt: "Social network with basic posting features",
                    tecImgPath: [
                        "vueC.png"
                    ],
                    repoUrl: "https://github.com/Matheus-Zauza-Maschietto/Social-Media-with-VUE"
                },
                {
                    titulo: "IBGE News",
                    capaImgPath: "IBGEnews.png",
                    imgAlt: "News hub consuming the IBGE (Brazilian Institute of Geography and Statistics) API",
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
                    imgAlt: "Website for managing item inventory",
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
                    imgAlt: "Simple website to look up Brazilian addresses by postal code (CEP)",
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