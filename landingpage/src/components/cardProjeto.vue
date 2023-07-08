<template>
    <div class="board col-md-5 m-md-5 brightness">
        <div class="col-md-10 col-11 m-auto projeto">
            <h3>Controle de Pedidos</h3>
            <div class="col-11 img-fluid" :style="{backgroundImage: '../assets/projetos/controleDePedidos.png'}">

            </div>
            <!-- <img src="../assets/projetos/controleDePedidos.png" alt="Site para controle de estoque de items" class=""> -->
            <span>Tecnologias Usadas</span>
            <div class="d-flex justify-content-center">
                <img src="../assets/logos/front.png" alt="logo html css e javascript" class="icon-img">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cardPerfil",
    props: ['infos']
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