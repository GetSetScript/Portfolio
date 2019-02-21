<template>
  <div id="pageWrapper">
    <header id="header">
        <navigation-bar></navigation-bar>
        <h1 id="headerMessage">{ get; set; } Script!</h1>
    </header>

    <main id="mainContentWrapper">
        <section id="aboutMe" class="section">
            <div id="aboutMeMessageContainer">
                <h2 class="sectionHeader">I am Terra Vermillion</h2>
                <p class="sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
            </div>
            <div id="aboutMeImageContainer">
                <span id="aboutMeSecret"></span>
                <img src="./../Assets/Images/profile-pic.png" 
                 alt="A profile picutre of a young woman holding a firework at sunset" 
                 id="aboutMeImage">
            </div>
        </section>

        <!-- <skill-section-large></skill-section-large> -->
        <skill-section-small></skill-section-small>

        <section class="section">
            <h2 class="sectionHeader">My Works</h2>
            <nav>
                <ul>
                    <li>All</li>
                    <li>Identity</li>
                    <li>Logo</li>
                    <li>Illustration</li>
                </ul>
            </nav>
            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>

            <div></div>
            <div></div>
            <div></div>
        </section>

        <aside>
            <i></i>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates pariatur reprehenderit accusamus, aspernatur 
                nobis dolorum. Accusantium consequatur quasi 
                temporibus corrupti!
            </p>
            <p>lorem ipsum dolor</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </aside>

        <section class="section">
            <h2 class="sectionHeader">Contact Me</h2>
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
            <form action="">
                <input type="text">
                <input type="text">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button><i></i>Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        
    </footer>
  </div>
</template>

<script>
  import Navigation from "./../../Global/Components/Navigation.vue";
  import SkillSectionLargeScreen from "./LargeScreen/SkillSection.vue";
  import SkillSectionSmallScreen from "./SmallScreen/SkillSection.vue";

  export default {
    name: "app",
    components: {
      "navigation-bar": Navigation,
      "skill-section-large": SkillSectionLargeScreen,
      "skill-section-small": SkillSectionSmallScreen
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped>

    #pageWrapper {

    }

    #mainContentWrapper {

    }

    /*  */

    .section {
        padding: 4rem 2.5rem;
    }

    .sectionHeader {
        text-transform: uppercase;
    }

    .sectionText {
        line-height: 1.5;
        max-width: 31rem;
    }

    /*  */

    #header {
        background-image: url("./../Assets/Images/header2.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    #headerMessage {
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-text-lightest);
        padding-top: 20vh;
    }

    /*  */

    #aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #aboutMe.section {
        padding-bottom: 6rem;
        background-color: var(--color-background-aboutMe);
    }

    #aboutMeMessageContainer {
        text-align: right;
        padding-left: 1rem;
        max-width: 31rem;
        min-width: 19rem;
    }

    #aboutMeImageContainer {
        max-width: 31rem;
        min-width: 19rem;
    }

    #aboutMeImage {
        width: 100%;
        height: auto;
        transition-duration: .5s;
        transition-property: transform;
        transform: rotate(13deg);
        border: .5rem solid var(--color-profile-border);
        border-bottom: 3rem solid var(--color-profile-border);
        box-shadow: 3px 5px 11px 3px rgb(199, 139, 71);
    }

    /* animate about me image rotation */

        #aboutMeImage:hover {
            transition-duration: .5s;
            transition-property: transform;
            transform: rotate(0deg);
        }

    /*  */

    #aboutMeSecret {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: var(--color-heart);
        font-size: 1.5rem;
        margin-left: 2.8rem;
    }

    #aboutMeSecret::before {
        content: var(--fontAwesome-heart);
    }

    /*  */




    @media (min-width: 56rem) {

        #aboutMe {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

        #aboutMeMessageContainer {
            padding: 0 3rem;
        }

        #aboutMeSecret {
            font-size: 2rem;
        }

    }

</style>