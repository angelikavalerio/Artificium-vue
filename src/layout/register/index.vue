<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-container>
        <el-main class="main full-height">
            <div class="main__header">
                <img class="logo" src="../../assets/logo.svg">
                <a class="login-btn">Log In</a>
            </div>
            <transition name="el-fade-in" :duration="550">
                <div v-show="show">
                    <Register/>
                </div>   
            </transition>
            <div class="main__footer">
                <span>Artificium.app © 2023</span>
                <span>Privacy Policy</span>
            </div>
        </el-main>
        <el-aside width="35%" class="aside">
        </el-aside>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import Register from '../../components/RegisterForm.vue'
const show = ref(true)

// const showTransition = () => {
//     show.value = !show.value
// }

</script>

<style scoped>
.main {
  background-color: var(--black);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.aside {
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  background-image: url('../../assets/bubble.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 10%;

}

.main__header, .main__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: stretch;
}

.login-btn {
    background: linear-gradient(var(--main-blue), var(--main-green));
    font-weight: 900;
    background-clip: text;
    color: transparent;
}

@media only screen and (min-width: 2500px), (max-width: 1025px)  {
    .aside {
        display: none;
    }
}

@media only screen and (max-width: 1025px) {
    .main {
        padding: 20px;
    }

}


</style>
