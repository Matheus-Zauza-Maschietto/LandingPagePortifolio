<template>
<!-- <div class="col-md-5 col-11 m-auto projeto" v-for="projeto in projetos" :key="projeto.titulo">
    <h3>{{ projeto.titulo }}</h3>
    <img :src="projeto.imgPath" :alt="projeto.imgAlt"  class="img-fluid">
    <span>Tecnologias Usadas</span>
    <div v-for="tecnologia in projeto.tecnologias" :key="tecnologia.imgAlt" class="d-flex justify-content-center">
        <img :src="tecnologia.imgPath" :alt="tecnologia.imgAlt" class="icon-img">
    </div>
</div> -->
  <div class="text-center" id="projetos">
    <h2>Meus Projetos</h2>
    <div class="container row row-cols-2 m-auto">
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>I Want</h3>
            <img src="../assets/projetos/IWant.png" alt="API de produtos" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/cSharp.png" alt="logo CSharp" class="icon-img">
            </div>
        </div>
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>Filmaria</h3>
            <img src="../assets/projetos/filmaria.png" alt="Site de lançamento de filmes" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/vue.png" alt="logo vue.js" class="icon-img">
            </div>
        </div>
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>Me Acha</h3>
            <img src="../assets/projetos/MeAcha.png" alt="Site busca de CEPs" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/front.png" alt="logo html css e javascript" class="icon-img">
            </div>
        </div>
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>My Clouth Stock</h3>
            <img src="../assets/projetos/myClouthStock.png" alt="Site para controle de estoque de roupas" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/python.png" alt="logo python" class="icon-img">
            </div>
        </div>
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>Controle de Pedidos</h3>
            <img src="../assets/projetos/controleDePedidos.png" alt="Site para controle de estoque de items" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/front.png" alt="logo html css e javascript" class="icon-img">
            </div>
        </div>
        <div class="col-md-5 col-11 m-auto projeto">
            <h3>Downloader de Video do Youtube</h3>
            <img src="../assets/projetos/youtubeDownloader.png" alt="Aplicativo desktop para baixar videos e audios do youtube" class="img-fluid">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/python.png" alt="logo python" class="icon-img">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProjetosC",
    data(){
        return{
            projetos: [
                {
                    titulo: "I Want",
                    imgPath: "../assets/projetos/IWant.png",
                    imgAlt: "API de produtos",
                    tecnologias: [
                        {imgPath: "../assets/logos/cSharp.png", imgAlt: "logo CSharp"}
                    ]
                },
                {
                    titulo: "Filmaria",
                    imgPath: "../assets/projetos/filmaria.png",
                    imgAlt: "Site de lançamento de filmes",
                    tecnologias: [
                        {imgPath: "../assets/logos/vue.png", imgAlt: "logo vue.js"}
                    ]
                },
                {
                    titulo: "Me Acha",
                    imgPath: "../assets/projetos/MeAcha.png",
                    imgAlt: "Site busca de CEPs",
                    tecnologias: [
                        {imgPath: "../assets/logos/front.png", imgAlt: "logo html css e javascript"}
                    ]
                },
                {
                    titulo: "My Clouth Stock",
                    imgPath: "../assets/projetos/myClouthStock.png",
                    imgAlt: "Site para controle de estoque de roupas",
                    tecnologias: [
                        {imgPath: "../assets/logos/python.png", imgAlt: "logo python"}
                    ]
                },
                {
                    titulo: "Controle de Pedidos",
                    imgPath: "../assets/projetos/controleDePedidos.png",
                    imgAlt: "Site para controle de estoque de items",
                    tecnologias: [
                        {imgPath: "../assets/logos/front.png", imgAlt: "logo html css e javascript"}
                    ]
                },
                {
                    titulo: "Downloader de Video do Youtube",
                    imgPath: "../assets/projetos/youtubeDownloader.png",
                    imgAlt: "Site para baixar videos e audios do youtube",
                    tecnologias: [
                        {imgPath: "../assets/logos/python.png", imgAlt: "logo python"}
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

</style>