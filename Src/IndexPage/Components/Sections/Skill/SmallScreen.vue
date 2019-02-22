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
            <img id="skillImage" v-bind:src="imageUrl" alt="">
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
                imageUrl: skillSectionData[0].imageUrl,
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
                this.imageUrl = skillSectionData[this.skillIndex].imageUrl;
            }
        }
    }
</script>

<style scoped>

    #skill {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #skillImage {
        height: 100px;
        width: auto;
    }

    #skillNav {
        width: 100%;
        max-width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem 0;
    }

    #skillLabel {
        width: 100%;
    }

    .menuArrow {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: var(--color-fontAwesome-skillSelectionArrow);
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

    #skillMessageContainer > p {
        text-align: center;
    }

    @media (min-width: 56rem) {

        .menuArrow {
            font-size: 3rem;
        }

    }

</style>


