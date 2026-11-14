<template>
  <div id="experience" class="text-center">
    <h2 class="m-4">Professional Experience</h2>
    <div class="col-xl-9 col-lg-10 col-11 mx-auto timeline">
      <div class="job rounded-3 p-md-4 p-3 mb-4 text-start" v-for="(job, index) in jobs" :key="index">
        <div class="d-flex flex-wrap justify-content-between align-items-baseline gap-2">
          <h3 class="m-0">
            <font-awesome-icon icon="fa-solid fa-briefcase" class="me-2 section-icon" />
            {{ job.role }}
          </h3>
          <span class="period">{{ job.period }}</span>
        </div>
        <h4 class="company mt-1 mb-3">{{ job.company }} <span class="location">&middot; {{ job.location }}</span></h4>
        <ul class="ps-3 mb-0">
          <li v-for="(item, i) in job.highlights" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>

    <div class="row col-xl-9 col-lg-10 col-11 mx-auto justify-content-between pb-5">
      <div class="col-lg-6 col-12 ps-lg-0 pe-lg-3 px-0 mb-4">
        <h2 class="m-4">Education</h2>
        <div class="job rounded-3 p-md-4 p-3 mb-3 text-start" v-for="(course, index) in education" :key="index">
          <h3 class="m-0">
            <font-awesome-icon icon="fa-solid fa-graduation-cap" class="me-2 section-icon" />
            {{ course.title }}
          </h3>
          <h4 class="company mt-1 mb-2">{{ course.institution }} <span class="location">&middot; {{ course.period }}</span></h4>
          <p class="mb-0">{{ course.description }}</p>
        </div>
      </div>
      <div class="col-lg-6 col-12 pe-lg-0 ps-lg-3 px-0 mb-4">
        <h2 class="m-4">Awards &amp; Honours</h2>
        <div class="job rounded-3 p-md-4 p-3 mb-3 text-start" v-for="(award, index) in awards" :key="index">
          <h3 class="m-0">
            <font-awesome-icon icon="fa-solid fa-trophy" class="me-2 section-icon" />
            {{ award.title }}
          </h3>
          <h4 class="company mt-1 mb-0">{{ award.event }} <span class="location">&middot; {{ award.year }}</span></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienciaC",
  data() {
    return {
      jobs: [
        {
          role: "Mid-Level Software Engineer",
          company: "AmbevTech",
          location: "Remote",
          period: "July 2025 – Present",
          highlights: [
            "Developed and maintained scalable microservices within distributed environments.",
            "Implemented message filtering and idempotency mechanisms using Azure Service Bus.",
            "Implemented caching strategies using Redis to optimize data retrieval and application responsiveness.",
            "Engineered distributed locks to guarantee concurrency control and overall system correctness.",
            "Conducted technical discovery and backlog refinement sessions for new product initiatives.",
            "Built custom Agents, MCPs (Model Context Protocol servers) and Plugins within Claude Code and Codex.",
            "Delivered internal technical training sessions covering Claude Code, WebSockets and Distributed Locks.",
            "Optimized algorithm performance and tuned SQL Server query execution plans.",
            "Maintained and updated React-based microfrontends.",
          ],
        },
        {
          role: "Mid-Level Software Engineer",
          company: "Ploomes Sistemas Empresariais S.A.",
          location: "Remote",
          period: "August 2024 – July 2025",
          highlights: [
            "Developed and maintained scalable enterprise integrations in C# / .NET.",
            "Designed scalable and resilient software architectures for internal strategic projects.",
            "Led the end-to-end technical implementation of new internal strategic projects, from conception to release.",
            "Delivered technical training on RabbitMQ, Redis and Connection Pooling to upskill the engineering team.",
            "Implemented a Layer 4 Load Balancer (HAProxy) for TCP connection proxying.",
            "Maintained and monitored containerized applications running in a Kubernetes environment.",
            "Configured local Sonar instances to evaluate and enforce .NET code quality standards.",
          ],
        },
        {
          role: "Junior Software Engineer",
          company: "Ploomes Sistemas Empresariais S.A.",
          location: "Remote",
          period: "September 2023 – August 2024",
          highlights: [
            "Built and maintained scalable integrations using C# / .NET.",
            "Conducted internal training sessions on Unit Testing (xUnit and NSubstitute), Dependency Injection and service lifetimes in .NET.",
            "Implemented application observability and logging pipelines using Serilog and Datadog.",
            "Contributed to internal .NET project templates and developer tooling to boost team productivity.",
            "Used n8n to automate workflows and build streamlined integrations.",
            "Won 1st place in the internal innovation hackathon, delivering a solution that was later incorporated into company operations.",
          ],
        },
        {
          role: "Junior Software Engineer",
          company: "Benner Sistemas S.A.",
          location: "Maringá",
          period: "February 2023 – September 2023",
          highlights: [
            "Developed and maintained software projects within the innovation team using C#.",
            "Migrated complex business rules across domain entities, backed by comprehensive unit test coverage.",
            "Identified, diagnosed and resolved defects within the company's proprietary internal framework.",
          ],
        },
        {
          role: "Software Engineering Trainee",
          company: "Benner Sistemas S.A.",
          location: "Maringá",
          period: "September 2022 – February 2023",
          highlights: [
            "Completed intensive technical training in C# / .NET and Vue.js.",
            "Contributed to feature development within the innovation team.",
            "Built the \"My Task\" web platform from scratch, which was later adopted for internal company use.",
          ],
        },
      ],
      education: [
        {
          title: "Postgraduate Specialization in Software Architecture",
          institution: "FIAP",
          period: "March 2026 – December 2026",
          description: "Graduate-level program focused on modern software architecture patterns and distributed systems.",
        },
        {
          title: "Bachelor of Software Engineering",
          institution: "Unicesumar",
          period: "February 2022 – December 2025",
          description: "Undergraduate degree in Software Engineering.",
        },
      ],
      awards: [
        { title: "1st Place", event: "Ploomes Internal Innovation Hackathon", year: "2024" },
        { title: "3rd Place", event: "Inovagro Hackathon", year: "2023" },
        { title: "Selected Participant", event: "16th Startup Acceleration Batch at EVOA by Thronos", year: "2026" },
      ],
    };
  },
};
</script>

<style scoped>
#experience {
  color: white;
  font-size: 17px;
}

h2 {
  font-size: 28px;
}

h3 {
  font-size: 21px;
}

h4 {
  font-size: 17px;
  font-weight: 500;
}

.job {
  border: 3px solid #3a3a3a;
  background: #2a2a2a;
  box-shadow: 0px 0px 20px 5px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease-in-out;
}

.job:hover {
  transform: scale(1.01);
}

.company {
  color: #ffc107;
}

.location,
.period {
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  font-weight: 400;
}

.section-icon {
  color: #ffc107;
}

ul {
  list-style: disc;
}

li {
  padding: 3px 0;
  line-height: 1.45;
}
</style>
