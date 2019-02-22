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

        <work-section></work-section>

        <aside id="socialMedia">
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
            
        </aside>

        <section id="contactMe" class="section">
            <div id="contactMessageContainer">
                <h2 id="contactHeader" class="sectionHeader">Contact Me</h2>
                <h3 class="contactText sectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </h3>
                <p class="contactText sectionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
            </div>
            <form id="contactForm" action="">
                <input id="contactFormName" type="text">
                <input id="contactFormEmail" type="text">
                <textarea id="contactFormMessage" name="" cols="30" rows="10"></textarea>
                <button id="contactFormSend"><i></i>Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        
    </footer>
  </div>
</template>

<script>
  import Navigation from "./../../Global/Components/Navigation.vue";
  import SkillSectionLargeScreen from "./Sections/Skill/LargeScreen.vue";
  import SkillSectionSmallScreen from "./Sections/Skill/SmallScreen.vue";
  import WorkSection from "./Sections/Work/WorkSection.vue";

  export default {
    name: "app",
    components: {
      "navigation-bar": Navigation,
      "skill-section-large": SkillSectionLargeScreen,
      "skill-section-small": SkillSectionSmallScreen,
      "work-section": WorkSection
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
        padding: 2rem 2.5rem;
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

    #socialMedia {
        background-color: var(--color-blue);
        padding: 2rem;
    }

    #socialMediaText {
        max-width: 31rem;
        margin: 0 auto 1rem;
        text-align: center;
    }

    #socialMediaIconContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    #socialMediaIconContainer a:link {
        text-decoration: none;
    }

    .socialMediaIcon {
        font-family: var(--font-family-fontAwesome-brands);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 2rem;
    }

    #youtube::before {
        content: var(--fontAwesome-youtube);
        color: red;
    }

    #twitch::before {
        content: var(--fontAwesome-twitch);
        color: purple;
    }

    #twitter::before {
        content: var(--fontAwesome-twitter);
        color: blue;
    }

    #github::before {
        content: var(--fontAwesome-github);
        color: black;
    }

    /*  */

    #contact {

    }

    #contactMessageContainer {

    }

    #contactHeader {

    }

    #contactForm {

    }

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