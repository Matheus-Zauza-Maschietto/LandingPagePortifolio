<template>
<!-- <div class="col-md-5 col-11 m-auto projeto" v-for="projeto in projetos" :key="projeto.titulo">
    <h3>{{ projeto.titulo }}</h3>
    <img :src="projeto.imgPath" :alt="projeto.imgAlt"  class="img-fluid">
    <span>Tecnologias Usadas</span>
    <div v-for="tecnologia in projeto.tecnologias" :key="tecnologia.imgAlt" class="d-flex justify-content-center">
        <img :src="tecnologia.imgPath" :alt="tecnologia.imgAlt" class="icon-img">
    </div>
</div> -->

  <!-- <div class="text-center" id="projetos">
    <h2>Meus Projetos</h2>
    <div class="container row row-cols-md-2 m-auto">
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>I Want</h3>
                <img src="../assets/projetos/IWant.png" alt="API de produtos" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/cSharp.png" alt="logo CSharp" class="icon-img">
                </div>
            </div>
        </div>
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>Filmaria</h3>
                <img src="../assets/projetos/filmaria.png" alt="Site de lançamento de filmes" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/vue.png" alt="logo vue.js" class="icon-img">
                </div>
            </div>
        </div>
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>Me Acha</h3>
                <img src="../assets/projetos/MeAcha.png" alt="Site busca de CEPs" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/front.png" alt="logo html css e javascript" class="icon-img">
                </div>
            </div>
        </div>
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>My Clouth Stock</h3>
                <img src="../assets/projetos/myClouthStock.png" alt="Site para controle de estoque de roupas" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/python.png" alt="logo python" class="icon-img">
                </div>
            </div>
        </div>
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>Controle de Pedidos</h3>
                <img src="../assets/projetos/controleDePedidos.png" alt="Site para controle de estoque de items" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/front.png" alt="logo html css e javascript" class="icon-img">
                </div>
            </div>
        </div>""
        <div class="board col-md-5 m-md-5 brightness">
            <div class="col-md-10 col-11 m-auto projeto">
                <h3>Downloader de Video do Youtube</h3>
                <img src="../assets/projetos/youtubeDownloader.png" alt="Aplicativo desktop para baixar videos e audios do youtube" class="img-fluid">
                <span>Tecnologias Usadas</span>
                <div class="d-flex justify-content-center">
                    <img src="../assets/logos/python.png" alt="logo python" class="icon-img">
                </div>
            </div>
        </div> -->

    <!-- </div> -->
  <!-- </div> -->
        <div class="text-center" id="projetos">
            <h2>Meus Projetos</h2>
            <div class="container row row-cols-md-2 m-auto">
                <cardProjeto v-for="(card, index) in projetos" :key="index" :titulo="card.titulo" :capaImgPath="card.capaImgPath" :tecImgPath="card.tecImgPath"/>
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
                        "python.png"
                    ]
                },
                {
                    titulo: "Filmaria",
                    capaImgPath: "filmaria.png",
                    imgAlt: "Site de lançamento de filmes",
                    tecImgPath: [
                        "vue.png"
                    ]
                },
                {
                    titulo: "Me Acha",
                    capaImgPath: "MeAcha.png",
                    imgAlt: "Site busca de CEPs",
                    tecImgPath: [
                        "front.png"
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
                        "front.png"
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