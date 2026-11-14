<template>
    <div id="skills" class="text-center">
        <h2 class="m-4">Skills</h2>
        <h3 class="m-4">Technical Skills</h3>
        <div class="row justify-content-center mx-1 g-4">
            <div class="col-xl-4 col-lg-6 col-12" v-for="domain in technicalSkills" :key="domain.name">
                <div class="skills p-4 rounded-3 h-100">
                    <h4 class="domain-title mb-3">{{ domain.name }}</h4>
                    <ul class="hard-skills p-0 m-0">
                        <li v-for="skill in domain.skills" :key="skill.name">
                            <h4>{{ skill.name }}</h4>
                            <ProgressBar :loading="levels[skill.level]" :label="skill.level" type="bg-warning" height="20px" width="400px" />
                            <Certificacoes v-if="skill.certifications" @click="openModal(skill)" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mx-1 pb-5">
            <div class="col-xl-6 col-lg-8 col-12">
                <h3 class="m-4">Soft Skills</h3>
                <div class="skills p-4 rounded-3 col-12">
                    <ul class="soft-skills p-0 m-0">
                        <li v-for="skill in softSkills" :key="skill.name">
                            <h4>{{ skill.name }}</h4>
                            <ProgressBar :loading="skill.value" type="bg-success" height="20px" width="400px" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <ModalComponent
            :title="activeSkill ? `${activeSkill.name} Certifications` : ''"
            :open="activeSkill !== null"
            :contents="activeSkill ? activeSkill.certifications : []"
            @close="closeModal()" />
    </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue"
import Certificacoes from "./Certificacoes.vue";
import ModalComponent from "./Modal.vue";

const dotnetCertifications = [
    { title: "Complete C#: Object-Oriented Programming + Projects", time: "2023" },
    { title: ".NET 6 Web API: From Zero to Advanced", time: "2022" },
    { title: "C# and Object-Oriented Programming", time: "2022" },
    { title: "C#: Using Inheritance and Implementing Interfaces", time: "2022" },
    { title: "C#: Exploring the Language", time: "2022" },
    { title: "T.I Academy: C# Web APIs", time: "2022" },
];

const containerCertifications = [
    { title: "Professional Experience", time: "2024" },
    { title: "Docker for Developers (with Docker Swarm and Kubernetes)", time: "2024" },
    { title: "Self-taught Development", time: "2024" },
];

export default {
    name: "HabilidadesC",
    components: {
        ProgressBar,
        Certificacoes,
        ModalComponent
    },
    data() {
        return {
            activeSkill: null,
            levels: {
                Advanced: 90,
                Intermediate: 65,
                Basic: 35
            },
            technicalSkills: [
                {
                    name: "Back-end",
                    skills: [
                        { name: "C# / .NET", level: "Advanced", certifications: dotnetCertifications },
                        {
                            name: "Messaging – RabbitMQ & Azure Service Bus",
                            level: "Advanced",
                            certifications: [
                                { title: "Professional Experience (Azure Service Bus)", time: "2025" },
                                { title: "Self-taught Development", time: "2024" },
                                { title: "Professional Experience (RabbitMQ)", time: "2023" },
                            ]
                        },
                        {
                            name: "Redis",
                            level: "Intermediate",
                            certifications: [
                                { title: "Professional Experience", time: "2025" },
                                { title: "Self-taught Development", time: "2024" },
                            ]
                        },
                        { name: "Relational Databases – PostgreSQL & SQL Server", level: "Intermediate" },
                        { name: "MongoDB", level: "Basic" },
                    ]
                },
                {
                    name: "DevOps",
                    skills: [
                        { name: "Docker", level: "Intermediate", certifications: containerCertifications },
                        { name: "Kubernetes", level: "Intermediate", certifications: containerCertifications },
                        { name: "Sonar", level: "Intermediate" },
                        { name: "GitHub Actions", level: "Basic" },
                    ]
                },
                {
                    name: "Communication Protocols",
                    skills: [
                        { name: "HTTP RESTful APIs", level: "Advanced" },
                        { name: "WebSockets – SignalR", level: "Basic" },
                        { name: "Server-Sent Events", level: "Basic" },
                    ]
                },
                {
                    name: "Front-end",
                    skills: [
                        { name: "JavaScript / TypeScript", level: "Intermediate" },
                        { name: "Vue.js & React", level: "Intermediate" },
                        { name: "Tailwind CSS", level: "Intermediate" },
                        { name: "Angular", level: "Basic" },
                    ]
                },
                {
                    name: "AI for Development",
                    skills: [
                        { name: "Claude Code", level: "Intermediate" },
                        { name: "Codex", level: "Intermediate" },
                        { name: "Rules, Agents & Skills Development", level: "Intermediate" },
                    ]
                },
            ],
            softSkills: [
                { name: "Logical Reasoning", value: 90 },
                { name: "Problem Solving", value: 80 },
                { name: "Teamwork", value: 75 },
                { name: "Creativity", value: 85 },
                { name: "Leadership", value: 70 },
            ]
        };
    },
    methods: {
        openModal(skill) {
            this.activeSkill = skill;
            document.querySelector("body").style.overflowY = "hidden";
        },

        closeModal() {
            this.activeSkill = null;
            document.querySelector("body").style.overflowY = "auto";
        }
    }
}
</script>

<style scoped>
#skills {
    color: white;
    font-size: 20px;
}

.skills {
    background-color: #3A3A3A;
}

.soft-skills>li {
    padding: 11px;
}

.hard-skills>li {
    padding: 5px;
}

ul {
    border: 3px solid #3A3A3A;
}

h2 {
    font-size: 28px;
}

h3 {
    font-size: 24px;
}

h4 {
    font-size: 18px;
    font-weight: 500;
}

.domain-title {
    font-size: 21px;
    font-weight: 600;
    color: #ffc107;
}

span {
    font-size: 16px;
}
</style>
