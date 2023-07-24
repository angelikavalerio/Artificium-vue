<template>
    <button :class="`mic`">Record</button>
</template>

<script setup>
import { onMounted, ref } from "vue"
// const transcript = ref('')
const isRecording = ref(false)


const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()
console.log(sr)

onMounted(() => {
    sr.continuous = true
    sr.interimResults = true

    sr.onstart = () => {
        console.log('SR Started')
        isRecording.value = true
    }   

    sr.onstop = () => {
        console.log('SR Stopped')
        isRecording.value = false
    }

    sr.onstart()

    setTimeout(() => {
        sr.onstop()
    }, 1000)
})

</script>

<style lang="scss" scoped>
.mic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>