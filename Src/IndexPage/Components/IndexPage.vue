<template>
    <div>
        <navigation-bar></navigation-bar>
        <div id="page" v-on:click="closeNavMenu">
            <header id="header">
                <div class="wrapper">
                    <div id="headerContainer">
                        <h2 id="headerTitleTop">Welcome To</h2>
                        <h1 id="headerTitleMiddle">{ get; set; } Script!</h1>
                        <h2 id="headerTitleBottom">A Full Stack Web Developer Portfolio</h2>
                    </div>
                </div>
            </header>

            <main id="mainContent">
                <section id="services" class="section">
                    <div class="wrapper">
                        <h2>What can I build?</h2>
                        <div id="serviceContainer">
                            <div class="service">
                                <div id="serviceIconFrontEnd" class="serviceIcon"></div>
                                <h3>Front End</h3>
                                <p class="serviceText">
                                    Do you want to bring your website designs to life? 
                                    I make custom webpages with responsive layouts, simple 
                                    animations and complex functionality. This portfolio Is 
                                    fully responsive, check it out by resizing the browser!
                                </p>
                            </div>
                            <div class="service">
                                <div id="serviceIconBackEnd" class="serviceIcon"></div>
                                <h3>Back End</h3>
                                <p class="serviceText">
                                    Does your website need a server or database? 
                                    I build RESTful Web API's and websites for 
                                    any backend functionality. This portfolio 
                                    uses a Web API to send emails and you
                                    check it out by following the <a href="http://mail.getsetscript.com/api/docs" target="_blank">link</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="about" class="section">
                    <div class="wrapper">
                        <div id="aboutMe">
                            <div id="aboutMeMessageContainer">
                                <h2>Hello and Welcome!</h2>
                                <p>
                                    My name is Terra Vermillion and I am a self taught web developer with a year and a half of experience. 
                                    I have completed over 30 large online tutorials, totaling thousands of hours of learning and 
                                    that number continues to grow everyday. From the very beginning of learning to code I have 
                                    received daily mentoring from a professional software developer.
                                    My goal for the future is world domination through web development.
                                </p>
                            </div>
                            <div id="aboutMeImageContainer">
                                <span id="aboutMeSecret"></span>
                                <img src="./../Assets/Images/profile-pic.jpg" 
                                    alt="A profile picutre of a young woman holding a firework at sunset" 
                                    id="aboutMeImage">
                            </div>
                        </div>
                    </div>
                </section>

                <skill-section-small></skill-section-small>

                <work-section></work-section>

                <section id="social" class="section">
                    <div class="wrapper">
                        <div id="socialMedia">
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
                        </div>
                    </div>
                </section>
                
                <contact-section></contact-section>
            </main>

            <footer>
                
            </footer>
        </div>
    </div>
</template>

<script>
  import Navigation from "./../../Global/Components/Navigation.vue";
  import SkillSectionSmallScreen from "./Sections/Skill/Skill.vue";
  import WorkSection from "./Sections/Work/Work.vue";
  import ContactSection from "./Sections/Contact/Contact.vue";
  import { bus } from "./../Scripts/index.js";

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
            layoutChangeBreakPoint: 900
        }
    },
    methods: {
        closeNavMenu() {
            let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if(width <= this.layoutChangeBreakPoint) {
                bus.$emit('closeNavMenu');
            }
        }
    }
  }
</script>

<style scoped>

    #page {
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

    #headerContainer {
        padding-top:15vh;
    }

    #headerTitleMiddle {
        font-size: 2.6rem;
        line-height: 1.5;
        color: var(--color-text-light-primary);
        margin-bottom: 1.5rem;
    }

    #headerTitleTop,
    #headerTitleBottom {
        color: var(--color-text-light-secondary);
        font-size: .9rem;
        margin-bottom: 1.5rem;
        font-family: var(--font-family-secondary);
        word-spacing: 1px;
        letter-spacing: 1px;
    }

    /*  */

    #serviceContainer {
        display: flex;
        flex-direction: column;
    }

    .serviceIcon {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 4rem;
        padding: 2rem 0 1rem 0;
        text-align: center;
        color: var(--color-white);
    }

    #serviceIconFrontEnd::before {
        content: var(--fontAwesome-webpage);
        color: var(--color-tertiary);
    }

    #serviceIconBackEnd::before {
        content: var(--fontAwesome-cogs);
        color: var(--color-tertiary);
    }

    #services h2 {
        margin: 0 auto;
    }

    .serviceText a:link {
        color: blue;
        text-decoration: underline;
    }

    .serviceText a:visited {
        color: purple;
        text-decoration: underline;
    }

    /*  */

    #about {
        background-color: var(--color-primary);
        padding-bottom: 4rem;
    }

    #aboutMe {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color-text-light-primary);
    }
  
    #aboutMeMessageContainer > p {
        color: var(--color-text-light-secondary);
        margin-bottom: 2rem;
    }

    #aboutMeImageContainer {
        max-width: 31rem;
        min-width: 19rem;
        padding: 0 1rem 0 1rem;
    }

    #aboutMeImage {
        width: 100%;
        height: auto;
        border: .5rem solid var(--color-offWhite);
        border-bottom: 3rem solid var(--color-offWhite);
        -webkit-box-shadow: 3px 5px 11px 3px #091825;
        -moz-box-shadow: 3px 5px 11px 3px #091825;
        box-shadow: 3px 5px 11px 3px #091825;

        transition-duration: .5s;
        transition-property: transform;
        transform: rotate(13deg);
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
        color: var(--color-active);
        font-size: 1.5rem;
        margin-left: 2.8rem;
    }

    #aboutMeSecret::before {
        content: var(--fontAwesome-heart);
    }

    /*  */

    #social {
        background-color: var(--color-secondary);
    }

    #socialMediaText {
        margin-bottom: 1rem;
        text-align: center;
    }

    #socialMediaIconContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        max-width: 31rem;
        margin: 0 auto;
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

    @media (min-width: 38rem) {

        #headerContainer {
            padding-top: 20vh;
        }

        #headerTitleMiddle {
            font-size: 3rem;
        }

        #headerTitleTop,
        #headerTitleBottom {
            font-size: 1rem;
        }

        /*  */

        #about {
            padding-bottom: 5rem;
        }

        #aboutMeSecret {
            font-size: 2rem;
        }

    }


    @media (min-width: 56rem) {

        .section {
            padding: 3rem 0;
        }

        .wrapper {
            width: 85%;
            margin: 0 auto;
        }

        /*  */

        #headerContainer {
            padding-top: 22vh;
        }

        #headerTitleMiddle {
            font-size: 3.5rem;
        }

        #headerTitleTop,
        #headerTitleBottom {
            font-size: 1rem;
        }

        /*  */

        #serviceContainer {
            flex-direction: row;
            justify-content: space-evenly;
        } 

        .service:first-of-type {
            padding-right: 2rem;
        } 

        .service:last-of-type {
            padding-left: 2rem;
        }

        /*  */

        #aboutMe {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

        #aboutMeMessageContainer {
            padding: 0 2rem 0 0;
        }

        #aboutMeMessageContainer h2 {
            text-align: left;
        }

        #aboutMeSecret {
            font-size: 2rem;
        }

        /*  */

    }

    @media (min-width: 110rem) {

        .wrapper {
            width: 70%;
        }

        /*  */

        #headerContainer {
            padding-top: 23vh;
        }

        #headerTitleMiddle {
            font-size: 4.2rem;
        }

        #headerTitleTop,
        #headerTitleBottom {
            font-size: 1.2rem;
        }

    }

</style>