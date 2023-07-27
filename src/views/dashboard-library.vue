<template>
    <div class="library">
        <div class="library__col">
            <div class="library__col-header">
                <h3 class="library__col-heading">Images</h3>
                <font-awesome-icon class="sidebar__general--list-icon" icon="fa-solid fa-ellipsis-vertical" />
            </div>
            <top-bar class="card" v-for="value in cardValues.slice(0,2)" :key="value.title">
                <template #head>
                    <div>
                        <h4 class="title">{{value.title}}</h4>
                        <p class="description">{{value.description}}</p>
                        <div class="gallery">
                            <div v-for="img in value.imgSrc" :key="img">
                                <img :src="require(`../assets/${img}`)" :alt="img">
                            </div>
                        </div>                      
                    </div>   
                </template>
                <template #foot>
                    <avatar-list
                        :users="users" />
                </template>
            </top-bar>
        </div>
        <div class="line"></div>
        <div class="library__col">
            <div class="library__col-header">
                <h3 class="library__col-heading">Documents</h3>
                <font-awesome-icon class="sidebar__general--list-icon" icon="fa-solid fa-ellipsis-vertical" />
            </div>
            <top-bar class="card" v-for="value in cardValues.slice(2,5)" :key="value.title">
                <template #head>
                    <div>
                        <h4 class="title">{{value.title}}</h4>
                        <p class="description">{{value.description}}</p>                     
                    </div>   
                </template>
                <template #foot>
                    <avatar-list
                        :users="users" />
                </template>
            </top-bar>
        </div>
        <div class="line"></div>
        <div class="library__col">
            <div class="library__col-header">
                <h3 class="library__col-heading">Ideas</h3>
                <font-awesome-icon class="sidebar__general--list-icon" icon="fa-solid fa-ellipsis-vertical" />
            </div>
            <top-bar class="card" v-for="value in cardValues.slice(5,9)" :key="value.title">
                <template #head>
                    <div>
                        <h4 class="title">{{value.title}}</h4>
                        <p class="description">{{value.description}}</p>                     
                    </div>   
                </template>
                <template #foot>
                    <avatar-list
                        :users="users" />
                </template>
            </top-bar>
        </div>
        <div class="line"></div>
        <div class="library__col" >
            <div class="library__col-header">
                <h3 class="library__col-heading">Extras</h3>
                <font-awesome-icon class="sidebar__general--list-icon" icon="fa-solid fa-ellipsis-vertical" />
            </div>
            <top-bar class="card" v-for="value in cardValues.slice(0,2)" :key="value.title">
                <template #head>
                    <div>
                        <h4 class="title">{{value.title}}</h4>
                        <p class="description">{{value.description}}</p>
                        <div class="gallery">
                            <div v-for="img in value.imgSrc" :key="img">
                                <img :src="require(`../assets/${img}`)" :alt="img">
                            </div>
                        </div>                      
                    </div>   
                </template>
                <template #foot>
                    <avatar-list
                        :users="users" />
                </template>
            </top-bar>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from '../components/TopBar.vue'
import AvatarList from '../components/AvatarList.vue'


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
    }
])

const cardValues = ref([
    {
        title: "Captain Drake",
        description: "Natural born leader with years of experience in space exploration.",
        imgSrc: ['cd-1.png', 'cd-2.png', 'cd-3.png']
    },
    {
        title: "Cosmic Voyager",
        description: "Main spacecraft used by the crew in the story. It is a highly advanced vessel designed to withstand the harsh conditions of space and capable of traveling vast distances at incredible speeds.",
        imgSrc: ['cv-1.png', 'cv-2.png', 'cv-3.png']
    },
    {
        title: "Character bios",
        description: "3 documents, 43832 words"
    },
    {
        title: "Plot outline",
        description: "1 document, 18745 words"
    },
    {
        title: "Scene descriptions",
        description: "5 documents, 23992 words"
    },
    {
        title: "Concept art for potential new characters or locations."
    },
    {
        title: "A list of potential plot points or story arcs."
    },
    {
        title: "Ideas for potential spin-offs or other related media."
    },
    {
        title: "Potential partnerships or collaborations with other artists or creators."
    }
])

</script>

<style lang="scss" scoped>
.library {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: -80px;

    &__col {
        width: 100%;
        text-align: left;
        padding-top: 20rem;

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-heading {
            color: #fff;
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 2rem;
            margin-bottom: 1.75rem;
            margin-left: 10px;
        }

        .card {
            margin-bottom: 1rem;

            .gallery {
                display: flex;
                justify-content: center;
                gap: 1rem;

                img {
                    min-width: 100px;
                    width: 100%;
                }
            }

            .title {
                color: #fff;
                font-weight: 600;
            }
        }
    }

    .line {
        border-right: 1px solid #1A1D21;
    }
}
</style>