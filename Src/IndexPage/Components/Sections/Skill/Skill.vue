<template>
    <section id="skill" class="section">
        <h2>What technologies do I work with?</h2>
            <div id="skillContainer">
                <div class="skillSection" v-for="(group, key) in skillSection" v-bind:key="key">
                    <span class="sectionLabel">{{key}}</span>
                    <div v-for="image in group" v-bind:key="image.url">
                        <img class="skillImage"
                            v-bind:src="image.imageUrl" 
                            v-bind:alt="image.imageDesctipion">
                        <p class="skillImageLabel">{{image.imageLabel}}</p>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
    import skillSectionData from "./../../../Scripts/skillSectionData.js";

    export default {
        data() {
            return {
                skillSection: skillSectionData,
                skillIndex: 0
            }
        }
    }
</script>

<style scoped>

    #skill {
        text-align: center;
    }

    #skillContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .skillSection {
        display: grid;
        grid-template-areas: "label label";
        grid-gap: 1rem;
        padding: 1rem;
        width: 100%;
        max-width: 25rem;
    }

    .sectionLabel {
        text-align: center;
        grid-area: label;
        padding-top: 1rem;
        border-top: 1px solid rgb(214, 213, 213);
        margin: 0;
        color: rgb(214, 213, 213);
    }

    .skillImage {
        height: 125px;
        width: auto;
        border-radius: 100%;
        border: .4rem solid var(--color-highlight);
        background-color: var(--color-white);
        margin: 0 auto;
    }

    .skillImageLabel {
        text-align: center;
        margin-bottom: .5rem;
    }

    @media (min-width: 40rem) {

        .skillSection:first-of-type {
            grid-template-areas: "label label label label";
        }

        .skillSection {
            max-width: 38rem;
        }

    }

    @media (min-width: 56rem) {

        #skill h2 {
            margin-bottom: 2rem;
        }

        #skillContainer {
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
        }

        .skillSection {
            padding: 0 3rem;
            max-width: 24rem;
        }

        .skillSection:nth-of-type(1n + 2) {
            grid-template-areas: "label";
            border-left: 1px solid rgb(224, 224, 224);
            max-width: 20rem;
        }

        .skillSection:first-of-type {
            grid-template-areas: "label label";
        }

        .sectionLabel {
            border: none;
        }
    }

</style>


