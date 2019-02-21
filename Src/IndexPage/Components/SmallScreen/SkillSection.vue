<template>
    <section id="skills" class="section">
        <h2 id="skillsHeader" class="sectionHeader">What technologies do I work with?</h2>
        <nav>
            <span id="left" class="menuArrow"></span>
            <h3 id="skillsLabel">{{skillsLabel}}</h3>
            <span id="right" class="menuArrow"></span>
        </nav>
        <div id="skillsMessageContainer">
            <p class="sectionText">{{skillParagraph1}}</p>
            <p class="sectionText">{{skillParagraph2}}</p>
            <img id="skillsImage" v-bind:src="skillsImageUrl" alt="">
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                skillsLabel: "Javascript",
                skillParagraph1: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Eos ad exercitationem dolorem adipisci? 
                        Eaque corrupti repudiandae unde maxime ipsum architecto.`,
                skillParagraph2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Officiis fugit praesentium minima dolore et nobis 
                        repudiandae a sunt cupiditate commodi excepturi ex 
                        delectus, nulla quia veritatis omnis 
                        voluptatum saepe quidem.`,
                skillsImageUrl: "https://user-images.githubusercontent.com/14293805/36941746-0d65c6fa-1f63-11e8-8afa-ab2d28de86db.png"
            }
        },
        method: {
            
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


