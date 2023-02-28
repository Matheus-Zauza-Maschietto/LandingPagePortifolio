<template>
    <div class="card p-2" style="width: 300px;">
        <div class="img-div rounded-circle d-flex justify-content-center align-items-center m-2">
            <img src="../assets/logo.png" class="card-img-top " id="self-photo" alt="...">
        </div>
        <div class="card-body ">
            <h5 class="card-title">Matheus Zauza Maschietto</h5>
            <p class="card-text">Desenvolvedor FullStack</p>
        </div>
        <div>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardPerfilC"
}
</script>

<style scoped>
    .card{
        border-top-left-radius: 1000px;
        border-top-right-radius: 1000px;
        text-align: center;
    }

    .img-div{
        height: 280px;
        overflow: hidden;
        background: #000;
    }

    #self-photo{
        width: 70%;
    }

</style>