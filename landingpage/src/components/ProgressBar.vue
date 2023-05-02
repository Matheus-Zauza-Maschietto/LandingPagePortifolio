<template>
    <div class="progress m-auto position-relative" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="{height: height, maxWidth: width}">
        <span class="position-absolute start-50 top-50 translate-middle" style="font-weight: bold;">{{loading}}%</span>
        <div class="progress-bar progress-bar-striped progress-bar-animated" :class="[type]" :style="{width: loading+'%'}"></div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: ["width", "height", "type", "loading"]
}
</script>

<style>

</style>