<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->

<template>
    <div class="container">
        <div class="container__left">
            <side-bar class="sidebar"></side-bar>
            
        </div>
        <div class="container__right">
            <top-bar ref="topBarRef" class="topbar"></top-bar>
            <!-- <div class="shadow"></div> -->
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
        document.querySelector('.underline').style.left = "2rem"     
    }   
    if (path === 'chat') {
        document.querySelector('.underline').style.left = "130px"
    }   
    if (path === 'library') {
        document.querySelector('.underline').style.left = "220px"
    }  
    topBarRef.value.selectTab(path)
})


</script>
<style lang="scss" scoped>

.v-enter-from { opacity: 0 }
.v-enter-to   { opacity: 1 }

.v-enter-active {
  transition: opacity .5s ease
}
.v-leave-from { opacity: 1 }
.v-leave-to   { opacity: 0 }

.container {
    padding: 0 1rem 1rem  1rem;
    position: relative;
    display: flex;

    &__left {
        margin-right: 1rem;
        width: 19.5rem;

        .sidebar {
            position: fixed;
            margin-top: 1rem;
        }    
    }
   
    &__right {
        width: calc(100vw  - 19.5rem);
        
        .topbar {
            width: 100%;
            position: fixed;
            width: calc(100vw  - 22rem);
            padding-top: 1rem;
            box-shadow: 1px 52px 15px rgba(19, 22, 25, 0.644);
        }
    }

}

</style>
