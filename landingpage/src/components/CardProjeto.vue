<template>
  <div class="board brightness projeto m-4">
    <a :href="repoUrl" target="_blank">
      <div class="capa col-12 h-75">
        <h3 class="m-1">{{ titulo }}</h3>
        <img
          :src="require(`@/assets/projetos/${capaImgPath}`)"
          class="col-11 img-fluid"
          alt=""
        />
      </div>
      <div class="desc col-12 h-25">
        <span>Tech Stack</span>
        <div class="d-flex justify-content-center">
          <div>
            <img
              v-for="(img, index) in tecImgPath"
              :key="index"
              :src="require(`@/assets/logos/${img}`)"
              class="icon-img m-2"
            />
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "cardPerfil",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    capaImgPath: {
      type: String,
      required: true,
    },
    tecImgPath: {
      type: Array,
      required: true,
    },
    repoUrl: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.icon-img {
  width: 45px;
  height: 45px;
}

h2,
h3,
span {
  color: white;
}
h3 {
  font-size: 24px;
}
.board {
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

a {
    text-decoration: none;
}

.capa {
  overflow: hidden;
}

img {
  height: auto;
  width: 100%;
}

.brightness {
  box-shadow: 0px 0px 25px 10px rgba(255, 255, 255, 0.1);
}

.projeto:hover {
  transform: scale(1.01);
  cursor: pointer;
}
</style>