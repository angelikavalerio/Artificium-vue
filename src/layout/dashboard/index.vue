<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->

<template>
    <div class="container">
        <div class="container__left">
            <side-bar class="side-bar"></side-bar>
            
        </div>
        <div class="container__right">
            <top-bar ref="topBarRef" class="top-bar"></top-bar>
            <div class="shadow"></div>
            <router-view v-slot="{ Component }">
                <transition>
                    <component :is="Component" class="main"/>
                </transition>
            </router-view>
        </div>
        
    </div>
</template>
<script setup>
import SideBar from '../../components/SideBar.vue'
import TopBar from '../../components/TopBar.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const topBarRef = ref(null)

const route = useRoute()

watch(route, (to, from) => {
    const path = to.path.replace('/dashboard/', '')
    if (path === 'artificium') {
        document.querySelector('.underline').style.left = "1.5rem"     
    }   
    if (path === 'chat') {
        document.querySelector('.underline').style.left = "123px"
    }   
    if (path === 'library') {
        document.querySelector('.underline').style.left = "215px"
    }  
    topBarRef.value.selectTab(path)
})


</script>
<style lang="scss">

.v-enter-from { opacity: 0 }
.v-enter-to   { opacity: 1 }

.v-enter-active {
  transition: opacity .5s ease
}
.v-leave-from { opacity: 1 }
.v-leave-to   { opacity: 0 }

.container {
    padding: 1rem;
    position: relative;
    display: flex;

    // .main {
    //     margin-left: auto;
    //     width: calc(100% - 20rem);
        
    // }
    &__left {
        margin-right: 1rem;
    }
   
    &__right {
        width: 100%;
        // height: 70vh;
        
        // overflow: scroll;
    }
   
    .shadow {
        background: linear-gradient(360deg, rgba(19, 22, 25, 0.00) 0, #131619 100%);
        width: calc(100% - 22rem);
        height: 80px;
        display: block;
        right: 0;
        margin-right: 1rem;
        // margin-top: 185px;
        // position: absolute;
        z-index: 1;
    }

}

</style>
