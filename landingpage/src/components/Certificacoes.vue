<template>
    <a :href="link">
        <span>Certificações </span>
        <font-awesome-icon icon="fa-solid fa-play" class="icon"/>
    </a>
</template>

<script>
export default {
    name: "CertificacoesC",
    props: ["link"]
}
</script>

<style scoped>
    span{
        font-size: 16px;
    }
    .icon{
        font-size: 16px;
    }
</style>