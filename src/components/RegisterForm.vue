<!-- eslint-disable vue/valid-v-model -->

<script setup>
import { reactive, vModelText, ref } from "vue";


const form = reactive({
  fname: null,
  lname: null,
  password: null
})

const checked = ref(false)

vModelText.beforeUpdate = (el, binding) => {
  if (el.value && binding.modifiers.capitalize) {
    let arr = el.value.split(' ')
    let arr2 = []
    arr.forEach(element => {
      arr2.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    el.value = arr2.join(' ')
  }
}
</script>

<template>
  <div class="form">
    <h3 class="register__heading">Connect with your team and bring your creative ideas to life.</h3>
    <form class="form__container">
      <div class="top">
        <div class="left">
          <el-form-item>
            <span class="label">First Name</span>
            <input class="input" type="text" v-model.capitalize="form.fname" />
          </el-form-item>
          <el-form-item>
            <span class="label">Last Name</span>
            <input class="input" v-model.capitalize="form.lname" />
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item>
            <span class="label">Password</span>
            <input class="input password" v-model="form.password" type="password" />
          </el-form-item>
          <el-form-item>
            <span class="label">Repeat Password</span>
            <input class="input password" v-model="form.fname" type="password" />
          </el-form-item>
        </div>
      </div>
      <el-form-item class="terms__container">
        <el-checkbox v-model="checked" label="I agree with" size="large" />
        <span class="terms">Terms and conditions</span>
      </el-form-item>
      <el-form-item>
        <router-link to="/dashboard/artificium" class="button">Create free account</router-link>
      </el-form-item>
    </form>
  </div> 
</template>

<style lang="scss" scoped>

.form {
  margin: 10%;

  .register__heading {
    text-align: left;
    font-size: 2.25rem;
    color: #fff;
    margin-bottom: 4rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 3rem;

    .left, .right {
      width: 48%;
      margin: 0;
      padding: 0;

      .input {
        height: 3rem;
        border: 1px solid rgba(170, 170, 170, 0.144);
        width: 100%;
        background-color: #1A1D21;
        box-shadow: 0 0 0 1px #9b9c9eb4;
        border-radius: 4px;
        padding: 0 12px;
      }

      .input:focus {
        box-shadow: 0 0 2px 4px #4b565f;
        border: 1px solid var(--main-green);
        outline: #0C1132;
      }

      .label {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        letter-spacing: 0.00938rem;
      }
    }
  }

  .terms {
    margin-left: 5px;
    background: linear-gradient(var(--main-blue), var(--main-green));
    font-weight: 900;
    background-clip: text;
    color: transparent;

    &__container {
      margin-bottom: 3rem;
    }
  }

  .button {
    width: 100%;
    border-radius: 0.75rem;
    font-weight: 600;
    line-height: 1.5rem;
    letter-spacing: 0.00938rem;
    background-color: var(--main-green);
    color: #0C1132;
    padding: 0.8rem;
    text-decoration: none;
    margin-bottom: 40px;
  }
}

.el-form-item:last-child {
  margin-bottom: 0;
}

@media only screen and (min-width: 2500px) {
    .form {
        margin: 0 auto;
        width: 1000px;
    }
}

@media only screen and (max-width: 1300px) {
  .left, .right {
    width: 100% !important;
  }
  .form {
    margin: 0;
  }
}

</style>
