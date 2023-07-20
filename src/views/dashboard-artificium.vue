<template> 
    <div class="art">
        <h1 class="art__heading">Innovation Starter Pack</h1>
        <span class="art__subheading">Kickstart your innovation process with our comprehensive selection of predefined prompts.</span>

        <div class="art__tab">   
                <ul class="art__tab--col" v-for="choice in choices" :key="choice.name">
                    <li class="circle" :style="`box-shadow: 0px 0px 64px 0px ${choice.color}`">
                        <img class="art__tab--col-img" :src="require(`../assets/${choice.icon}`)" alt="icon">
                        <div ></div>
                        <div class="shadoww"></div>
                    </li>
                    <li class="art__tab--col-item" v-for="child in choice.children" :key="child" >
                        {{child}} 
                        <img src="../assets/arrow-right.svg" alt="arrow">
                    </li>
                </ul>
                
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const choices = ref([
    {
        name: 'Creative Assets',
        icon: 'comment-circle.svg',
        color: 'rgba(182, 240, 156, 0.16)',
        children: ['UI wireframe', 'Brochure design', 'Social media', 'Brand guidelines']
    }, 
    {
        name: 'Developer Tools',
        icon: 'code.svg',
        color: 'rgba(130, 219, 247, 0.16)',
        children: ['API Integration', 'Test automation', 'DB optimization', 'Code review']
    }, 
    {
        name: 'Content Creation',
        icon: 'pencil.svg',
        color: 'rgba(189, 154, 248, 0.16)',
        children: ['Product description', 'E-mail copy', 'Whitepaper', 'Press release']
    }, 
    {
        name: 'Idea Generation',
        icon: 'bulb.svg',
        color: 'rgba(255, 209, 71, 0.16)',
        children: ['Hashtag ideas', 'Brainstorming', 'Trend analysis', 'Social media posts']
    }, 
])

</script>


<style lang="scss" scoped>

ul {
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    padding-inline-start: 0 !important;
}

.art {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    width: calc(100% - 20rem);
    overflow-y: scroll;
    padding-top: 310px;

    &__heading {
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2.25rem;
        color: #FFFFFF;
    }

    &__subheading {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5rem;
        letter-spacing: 0.00938rem;
    }

    &__tab {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        margin-top: 4rem;
        max-width: calc(100% - 15rem);
        gap: 4rem;
        flex-wrap: wrap;

        &--col {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            width: 12.5rem;

            &-item {
                border-top: 2px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
                background: linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%);
                padding: 1rem;
                border-radius: 0.75rem;
                color: #CDCECF;
                font-size: 0.875rem;
                font-weight: 600;
                line-height: 1.25rem;
                letter-spacing: 0.00938rem;
                display: flex;
                justify-content: space-between;
            }

            .circle {
                position: relative;
                width: 3rem;
                height: 3rem;
                border-top: 2px solid var(--glass-stroke, rgba(255, 255, 255, 0.08));
                background: linear-gradient(145deg, rgba(215, 237, 237, 0.16) 0%, rgba(204, 235, 235, 0.00) 100%);
                box-shadow: 0px 0px 64px 0px rgba(182, 240, 156, 0.16);
                border-radius: 50%;
                margin: 0 auto;
                margin-bottom: 1rem;
            }

            &-img {
                margin-bottom: -2.3rem;
            }
        }
        
    }
}

.art::-webkit-scrollbar {
    display: none;
}

</style>