<template>
    <div class="card p-2 container brightness" style="width: 350px; color: #DFDFDF;">
        <div class="img-div rounded-circle d-flex justify-content-center align-items-end m-1">
            <img src="../assets/myPhotos/myPhoto2.png" class="" id="self-photo" alt="...">
        </div>
        <div class="card-body ">
            <h5 class="card-title">Matheus Zauza Maschietto</h5>
            <p class="card-text">Desenvolvedor FullStack</p>
        </div>
        <div>
            <i class="fa-brands fa-linkedin"></i>
            <font-awesome-icon icon="fa-brands fa-linkedin" class="icon p-3"/>
            <font-awesome-icon icon="fa-brands fa-github" class="icon p-3"/>
        </div>
    </div>
</template>

<script>
export default{
    name: "CardPerfilC"
}
</script>

<style scoped>
    h1, h2, h3, h4, h5, h6, p{
        color: black;
    }
    .icon{
        font-size: 50px;
        color: black;
    }
    .card{
        border-top-left-radius: 1000px;
        border-top-right-radius: 1000px;
        text-align: center;
    }

    .img-div{
        height: 320px;
        width: auto;
        overflow: hidden;
        background: #000;
    }

    #self-photo{
        width: 70%;
    }

</style>