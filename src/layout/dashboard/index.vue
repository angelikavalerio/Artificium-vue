<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <side-bar></side-bar>
        <top-bar ></top-bar>
        <div class="shadow"></div>
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>
<script setup>
import SideBar from '../../components/SideBar.vue'
import TopBar from '../../components/TopBar.vue'
</script>
<style lang="scss">

.v-enter-from { opacity: 0 }
.v-enter-to   { opacity: 1 }

.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease
}
.v-leave-from { opacity: 1 }
.v-leave-to   { opacity: 0 }

.container {
    padding: 1rem;

    .shadow {
        background: linear-gradient(360deg, rgba(19, 22, 25, 0.00) 0, #131619 100%);
        width: calc(100% - 22rem);
        height: 80px;
        display: block;
        right: 0;
        margin-right: 1rem;
        margin-top: 185px;
        position: fixed;
        
    }

}

</style>
