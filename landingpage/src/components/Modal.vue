<template>
    <div :class="[{ show: this.open }, {modal: true}, {fade: true}]" :style="{display: getDisplayStyle(), backdropFilter: getBackdropFilterStyle()}">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered col-lg-6 col-md-9 col-11">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ this.title }}</h1>
                    <button type="button" class="btn-close" @click="close()"></button>
                </div>
                <div class="modal-body">
                    <div class="col-11 mx-auto d-flex" v-for="(content, index) in this.contents" :key="index">
                        <p class="text-start col-10 p-2">
                            {{ content.title }}
                        </p>
                        <p class="text-end col-2 p-2">
                            {{ content.time }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ModalComponent",
    data() {
        return {
        };
    },
    methods: {
        close() {
            this.$emit("close");
        },

        getDisplayStyle() {
            return  this.open == true ? "block" : "none";
        },

        getBackdropFilterStyle() {
            return this.open == true ? "blur(5px)" : "none";
        }
    },
    props: ["title", "open", "contents"],
    emits: ["close"],

}
</script>

<style scoped>
    h1, p{
        color: #000;
    }
</style>