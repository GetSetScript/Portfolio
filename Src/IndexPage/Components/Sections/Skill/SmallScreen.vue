<template>
    <section id="skills" class="section">
        <h2 id="skillsHeader" class="sectionHeader">What technologies do I work with?</h2>
        <nav id="skillsNav">
            <span id="left" class="menuArrow" v-on:click="skillCycle(-1)"></span>
            <h3 id="skillsLabel">{{label}}</h3>
            <span id="right" class="menuArrow" v-on:click="skillCycle(1)"></span>
        </nav>
        <div id="skillsMessageContainer">
            <p class="sectionText">{{paragraph1}}</p>
            <p class="sectionText">{{paragraph2}}</p>
            <img id="skillsImage" v-bind:src="imageUrl" alt="">
        </div>
    </section>
</template>

<script>
    import skillsSectionData from "./../../../Scripts/skillSectionData.js";

    export default {
        data() {
            return {
                label: skillsSectionData[0].label,
                paragraph1: skillsSectionData[0].paragraph1,
                paragraph2: skillsSectionData[0].paragraph2,
                imageUrl: skillsSectionData[0].imageUrl,
                skillIndex: 0
            }
        },
        methods: {
            skillCycle(cycleDirection) {
                this.skillIndex += cycleDirection;

                if(this.skillIndex === skillsSectionData.length) {
                    this.skillIndex = 0;
                }
                
                if(this.skillIndex < 0) {
                    this.skillIndex = skillsSectionData.length - 1;
                }

                this.label = skillsSectionData[this.skillIndex].label;
                this.paragraph1 = skillsSectionData[this.skillIndex].paragraph1;
                this.paragraph2 = skillsSectionData[this.skillIndex].paragraph2;
                this.imageUrl = skillsSectionData[this.skillIndex].imageUrl;
            }
        }
    }
</script>

<style scoped>

    #skills {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #skillsImage {
        height: 100px;
        width: auto;
    }

    #skillsNav {
        width: 100%;
        max-width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 0;
    }

    #skillsLabel {
        width: 100%;
    }

    .menuArrow {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: red;
        font-size: 2rem;
        width: 100%;
        cursor: pointer;
    }

    .menuArrow#left::before {
        content: var(--fontAwesome-leftArrow);
    }

    .menuArrow#right::before {
        content: var(--fontAwesome-rightArrow);
    }

    #skillsMessageContainer {
        max-width: 31rem;
    }

    #skillsMessageContainer > p {
        text-align: center;
    }

    @media (min-width: 56rem) {

        .menuArrow {
            font-size: 3rem;
        }

    }

</style>


