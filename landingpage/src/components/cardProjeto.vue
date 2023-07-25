<template>
    <div class="board col-md-5 m-md-5 brightness">
        <div class="col-md-10 col-11 m-auto projeto">
            <h3>Controle de Pedidos</h3>
            <!-- <div class="col-11 img-fluid" :style="{'background-image': require(`@/assets/projetos/${capaImgPath}`)}"/> -->

            <img :src="require(`@/assets/projetos/${capaImgPath}`)" class="col-11 img-fluid" alt="">
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img v-for="(img, index) in tecImgPath" :key="index" :src="require(`@/assets/logos/${img}`)" class="icon-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cardPerfil",
    props: {
        titulo: {
            type: String,
            required: true
        },
        capaImgPath: {
            type: String,
            required: true
        },
        tecImgPath: {
            type: Array,
            required: true
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