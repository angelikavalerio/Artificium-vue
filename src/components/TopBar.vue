<template>
    <div class="topbar">
        <div class="topbar__head">
            <slot name="head">
                <div class="topbar__head--left">
                    <span class="topbar__head--left-heading">Orbital Oddysey</span>
                    <span class="topbar__head--left-subheading">Marketing Campaign for a new TV series Launch</span>
                </div> 
                <div class="topbar__head--right"> 
                    <avatar-list :users="users" />
                    <el-button type="primary" class="topbar__head--right-button" :icon="Share">Share</el-button>
                    <img src="../assets/edit.svg">
                </div>
            </slot>
        </div>
        <div class="topbar__tab">
            <slot name="foot">
                <div 
                    class="topbar__tab--item topbar__tab--item-1" 
                    @click="selectTab('artificium')" 
                    :class="pathStripped === 'artificium' ? activeClass : ''">
                    <font-awesome-icon class="topbar__tab--item--icon" :icon="`fa-solid fa-mountain-sun`" />
                    <span class="topbar__tab--item--title">Artificium</span>
                </div>
                <div 
                    class="topbar__tab--item topbar__tab--item-2" 
                    @click="selectTab('chat')" 
                    :class="pathStripped === 'chat' ? activeClass : ''">
                    <ChatRound class="topbar__tab--item--icon" style="width: 1rem; height: 1rem"/> 
                    <span class="topbar__tab--item--title">Chat</span>
                </div>
                <div 
                    class="topbar__tab--item topbar__tab--item-3" 
                    @click="selectTab('library')" 
                    :class="pathStripped === 'library' ? activeClass : ''">
                    <Files class="topbar__tab--item--icon" style="width: 1rem; height: 1rem"/> 
                    <span class="topbar__tab--item--title">Library</span>
                </div>
                <div class="underline"></div>
            </slot>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect, onMounted, defineExpose } from 'vue'
import { useRouter } from 'vue-router'
import { Share, ChatRound, Files } from '@element-plus/icons-vue'
import AvatarList from './AvatarList.vue'

const router = useRouter()
const activeClass = ref('active')

const path = ref(router.currentRoute._value.path)
const pathStripped = ref(path.value.replace('/dashboard/', ''))

onMounted(() => {
    watchEffect(() => {
        if (pathStripped.value === 'artificium') {
            document.querySelector('.underline').style.left = "2rem"
        }   
        if (pathStripped.value === 'chat') {
            document.querySelector('.underline').style.left = "130px"
        }   
        if (pathStripped.value === 'library') {
            document.querySelector('.underline').style.left = "220px"
        }  
        })
    }
)

const users = ref([
    {
        name: "Val",
        avatar: "dp.png",
        status: 1
    },
    {
        name: "Val2",
        avatar: "dp3.png",
        status: 0
    },
    {
        name: "Val3",
        avatar: "dp3.png",
        status: 1
    },
    {
        name: "Val4",
        avatar: "dp.png",
        status: 0
    },
    {
        name: "Val5",
        avatar: "dp.png",
        status: 0
    },
    {
        name: "Val4",
        avatar: "dp.png",
        status: 0
    },
    {
        name: "Val5",
        avatar: "dp.png",
        status: 1
    },
])

const selectTab = (pos) => {
    pathStripped.value = pos
    router.push({
            path: `/dashboard/${pathStripped.value}`
        })
}

defineExpose({
  selectTab
})

</script>

<style lang="scss">
@mixin small-font {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.00938rem;
}

.active >  .topbar__tab--item--icon > path {
    fill: var(--main-green);
}
.topbar { 
    background-color: var(--background);
    z-index: 20;

    &__head {
        display: flex;
        border-bottom: 1px solid var(--background);
        padding: 1.5rem;
        position: relative;
        z-index: 1;
        background-color: var(--surface);
        border-top-right-radius: 1.25rem;
        border-top-left-radius: 1.25rem;

        &--left {
            display: flex;
            flex-direction: column;
            text-align: left;

            &-heading {
                font-size: 1.25rem;
                font-style: normal;
                font-weight: 700;
                line-height: 2rem;
                color: #fff;
            }

            &-subheading {
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.25rem;
                letter-spacing: 0.0938rem;
            }
        }

        &--right {
            display: flex;
            align-items: center;
            margin-left: auto;     

            &-button {
                background-color: transparent;
                border-color: transparent;
                font-size: 0.875rem;
                font-weight: 600;
                line-height: 1.25rem;
                letter-spacing: 0.00938rem;
                color:#686B6E;
            }
            
        }
        
    }
    
    &__tab {
        padding: 2rem;
        display: flex;
        position: relative;
        background-color: var(--surface);
        border-bottom-right-radius: 1.25rem;
        border-bottom-left-radius: 1.25rem;
        &--item {
            display: flex;
            margin-right: 1.5rem;
            align-items: center;

            &--icon {
                margin-right: 10px;
            }

            &--title {
                font-size: 0.875rem;
                font-style: normal;
                font-weight: 600;
                line-height: 1.25rem;
                letter-spacing: 0.00938rem;
            }
        }

        .underline {
            width: 6rem;
            height: 0.25rem;
            border-radius: 0.25rem 0.25rem 0rem 0rem;
            box-shadow: 0px 4px 6px -4px rgba(182, 240, 156, 0.16), 0px 10px 15px -3px rgba(182, 240, 156, 0.16);
            background-color: var(--main-green);
            position: absolute;
            bottom: 0;
            left:2rem;
            transition: .15s ease-in;
        }
    }
}
</style>