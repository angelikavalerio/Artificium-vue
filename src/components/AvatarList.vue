<template>
    <div class="avatar" v-for="user in users.slice(0, 4)" :key="user.name">
        <img :src="require(`../assets/${user.avatar}`)" :alt="user.name">
        <div class="status" v-if="user.status"></div>
    </div>
    <div class="avatar" v-show="usersCount">
        <div class="gray-circle">
            <span>+{{ usersLength }}</span>
        </div>
        <span class="remaining"></span>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps([
    'users'
])

const usersLength = computed(() => {
    return props.users.length - 4
})

const usersCount = computed(() => {
    return props.users.length > 3 
})

</script>
<style lang="scss" scoped>
@mixin small-font {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.00938rem;
}

.avatar {
    margin-left: -.5rem;
    position: relative;
    
    img {
        width: 2rem;
        height: 2rem;
        position: relative;
        z-index: 1;
    } 

    .status {
        background-color: #4AC97E;
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        box-shadow: 1px 1px 5px #4AC97E;
        top: 0;
        z-index: 15;
        margin-left: 23px;
    }
    
    .gray-circle {
        width: 1.8rem;
        height: 1.8rem;
        background-color: #1A1D21;
        border-radius: 40%;
        display: flex;
        position: relative;
        border: 2.3px solid var(--surface);

        span {
            margin: auto;
            @include small-font;
            font-weight: 600;
            
        }
    }
}      

.avatar:nth-child(1) img {
    z-index: 9;
}

.avatar:nth-child(2) img {
    z-index: 8;
}

.avatar:nth-child(3) img {
    z-index: 7;
}

.avatar:nth-child(4) img {
    z-index: 6;
}
</style>