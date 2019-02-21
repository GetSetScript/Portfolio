<template>
    <section id="skills" class="section">
        <h2 id="skillsHeader" class="sectionHeader">What technologies do I work with?</h2>
        <nav>
            <span id="left" class="menuArrow"></span>
            <h3 id="skillsLabel">{{Label}}</h3>
            <span id="right" class="menuArrow"></span>
        </nav>
        <div id="skillsMessageContainer">
            <p class="sectionText">{{Paragraph1}}</p>
            <p class="sectionText">{{Paragraph2}}</p>
            <img id="skillsImage" v-bind:src="ImageUrl" alt="">
        </div>
    </section>
</template>

<script>
    import skillsSectionData from "./../../Scripts/skillSectionData.js";

    export default {
        data() {
            return {
                Label: skillsSectionData[0].label,
                Paragraph1: skillsSectionData[0].paragraph1,
                Paragraph2: skillsSectionData[0].paragraph2,
                ImageUrl: skillsSectionData[0].imageUrl
            }
        },
        method: {
            skillCycle() {

            }
        }
    }
</script>

<style scoped>

    #skills {
        text-align: center;
    }

    #skillsImage {
        max-width: 100px;
        height: auto;
    }

    

</style>


