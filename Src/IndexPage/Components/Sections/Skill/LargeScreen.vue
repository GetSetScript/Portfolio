<template>
    <section id="skills" class="section">
        <h2 id="skillsHeader" class="sectionHeader">What technology do I work with?</h2>
        <div>
            <div id="skillsMessageContainer">
                <h3>Javascript</h3>
                <p class="sectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </p>
                <p class="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
            </div>
            <div id="skillsTreeContainer">
                <div id="skillsTreeMenu">
                    <h3>Front End</h3>
                    <h3>Back End</h3>
                    <h3>Design</h3>
                </div>
                <front-end-skill-tree></front-end-skill-tree>
            </div>
        </div>
    </section>
</template>

<script>
    import FrontEndSkill from "./SkillTreeFrontEnd.vue";

    export default {
        components: {
            "front-end-skill-tree": FrontEndSkill
        }
    }
</script>

<style scoped>

    #skillsHeader {
        text-align: center;
    }

    #skillsTreeMenu {
        display: flex;
        flex-direction: row;
        text-align: center;
        font-size: .8rem;
        justify-content: space-between;
    }

</style>


