<template>
    <section id="skill" class="section">
        <h2>What technologies do I work with?</h2>
        <nav id="skillNav">
            <span id="left" class="menuArrow" v-on:click="skillCycle(-1)"></span>
            <h3 id="skillLabel">{{label}}</h3>
            <span id="right" class="menuArrow" v-on:click="skillCycle(1)"></span>
        </nav>
        <div id="skillMessageContainer">
            <p>{{paragraph1}}</p>
            <p>{{paragraph2}}</p>
            <div id="skillGrid">
                <img class="skillImage" 
                    v-for="image in images"
                    v-bind:key="image.imageUrl" 
                    v-bind:src="image.imageUrl" 
                    v-bind:alt="image.imageDesctipion">
            </div>
        </div>
    </section>
</template>

<script>
    import skillSectionData from "./../../../Scripts/skillSectionData.js";

    export default {
        data() {
            return {
                label: skillSectionData[0].label,
                paragraph1: skillSectionData[0].paragraph1,
                paragraph2: skillSectionData[0].paragraph2,
                images: skillSectionData[0].images,
                skillIndex: 0
            }
        },
        methods: {
            skillCycle(cycleDirection) {
                this.skillIndex += cycleDirection;

                if(this.skillIndex === skillSectionData.length) {
                    this.skillIndex = 0;
                }
                
                if(this.skillIndex < 0) {
                    this.skillIndex = skillSectionData.length - 1;
                }

                this.label = skillSectionData[this.skillIndex].label;
                this.paragraph1 = skillSectionData[this.skillIndex].paragraph1;
                this.paragraph2 = skillSectionData[this.skillIndex].paragraph2;
                this.images = skillSectionData[this.skillIndex].images;
            }
        }
    }
</script>

<style scoped>

    #skill {
        text-align: center;
        background-color: var(--color-japaneseIndigo-dark);
        color: var(--color-text-light-primary);
    }

    #skillMessageContainer {
        width: 100%;
    }

    #skillMessageContainer > p {
        margin: 0 auto 2rem;
        color: var(--color-text-light-secondary);
    }

    #skillGrid {
        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 200px));
        grid-gap: 1rem;
        justify-content: center;
    }

    .skillImage {
        height: 125px;
        width: auto;
        border-radius: 100%;
        border: .4rem solid var(--color-wheat);
        background-color: var(--color-floralWhite);
        margin: 0 auto;
    }

    #skillNav {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem 0;
    }

    #skillLabel {
        margin: 0;
    }

    .menuArrow {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: var(--color-portlandOrange);
        font-size: 2rem;
        cursor: pointer;
    }

    .menuArrow#left::before {
        content: var(--fontAwesome-leftArrow);
    }

    .menuArrow#right::before {
        content: var(--fontAwesome-rightArrow);
    }

    @media (min-width: 56rem) {

        .menuArrow {
            font-size: 3rem;
        }

        #skillGrid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
        }

    }

</style>


