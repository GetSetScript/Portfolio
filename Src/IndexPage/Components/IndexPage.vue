<template>
  <div>
    <header id="header">
        <navigation-bar></navigation-bar>
        <h1 id="headerTitle">{ get; set; } Script!</h1>
    </header>

    <main>
        <section id="aboutMe" class="section">
            <div id="aboutMeMessageContainer">
                <h2>I am Terra Vermillion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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

        <work-section></work-section>

        <contact-section></contact-section>
    </main>

    <footer id="socialMedia">
        <p id="socialMediaText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptates pariatur reprehenderit accusamus, aspernatur 
            nobis dolorum. Accusantium consequatur quasi 
            temporibus corrupti!
        </p>
        <div id="socialMediaIconContainer">
            <a href="https://www.youtube.com/channel/UCX6BSR8FY2ckMTOjfUavjGw" target="_blank"><span id="youtube" class="socialMediaIcon"></span></a>
            <a href="https://www.twitch.tv/getsetscript" target="_blank"><span id="twitch" class="socialMediaIcon"></span></a>
            <a href="https://twitter.com/GetScriptSet" target="_blank"><span id="twitter" class="socialMediaIcon"></span></a>
            <a href="https://github.com/GetSetScript" target="_blank"><span id="github" class="socialMediaIcon"></span></a>
        </div>
    </footer>
  </div>
</template>

<script>
  import Navigation from "./../../Global/Components/Navigation.vue";
  import SkillSectionLargeScreen from "./Sections/Skill/LargeScreen.vue";
  import SkillSectionSmallScreen from "./Sections/Skill/SmallScreen.vue";
  import WorkSection from "./Sections/Work/Work.vue";
  import ContactSection from "./Sections/Contact/Contact.vue"

  export default {
    name: "app",
    components: {
      "navigation-bar": Navigation,
      "skill-section-large": SkillSectionLargeScreen,
      "skill-section-small": SkillSectionSmallScreen,
      "work-section": WorkSection,
      "contact-section": ContactSection
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

    .section {
        padding: 3rem 2.5rem;
    }

    /*  */

    #header {
        background-image: url("./../Assets/Images/hero-image.png");
                          
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    #headerTitle {
        font-size: 5rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-floralWhite);
        padding-top: 20vh;
    }

    /*  */

    #aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 6rem;
        border-top: .5rem solid var(--color-japaneseIndigo-light);
    }

    #aboutMeMessageContainer {
        text-align: right;
        padding-left: 1rem;
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
        border: .5rem solid var(--color-wheat);
        box-shadow: 3px 5px 11px 3px var(--color-shadow-light);
    }

    /* animate about me image rotation */

        #aboutMeImage:hover {
            transition-duration: .5s;
            transition-property: transform;
            transform: rotate(0deg);
        }

    #aboutMeSecret {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: var(--color-portlandOrange);
        font-size: 1.5rem;
        margin-left: 2.8rem;
    }

    #aboutMeSecret::before {
        content: var(--fontAwesome-heart);
    }

    /*  */

    #socialMedia {
        padding: 3rem;
        border-top: .5rem solid var(--color-japaneseIndigo-light);
        background-color: var(--color-wheat);
    }

    #socialMediaText {
        margin: 0 auto 1rem;
        text-align: center;
    }

    #socialMediaIconContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        max-width: 31rem;

        margin: 0 auto 1rem;
        text-align: center;
    }

    .socialMediaIcon {
        font-family: var(--font-family-fontAwesome-brands);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 2rem;
    }

    #youtube::before {
        content: var(--fontAwesome-youtube);
        color: var(--color-fontAwesome-youtube);
    }

    #twitch::before {
        content: var(--fontAwesome-twitch);
        color: var(--color-fontAwesome-twitch);
    }

    #twitter::before {
        content: var(--fontAwesome-twitter);
        color: var(--color-fontAwesome-twitter);
    }

    #github::before {
        content: var(--fontAwesome-github);
        color: var(--color-fontAwesome-github);
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