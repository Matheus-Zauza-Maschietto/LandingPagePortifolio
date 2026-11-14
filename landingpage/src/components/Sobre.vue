<template>
  <div id="about">
    <div class="col-md-11 p-3 rounded-2 m-md-auto m-2" id="my-summary">
      <h2 class="text-center">About</h2>
      <p class="p-4 text-justify">
        I'm a Mid-Level Software Engineer from Brazil, focused on back-end development
        with C# / .NET and distributed systems. Born in Loanda (PR), I've always had a
        strong affinity for mathematics, logic and creativity. I started programming as
        a hobby and soon realized I wanted it to be my profession. Today I design and
        build scalable microservices and enterprise integrations, working with messaging
        (RabbitMQ and Azure Service Bus), caching with Redis, distributed locks,
        relational databases and containerized environments with Docker and Kubernetes.
        I also enjoy sharing knowledge: I've delivered internal training sessions on
        topics such as RabbitMQ, Redis, WebSockets, distributed locks, unit testing and
        AI-assisted development with Claude Code. Outside of work, I enjoy chess, reading,
        and I'm a science and astronomy enthusiast.
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
          <div class="d-flex justify-content-between information" v-for="detail in details" :key="detail.label">
            <h3>{{ detail.label }}</h3>
            <span class="w-auto text-end">{{ detail.value }}</span>
          </div>
        </div>
      </div>
      <div
        class="col-lg-5 col-11 d-flex flex-column text-center m-lg-5 m-md-4 p-md-4 p-2 mx-auto my-3 rounded-3 brightness"
      >
        <h3>My Journey</h3>
        <span class="init-jorney-ball"></span>
        <template v-for="(step, index) in journey" :key="index">
          <span class="init-jorney-stick"></span>
          <p>{{ step }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreC",
  data() {
    return {
      journey: [
        "Started studying programming: 2020",
        "High school (completed): 2021",
        "Bachelor of Software Engineering, Unicesumar (start): February 2022",
        "HackaTruck: May 2022",
        "Software Engineering Trainee, Benner: September 2022",
        "Junior Software Engineer, Benner: February 2023",
        "Inovagro Hackathon, 3rd place: May 2023",
        "Junior Software Engineer, Ploomes: September 2023",
        "Ploomes Internal Innovation Hackathon, 1st place: March 2024",
        "Mid-Level Software Engineer, Ploomes: August 2024",
        "Mid-Level Software Engineer, AmbevTech: July 2025",
        "Bachelor of Software Engineering (completed): December 2025",
        "Postgraduate in Software Architecture, FIAP (start): March 2026",
        "Selected for the 16th Startup Acceleration Batch at EVOA by Thronos: 2026",
      ],
    };
  },
  computed: {
    details() {
      return [
        { label: "Name", value: "Matheus Zauza Maschietto" },
        { label: "E-mail", value: "matheus_maschietto@yahoo.com.br" },
        { label: "Professional Experience", value: `${this.yearsSince(new Date(2022, 8, 1))}+ Years` },
        { label: "Location", value: "Maringá, PR, Brazil" },
        { label: "Age", value: `${this.yearsSince(new Date(2004, 1, 10))} Years` },
        { label: "Languages", value: "Portuguese (Native), English (Advanced)" },
      ];
    },
  },
  methods: {
    yearsSince(startDate) {
      const actualDate = new Date();

      let years = actualDate.getFullYear() - startDate.getFullYear();

      const actualMonth = actualDate.getMonth();
      const actualDay = actualDate.getDate();

      if (
        actualMonth < startDate.getMonth() ||
        (actualMonth === startDate.getMonth() &&
          actualDay < startDate.getDate())
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

#about {
  color: white;
  font-size: 20px;
}

#my-summary {
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
  gap: 0 12px;
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
