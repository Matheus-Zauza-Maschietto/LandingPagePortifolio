<template>
  <div class="text-center">
    <h2>Meus Projetos</h2>
    <div class="container-lg">
        <div class="col-md-6 m-5" v-for="projeto in projetos" :key="projeto.titulo">
            <h3>{{ projeto.titulo }}</h3>
            <img :src="projeto.imgPath" :alt="projeto.imgAlt">
            <span>Tecnologias Usadas</span>
            <div v-for="tecnologia in projeto.tecnologias" :key="tecnologia.imgAlt" class="d-flex">
                <img :src="tecnologia.imgPath" :alt="tecnologia.imgAlt">
            </div>
        </div>
        <div class="col-md-6 m-5">
            <h3>I Want</h3>
            <img src="../assets/projetos/IWant.png" alt="API de produtos">
            <span>Tecnologias Usadas</span>
            <div v-for="tecnologia in projeto.tecnologias" :key="tecnologia.imgAlt" class="d-flex">
                <img src="../assets/logos/cSharp.png" alt="logo CSharp">
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
                    imgPath: "../assets/projetos/controleDePedido.png",
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

<style>

</style>