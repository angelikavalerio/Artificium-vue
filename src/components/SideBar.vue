<template>
    <div class="sidebar">
        <div class="sidebar__header">
            <div class="sidebar__header--grid">
                <div class="sidebar__header--grid-item-1">
                    <img class="sidebar__header--grid-item-1--img" src="../assets/avatar.png" alt="avatar">
                </div>
                <div class="sidebar__header--grid-item-2">
                    <span class="sidebar__header--grid-item-2--text">Intellisys</span>
                </div>
                <div class="sidebar__header--grid-item-3">
                    <span class="sidebar__header--grid-item-3--text">12 members</span>
                </div>
            </div>
            <font-awesome-icon :icon="`fa-solid fa-chevron-down`" />
        </div>
        <div class="sidebar__general">
            <span class="sidebar--heading">General</span>
            <div class="sidebar__general--list" v-for="item in general" :key="item.name">
                <font-awesome-icon class="sidebar__general--list-icon" :icon="`fa-solid ${item.logo}`" />
                <span class="sidebar__general--list-title"> {{ item.name }} </span>
            </div>
        </div>
        <div class="sidebar__general project">
            <span class="sidebar--heading">Projects</span>
            <div class="sidebar__general--list" v-for="item in projects" :key="item.name">
                <img class="sidebar__general--list-icon shapes" :src="require(`../assets/${item.logo}`)">
                <span class="sidebar__general--list-title"> {{ item.name }} </span>
            </div>
            <div class="sidebar__add">
                <CirclePlus style="width:1rem; height:1rem; margin-right:1rem;"/>
                <span class="sidebar__general--list-title add"> Add new project </span>
            </div>
        </div> 
        <div class="sidebar__header profile">
            <div class="sidebar__header--grid">
                <div class="sidebar__header--grid-item-1">
                    <img class="sidebar__header--grid-item-1--img" src="../assets/avatar.png" alt="avatar">
                </div>
                <div class="sidebar__header--grid-item-2">
                    <span class="sidebar__header--grid-item-2--text">Ryan Lee</span>
                </div>
                <div class="sidebar__header--grid-item-3">
                    <span class="sidebar__header--grid-item-3--text">Premium</span>
                </div>
            </div>
            <Setting width="1.5rem" height="1.5rem" />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue"
import { Setting, CirclePlus } from '@element-plus/icons-vue'

const general = ref([
    {
        name: "Search",
        logo: "fa-search"
    },
    {
        name: "Billing",
        logo: "fa-wallet"
    }
])

const projects = ref([
    {
        name: "Orbital Oddysey",
        logo: "square-green.svg"
    },
    {
        name: "Digital Product Launch",
        logo: "triangle.svg"
    },
    {
        name: "Brand Refresh",
        logo: "square-orange.svg"
    },
    {
        name: "Social Media Strategy",
        logo: "octagon.svg"
    }
])
</script>

<style lang="scss">

@mixin small-font {
    font-size: 0.75rem;
    line-height: 1.125rem;
    letter-spacing: 0.00938rem;
}

@mixin flex-item {
    display: flex;
    align-items: center;
}

.sidebar {
    display: flex;
    flex-direction: column;
    background-color: var(--surface);
    max-width: 19.5rem;
    min-width: 19rem;
    border-radius: 1.25rem;
    text-align: left;
    min-height: calc(100vh - 2rem);

    &__header {
        @include flex-item;
        padding: 1.5rem;
        justify-content: space-between;
        
        &--grid {
            display: grid;
            justify-content: center;
            grid-template-areas: 
            'img text1'
            'img text2';

            &-item-1 {
                grid-area: img;
                margin-right: 1rem;
            }

            &-item-2 {
                grid-area: text1;
                span {
                    font-size: 1rem;
                    font-weight: 600;
                    line-height: 1.5rem;
                    letter-spacing: 0.00938rem;
                    color: #fff;
                }
            }

            &-item-3 {
                grid-area: text2;

                span {
                    color: var(--main-green);
                    font-weight: 500;
                    @include small-font;
                }
            }
        }
    }

    &--heading {
        @include small-font;
        font-weight: 600;    
        text-transform: uppercase;
        display: block;
        margin-bottom: 1.5rem;
    }

    &__general {
        padding: 1rem;
        border-top: 1px solid #131619;
        border-bottom: 1px solid #131619;

        &--list {
            @include flex-item;
            padding: 1rem;
            border-radius: 0.5rem;
            cursor: pointer;
            border-top: 2px solid #0D0F10;

            &-icon {
                margin-right: 1rem;
            }

            .shapes {
                margin-right: 0.2rem;
                margin-left: -.8rem;
                margin-bottom: -1.2rem;
            }

            &-title {
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.25rem;
                letter-spacing: 0.01938rem;
                color: #E8E9E9;
            }
        }

        &--list:hover {
            border-top: 2px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
            background: linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%);
        }
    }

    .project {
        border-bottom: none;
    }

    &__projects {
        padding: 1.5rem;
    }

    &__add {
        margin: 1rem;
        @include flex-item;
        cursor: pointer;

        .add {
            color: #686B6E;          
        }
    }

    .profile {
        margin: auto 0.8rem 0.8rem 0.8rem;
        border-radius: 1rem;
        border-top: 2px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
        background: linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%);
    }
}
</style>