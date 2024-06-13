<template>
    <div id="habilidades" class="text-center">
        <h2 class="m-4">Habilidades</h2>
        <div class="row justify-content-around m-1">
            <div class="col-lg-6">
                <h3 class="m-4">Hard Skills</h3>
                <div class="skills p-4 rounded-3">
                    <ul class="hard-skills p-0">
                        <li>
                            <h4>.Net/C#</h4>
                            <ProgressBar loading="90" type="bg-warning" height="20px" width="400px" />
                            <Certificacoes @click="dotnetModalOpen = !dotnetModalOpen; stopScroll()" />
                            <ModalComponent title="Certificações .Net/C#" :open="dotnetModalOpen"
                                @close="dotnetModalOpen = !dotnetModalOpen; initScroll()" :contents="[
                                {
                                    title: 'C# COMPLETO Programação Orientada a Objetos + Projetos',
                                    time: '2023'
                                },
                                {
                                    title: '.NET 6 WEB API - Do zero ao avançado',
                                    time: '2022'
                                },
                                {
                                    title: 'C# E ORIENTAÇÃO A OBJETOS',
                                    time: '2022'
                                },
                                {
                                    title: 'C#: Usando herança e implementando interfaces',
                                    time: '2022'
                                },
                                {
                                    title: 'C#: EXPLORANDO A LINGUAGEM',
                                    time: '2022'
                                },
                                {
                                    title: 'T.I Academy: C# WebAPIs',
                                    time: '2022'
                                },
                            ]" />
                        </li>
                        <li>
                            <h4>Vue.Js</h4>
                            <ProgressBar loading="70" type="bg-warning" height="20px" width="400px" />
                            <Certificacoes @click="vueModalOpen = !vueModalOpen; stopScroll()" />
                            <ModalComponent title="Certificações Vue.Js" :open="vueModalOpen"
                                @close="vueModalOpen = !vueModalOpen; initScroll()" :contents="[
                                    {
                                        title: 'Curso Vue JS do zero ao avançado na pratica',
                                        time: '2023'
                                    },
                                    {
                                        title: 'T.I Academy: Vue.js',
                                        time: '2022'
                                    },
                            ]" />
                        </li>
                        <li>
                            <h4>Node.js</h4>
                            <ProgressBar loading="60" type="bg-warning" height="20px" width="400px" />
                            <Certificacoes @click="typescriptModalOpen = !typescriptModalOpen; stopScroll()"/>
                            <ModalComponent title="Certificações Typescript" :open="typescriptModalOpen"
                                @close="typescriptModalOpen = !typescriptModalOpen; initScroll()" :contents="[
                                    {
                                        title: 'Desenvolvimento Autodidata',
                                        time: '2024'
                                    }
                            ]" />
                        </li>
                        <li>
                            <h4>Docker/Kubernetes</h4>
                            <ProgressBar loading="60" type="bg-warning" height="20px" width="400px" />
                            <Certificacoes @click="kubernetesModalOpen = !kubernetesModalOpen; stopScroll()"/>
                            <ModalComponent title="Certificações Docker/Kubernetes" :open="kubernetesModalOpen"
                                @close="kubernetesModalOpen = !kubernetesModalOpen; initScroll()" :contents="[
                                {
                                    title: 'Desenvolvimento Autodidata',
                                    time: '2024'
                                },
                                {
                                    title: 'Docker para Desenvolvedores (com Docker Swarm e Kubernetes)',
                                    time: '2024'
                                }
                            ]" />
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <h3 class="m-4">Soft Skills</h3>
                <div class="skills p-4 rounded-3 col-12">
                    <ul class="soft-skills p-0">
                        <li>
                            <h4>Lógica</h4>
                            <ProgressBar loading="90" type="bg-success" height="20px" width="400px" />
                        </li>
                        <li>
                            <h4>Resolução de problemas</h4>
                            <ProgressBar loading="80" type="bg-success" height="20px" width="400px" />
                        </li>
                        <li>
                            <h4>Cooperação</h4>
                            <ProgressBar loading="75" type="bg-success" height="20px" width="400px" />
                        </li>
                        <li>
                            <h4>Criatividade</h4>
                            <ProgressBar loading="85" type="bg-success" height="20px" width="400px" />
                        </li>
                        <li>
                            <h4>Liderança</h4>
                            <ProgressBar loading="70" type="bg-success" height="20px" width="400px" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue"
import Certificacoes from "./Certificacoes.vue";
import ModalComponent from "./Modal.vue";

export default {
    name: "HabilidadesC",
    components: {
        ProgressBar,
        Certificacoes,
        ModalComponent
    },
    data() {
        return {
            dotnetModalOpen: false,
            vueModalOpen: false,
            typescriptModalOpen: false,
            kubernetesModalOpen: false,
            dotnetCertificacoes: [
                {
                    title: 'Certificação 1',
                    time: '2021'
                }, {
                    title: 'Certificação 2',
                    time: '2022'
                }
            ]
        };
    },
    methods: {
        stopScroll() {
            document.querySelector("body").style.overflowY = "hidden";
        },

        initScroll() {
            document.querySelector("body").style.overflowY = "auto";
        }
    }
}
</script>

<style scoped>
#habilidades {
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

span {
    font-size: 16px;
}
</style>