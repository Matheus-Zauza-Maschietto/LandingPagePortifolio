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
                    titulo: "I Want",
                    capaImgPath: "IWant.png",
                    imgAlt: "API de produtos",
                    tecImgPath: [
                        "cSharpC.png"
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
                        "python.png"
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
                    titulo: "Downloader de Video do Youtube",
                    capaImgPath: "youtubeDownloader.png",
                    imgAlt: "Site para baixar videos e audios do youtube",
                    tecImgPath: [
                        "python.png"
                    ]
                },
                {
                    titulo: "Gerênciador de Estacionamentos",
                    capaImgPath: "controleDeEstacionamento.png",
                    imgAlt: "Aplicativo desktop para gerênciar o estacionamento",
                    tecImgPath: [
                        "python.png"
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