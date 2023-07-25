<template>
    <div class="topbar">
        <div class="topbar__head">
            <div class="topbar__head--left">
                <span class="topbar__head--left-heading">Orbital Oddysey</span>
                <span class="topbar__head--left-subheading">Marketing Campaign for a new TV series Launch</span>
            </div> 
            <div class="topbar__head--right">
                <div class="topbar__head--right-avatar" v-for="user in users.slice(0, 4)" :key="user.name">
                    <img :src="require(`../assets/${user.avatar}`)" :alt="user.name">
                    <div class="status" v-if="user.status"></div>
                </div>
                <div class="topbar__head--right-avatar" v-show="usersCount">
                    <div class="gray-circle">
                        <span>+{{ users.length - 4}}</span>
                    </div>
                    <span class="remaining"></span>
                </div>
                <el-button type="primary" class="topbar__head--right-button" :icon="Share">Share</el-button>
                <img src="../assets/edit.svg">
            </div>
        </div>
        <div class="topbar__tab">
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
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted, defineExpose } from 'vue'
import { useRouter } from 'vue-router'
import { Share, ChatRound, Files } from '@element-plus/icons-vue'

const router = useRouter()
const activeClass = ref('active')

const path = ref(router.currentRoute._value.path)
const pathStripped = ref(path.value.replace('/dashboard/', ''))

onMounted(() => {
    watchEffect(() => {
        if (pathStripped.value === 'artificium') {
            document.querySelector('.underline').style.left = "1.5rem"
        }   
        if (pathStripped.value === 'chat') {
            document.querySelector('.underline').style.left = "123px"
        }   
        if (pathStripped.value === 'library') {
            document.querySelector('.underline').style.left = "215px"
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

const usersCount = computed(() => {
    return users.value.length > 3 
})


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
    // padding: 1rem;
    // padding-left: 0;
    // border-radius: 1.25rem;
    // display: block;
    // margin-left: auto;
    width: calc(100% - 22rem);
    // // position: absolute;
    // right: 0;
    // top: 0;
    // z-index: 2;
    // width: 100%;
    position: fixed;

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
            gap: 0.5rem;
            margin-left: auto;     

            &-avatar {
                margin-left: -1rem;
                img {
                    width: 2rem;
                    height: 2rem;
                    position: relative;
                } 

                .status {
                    background-color: #4AC97E;
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    box-shadow: 1px 1px 5px #4AC97E;
                    top: 35px;
                    z-index: 29;
                    margin-left: 23px;
                }


                .gray-circle {
                    width: 1.8rem;
                    height: 1.8rem;
                    background-color: #1A1D21;
                    border-radius: 40%;
                    display: flex;
                    position: relative;
                    z-index: -1;
                    border: 2.3px solid var(--surface);

                    span {
                        margin: auto;
                        @include small-font;
                        font-weight: 600;
                       
                    }
                }
            }      
            
            &-avatar:nth-child(1) img {
                z-index: 9;
            }

            &-avatar:nth-child(2) img {
                z-index: 8;
            }

            &-avatar:nth-child(3) img {
                z-index: 7;
            }
            
            &-avatar:nth-child(4) img {
                z-index: 6;
            }

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
        padding: 0 1.5rem;
        display: flex;
        position: relative;
        background-color: var(--surface);
        border-bottom-right-radius: 1.25rem;
        border-bottom-left-radius: 1.25rem;
        &--item {
            display: flex;
            padding: 2rem 0;
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
            left:1.5rem;
            transition: .15s ease-in;
        }
    }
}
</style>