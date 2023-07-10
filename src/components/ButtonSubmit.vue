<template>
    <slot :data="data1" :dat="data2">
        I'm from the child element
        </slot>
</template>

<script setup>

const data1 = {
    name: "asddddd",
    age:22
}

const data2 = {
    name: "asdd222ddd",
    age:22
}


</script>
