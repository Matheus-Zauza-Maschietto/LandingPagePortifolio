<template>
  <div id="habilidades" class="text-center">
    <h2 class="m-4">Habilidades</h2>
    <div class="row justify-content-around m-1">
        <div class="col-lg-6">
            <h3 class="m-4">Hard Skills</h3>
            <div class="skills p-4 rounded-3">
                <ul class="hard-skills p-0">
                    <li>
                        <h4>Python</h4>
                        <ProgressBar loading="75" type="bg-warning" height="20px" width="400px"/>
                        <Certificacoes/>
                    </li>
                    <li>
                        <h4>.Net/C#</h4>
                        <ProgressBar loading="80" type="bg-warning" height="20px" width="400px"/>
                        <Certificacoes/>
                    </li>
                    <li>
                        <h4>Vue.Js</h4>
                        <ProgressBar loading="60" type="bg-warning" height="20px" width="400px"/>
                        <Certificacoes/>
                    </li>
                    <li>
                        <h4>Html - Css - JavaScript</h4>
                        <ProgressBar loading="70" type="bg-warning" height="20px" width="400px"/>
                        <Certificacoes/>
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
                        <ProgressBar loading="90" type="bg-success" height="20px" width="400px"/>
                    </li>
                    <li>
                        <h4>Resolução de problemas</h4>
                        <ProgressBar loading="80" type="bg-success" height="20px" width="400px"/>
                    </li>
                    <li>
                        <h4>Cooperação</h4>
                        <ProgressBar loading="75" type="bg-success" height="20px" width="400px"/>
                    </li>
                    <li>
                        <h4>Criatividade</h4>
                        <ProgressBar loading="85" type="bg-success" height="20px" width="400px"/>
                    </li>
                    <li>
                        <h4>Liderança</h4>
                        <ProgressBar loading="70" type="bg-success" height="20px" width="400px"/>
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

export default {
    name: "HabilidadesC",
    components: { 
        ProgressBar,
        Certificacoes
    }
}
</script>

<style scoped>
#habilidades{
    color: white;
    font-size: 20px;
}

.skills{
    background-color: #3A3A3A;
}

.soft-skills > li{
    padding: 11px;
}

.hard-skills > li{
    padding: 5px;
}

ul{
    border: 3px solid #3A3A3A;
}

h2{
    font-size: 28px;
}

h3{
    font-size: 24px;
}

h4{
    font-size: 18px;
    font-weight: 500;
}

span{
    font-size: 16px;
}
</style>