<template>
  <div id="sobre">
    <div class="col-md-11 p-3 rounded-2 m-md-auto m-2" id="meu-resumo">
      <h2 class="text-center">About</h2>
      <p class="p-4 text-justify">
        Born in Loanda (PR), I have always had a strong affinity with
        mathematics, logic and creativity. I started my studies in programming
        as a hobby, but as time went by I realized that I would like to have
        this as my profession. I currently work developing integrations in APIs
        and databases, using Dotnet. I like chess, reading and I am a
        science/astronomy enthusiast
      </p>
    </div>
    <div class="row justify-content-around m-2 info-cards">
      <div
        class="col-lg-5 col-11 text-center m-lg-5 m-md-4 p-md-4 p-2 mx-auto my-3 py-4 rounded-3 brightness"
      >
        <h3>Personal Details</h3>
        <div
          class="col-lg-9 col-12 m-auto d-flex flex-column justify-content-evenly h-100"
        >
          <div class="d-flex justify-content-between information">
            <h3>Name</h3>
            <span class="w-auto text-end">Matheus Zauza Maschietto</span>
          </div>
          <div class="d-flex justify-content-between information">
            <h3>E-mail</h3>
            <span class="w-auto text-end">matheus_maschietto@yahoo.com.br</span>
          </div>
          <div class="d-flex justify-content-between information">
            <h3>Work experience</h3>
            <span class="w-auto text-end">3 Years</span>
          </div>
          <div class="d-flex justify-content-between information">
            <h3>Address</h3>
            <span class="w-auto text-end">Maringá, PR, Brazil</span>
          </div>
          <div class="d-flex justify-content-between information">
            <h3>Idade</h3>
            <span class="w-auto text-end">{{ this.calculateAge() }} Years</span>
          </div>
        </div>
      </div>
      <div
        class="col-lg-5 col-11 d-flex flex-column text-center m-lg-5 m-md-4 p-md-4 p-2 mx-auto my-3 rounded-3 brightness"
      >
        <h3>My Roadmap</h3>
        <span class="init-jorney-ball"></span>
        <span class="init-jorney-stick"></span>
        <p>Beginning of studies in Programming: 2020</p>
        <span class="init-jorney-stick"></span>
        <p>High School (Completed): 2021</p>
        <span class="init-jorney-stick"></span>
        <p>College (Beginning): 2022</p>
        <span class="init-jorney-stick"></span>
        <p>HackaTruck: May, 2022</p>
        <span class="init-jorney-stick"></span>
        <p>Trainee Developer: September, 2022</p>
        <span class="init-jorney-stick"></span>
        <p>Junior Developer, 2023</p>
        <span class="init-jorney-stick"></span>
        <p>Hackathon InovaAgro 3st place: May, 2023</p>
        <span class="init-jorney-stick"></span>
        <p>Ploomes Innovation Challenge 1st place: March, 2024</p>
        <span class="init-jorney-stick"></span>
        <p>Middle Developer: Agosto, 2024</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreC",
  methods: {
    calculateAge() {
      const bithday = new Date(2004, 1, 10);
      const actualDate = new Date();

      let years = actualDate.getFullYear() - bithday.getFullYear();

      const actualMonth = actualDate.getMonth();
      const actualDay = actualDate.getDate();

      if (
        actualMonth < bithday.getMonth() ||
        (actualMonth === bithday.getMonth() &&
          actualDay < bithday.getDate())
      ) {
        years--;
      }

      return years;
    },
  },
};
</script>

<style scoped>
.brightness {
  box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.1);
}

#sobre {
  color: white;
  font-size: 20px;
}

#meu-resumo {
  background: #3a3a3a;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 24px;
}

.info-cards > div {
  border: 3px solid #3a3a3a;
  background: #1e1e1e;
  font-size: 18px;
}
.info-cards > div h3 {
  font-size: 20px;
}

p {
  margin: 0;
}

#init-jorney {
  margin: auto;
}

.init-jorney-ball {
  background: white;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: auto;
}

.init-jorney-stick {
  background: white;
  width: 2px;
  height: 20px;
  margin: auto;
}

.information {
  flex-wrap: wrap;
}

.brightness > p,
.information {
  transition: 0.3s;
  padding: 5px;
}

.brightness > p:hover,
.information:hover {
  transform: scale(1.05);
}

.text-justify {
  text-align: justify;
}
</style>