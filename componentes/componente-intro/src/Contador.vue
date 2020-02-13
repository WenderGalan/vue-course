<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="substrair">-</button>
    </div>
</template>

<script>
    export default {
        name: "contador",
        data() {
            return {
                contador: 0
            }
        },
        methods: {
            adicionar() {
                this.contador++
            },
            substrair() {
                this.contador--
            }
        }
    }
</script>

<style>
    .contador span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        outline: none;
        margin-left: 10px;
    }
</style>