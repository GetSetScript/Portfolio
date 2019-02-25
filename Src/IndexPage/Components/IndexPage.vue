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
                <p>
                    Hello, my name is Terra. I've been programming for two years now, and I've been doing web development for eight months. 
                    I don't have a traditional education, just a highschool diploma. Instead I learned to program from my 
                    husband (a professional) and all of the amazing resources you can find online these days. 
                </p>
                <p>
                    I spend most of my time coding and watching tutorials, but otherwise I'll read, watch TV or go hiking. Programming 
                    is special to me, it's not only a career but also something that I do just for fun. My life's goal is 
                    to program something that changes the world, or at least a tiny part of it.
                </p>
            </div>
            <div id="aboutMeImageContainer">
                <span id="aboutMeSecret"></span>
                <img src="./../Assets/Images/profile-pic.jpg" 
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
        <p id="socialMediaText">
            Want to know more? Come hang out with me on social media!
            You can find my code on GitHub, reach me on Twitter, or come hang out with me on Twitch.
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
        padding: 3rem 2rem;
    }

    /*  */

    #header {
        background-image: url("./../Assets/Images/hero-image.jpg");
                          
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
    }

    #headerTitle {
        font-size: 3rem;
        line-height: 1.5;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-floralWhite);
        padding-top: 25vh;
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

        #headerTitle {
            font-size: 4rem;
        }

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

    @media (min-width: 84rem) {

        #headerTitle {
            font-size: 5rem;
        }

    }

</style>