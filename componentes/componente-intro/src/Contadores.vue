<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c"/>
    </div>
</template>

<script>
    import Contador from "./Contador";
    export default {
        name: "Contadores",
        components: {
            'app-contador': Contador
        }
    }
</script>

<style scoped>

</style>