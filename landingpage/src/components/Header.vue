<template>
    <nav class="navbar navbar-expand-md bg-body-tertiary sticky-top" id="navbar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#sobre">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#habilidades">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projetos">Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderC"
}
</script>

<style scoped>
#navbar{
    background: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18);
}

li > a {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    transition: color 0.4s ease-in-out;
}
</style>