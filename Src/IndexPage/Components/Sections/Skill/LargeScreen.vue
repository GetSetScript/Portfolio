<template>
    <section id="skill" class="section">
        <h2 id="skillHeader">What technology do I work with?</h2>
        <div>
            <div id="skillMessageContainer">
                <h3>Javascript</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
            </div>
            <div id="skillTreeContainer">
                <div id="skillTreeMenu">
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

    #skillHeader {
        text-align: center;
    }

    #skillTreeMenu {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: space-between;
    }

</style>


