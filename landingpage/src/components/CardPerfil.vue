<template>
    <div class="card text-center p-2 container brightness" style="width: 350px; color: rgb(222, 222, 222);">
        <div class="img-div rounded-circle d-flex justify-content-center align-items-end h-auto ratio ratio-1x1">
            <img src="../assets/myPhotos/myPhotoC.png" class="img-fluid p-5 mt-5" alt="Photo of Matheus Zauza Maschietto">
        </div>
        <div class="card-body ">
            <h5 class="card-title">Matheus Zauza Maschietto</h5>
            <p class="card-text mb-1">Mid-Level Software Engineer</p>
            <p class="card-text subtitle">Back-end &middot; C# / .NET &middot; Distributed Systems</p>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/matheus-zauza-maschietto-ab9540215/" rel="author" target="_blank" aria-label="LinkedIn">
                <font-awesome-icon icon="fa-brands fa-linkedin" class="icon p-3"/>
            </a>
            <a href="https://github.com/Matheus-Zauza-Maschietto" rel="author" target="_blank" aria-label="GitHub">
                <font-awesome-icon icon="fa-brands fa-github" class="icon p-3"/>
            </a>
            <a href="mailto:matheus_maschietto@yahoo.com.br" aria-label="E-mail">
                <font-awesome-icon icon="fa-solid fa-envelope" class="icon p-3"/>
            </a>
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
    .subtitle{
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
    }
    .icon{
        font-size: 50px;
        color: black;
    }
    .card{
        border-top-left-radius: 1000px;
        border-top-right-radius: 1000px;
    }

    .img-div{
        overflow: hidden;
        background: #000;
    }

</style>
