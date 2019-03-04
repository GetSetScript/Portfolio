<template>
  <div id="pageWrapper">
    <header id="header">
        <navigation-bar></navigation-bar>
        <h1 id="headerTitle">{ get; set; } Script!</h1>
    </header>

    <main id="mainContent">
        <section id="services" class="section">
            <h2>What can I build?</h2>
            <div id="serviceContainer">
                <div class="service">
                    <div class="serviceIconWrapper">
                        <div id="serviceIconFrontEnd" class="serviceIcon"></div>
                    </div>
                    <h3>Front End</h3>
                    <p class="serviceText">
                        Do you want to bring your website designs to life? 
                        I make custom webpages with responsive layouts, simple 
                        animations and complex functionality. This portfolio Is 
                        fully responsive, check it out by resizing the browser!
                    </p>
                </div>
                <div class="service">
                    <div class="serviceIconWrapper">
                        <div id="serviceIconBackEnd" class="serviceIcon"></div>
                    </div>
                    <h3>BackEnd</h3>
                    <p class="serviceText">
                        Does your website need a server or database? 
                        I build restful Web API's and websites for 
                        any backend functionality. This portfolio 
                        uses a Web API to send emails, 
                        check it out by going to <a href="http://mail.getsetscript.com/api/docs"/>.
                    </p>
                </div>
            </div>
        </section>


        <section id="aboutMe" class="section">
            <div id="aboutMeMessageContainer">
                <h2>I am Terra Vermillion</h2>
                <p>
                    Hello, my name is Terra. I've been programming for a year and a half now, 
                    and I've been doing web development for six months. I don't have a college 
                    education, instead I was mentored by my husband who is a professional software 
                    developer and I learned from all of the amazing resources you can find online these days.
                </p>
            </div>
            <div id="aboutMeImageContainer">
                <span id="aboutMeSecret"></span>
                <img src="./../Assets/Images/profile-pic.jpg" 
                 alt="A profile picutre of a young woman holding a firework at sunset" 
                 id="aboutMeImage">
            </div>
        </section>

        <skill-section-small></skill-section-small>

        <work-section></work-section>

        <section id="socialMedia">
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
        </section>
        
        <contact-section></contact-section>
    </main>

    <footer>
        
    </footer>
  </div>
</template>

<script>
  import Navigation from "./../../Global/Components/Navigation.vue";
  import SkillSectionSmallScreen from "./Sections/Skill/Skill.vue";
  import WorkSection from "./Sections/Work/Work.vue";
  import ContactSection from "./Sections/Contact/Contact.vue"

  export default {
    name: "app",
    components: {
        "navigation-bar": Navigation,
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

    #pageWrapper {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    #header {
        flex-grow: 1;
    }

    #mainContent {
        flex-grow: 1;
    }

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
        color: var(--color-white);
        padding-top: 25vh;
    }

    /*  */

    #services {
        border-top: .6rem solid var(--color-border);
    }

    #serviceContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .service {
        padding: 1rem 0;
    }

    .serviceIconWrapper {
        border: .4rem solid  var(--color-highlight);
        background-color: var(--color-white);
        border-radius: 50%;
        width: 8rem;
        height: 8rem;
        margin: 0 auto 1rem;
    }

    .serviceIcon {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 4rem;
        line-height: 7.5rem;
        text-align: center;
        color: var(--color-white);
    }

    #serviceIconFrontEnd::before {
        content: var(--fontAwesome-webpage);
        color: var(--color-secondary);
    }

    #serviceIconBackEnd::before {
        content: var(--fontAwesome-cogs);
        color: var(--color-secondary);
    }

    .serviceText {
        margin: 0 auto;
    }

    /*  */

    #aboutMe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 6rem;
        background-color: var(--color-secondary);
        color: var(--color-white);
    }

    #aboutMeMessageContainer > p {
        color: var(--color-offWhite);
    }

    #aboutMeMessageContainer > p:last-of-type {
        margin-bottom: 2rem;
    }

    #aboutMeMessageContainer {
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
        border: .5rem solid var(--color-offWhite);
        border-bottom: 2rem solid var(--color-offWhite);
        -webkit-box-shadow: 3px 5px 11px 3px #091825;
        -moz-box-shadow: 3px 5px 11px 3px #091825;
        box-shadow: 3px 5px 11px 3px #091825;
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
        color: red;
        font-size: 1.5rem;
        margin-left: 2.8rem;
    }

    #aboutMeSecret::before {
        content: var(--fontAwesome-heart);
    }

    /*  */

    #socialMedia {
        padding: 3rem;
        background-color: var(--color-secondary);
    }

    #socialMediaText {
        margin: 0 auto 1rem;
    }

    #socialMediaIconContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        max-width: 31rem;

        margin: 0 auto 1rem;
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

        #serviceContainer {
            flex-direction: row;
        }

        .service {
            padding-left: 3rem;
            padding-right: 3rem;
        }

    }

    @media (min-width: 84rem) {

        #headerTitle {
            font-size: 5rem;
        }

    }

</style>