<template>
    <section id="skill" class="section">
        <div class="wrapper">
            <h2>What technologies do I work with?</h2>
            <div id="skillContainer">
                <div class="skillSection -frontEnd">
                    <span class="sectionLabel">{{frontEndSection.sectionLabel}}</span>
                    <div v-for="image in frontEndSection.sectionIcons" v-bind:key="image.imageUrl">
                        <img class="skillImage"
                            v-bind:src="image.imageUrl" 
                            v-bind:alt="image.imageDesctipion">
                        <p class="skillImageLabel">{{image.imageLabel}}</p>
                    </div>
                </div>

                <div class="skillSection -backEnd">
                    <span class="sectionLabel">{{backEndSection.sectionLabel}}</span>
                    <div v-for="image in backEndSection.sectionIcons" v-bind:key="image.imageUrl">
                        <img class="skillImage"
                            v-bind:src="image.imageUrl" 
                            v-bind:alt="image.imageDesctipion">
                        <p class="skillImageLabel">{{image.imageLabel}}</p>
                    </div>
                </div>

                <div class="skillSection -devOps">
                    <span class="sectionLabel">{{devOpsSection.sectionLabel}}</span>
                    <div v-for="image in devOpsSection.sectionIcons" v-bind:key="image.imageUrl">
                        <img class="skillImage"
                            v-bind:src="image.imageUrl" 
                            v-bind:alt="image.imageDesctipion">
                        <p class="skillImageLabel">{{image.imageLabel}}</p>
                    </div>
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
                frontEndSection: skillSectionData.frontEndSection,
                backEndSection: skillSectionData.backEndSection,
                devOpsSection: skillSectionData.devOpsSection
            }
        }
    }
</script>

<style scoped>

    #skill {
        text-align: center;
    }

    #skillContainer {
        display: grid;
        grid-template-areas: "front"
                             "back"
                             "devOps";
        justify-items: center;
    }

    .sectionLabel {
        color: var(--color-tertiary);
        padding: 1rem 0 0 0;
        border-top: .05rem solid gainsboro;
    }

    .skillSection {
        margin-bottom: 1rem;
        grid-gap: 1rem;
    }

/*  */

    .skillSection.-frontEnd {
        display: grid;
        grid-template-areas: "label label";
        grid-area: front;
    }

    .skillSection.-frontEnd .sectionLabel {
        grid-area: label;
    }

/*  */

    .skillSection.-backEnd {
        display: grid;
        grid-template-areas: "label label";
        grid-area: back;
    }

    .skillSection.-backEnd .sectionLabel {
        grid-area: label;
    }

/*  */

    .skillSection.-devOps {
        display: grid;
        grid-template-areas: "label label";
        grid-area: devOps;
    }

    .skillSection.-devOps .sectionLabel {
        grid-area: label;
    }

/*  */

    .skillImage {
        height: 125px;
        width: auto;
        border-radius: 100%;
        border: .4rem solid var(--color-secondary);
        background-color: var(--color-white);
        margin: 0 auto;
    }

    .skillImageLabel {
        text-align: center;
        margin-bottom: .5rem;
    } 


    @media (min-width: 44rem) {

        #skillContainer {
            grid-template-areas: "front front"
                                "back devOps";
            grid-gap: 1rem;
        }

        .skillSection {
            margin: 0;
        }

        .skillSection.-frontEnd {
            grid-template-areas: "label label label label";
        }

        .skillSection.-frontEnd .sectionLabel {
            border-top: .05rem solid gainsboro;
        }

        .skillSection.-backEnd {
            grid-template-areas: "label label";
        }

        .skillSection.-devOps {
            grid-template-areas: "label label";
        }

    }


    @media (min-width: 56rem) {

        .wrapper {
            width: 85%;
            margin: 0 auto;
        }

        /*  */

        #skillContainer {
            grid-template-areas: "back front devOps";
            grid-gap: 1rem;
            margin: auto;
            max-width: 900px;
        }

        .sectionLabel,
        .skillSection.-frontEnd .sectionLabel {
            border: none;
        }

        .skillSection.-frontEnd {
            grid-template-areas: "label label";
        }

        .skillSection.-backEnd {
            grid-template-areas: "label";
        }

        .skillSection.-devOps {
            grid-template-areas: "label";
        }

    }

    @media (min-width: 110rem) {

        .wrapper {
            width: 70%;
        }

    }

</style>


