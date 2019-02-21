<template>
  <div id="pageWrapper">
    <header id="header">

      <navigation-bar></navigation-bar>
      
      <div id="headerMessageContainer">
          <h1 id="headerMessage">{ get; set; } Script!</h1>
      </div>
      <div id="headerBottom"></div>
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
                <img src="./../Assets/Images/profile-pic.png" 
                 alt="A profile picutre of a young woman holding a firework" 
                 id="aboutMeImage">
                <span id="aboutMeSecret"></span>
            </div>
        </section>

        <section class="section">
            <h2 class="sectionHeader">I got the skills</h2>
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
            <div>
                <div>75%</div>
                <div></div>
                <h3>Photoshop</h3>
            </div>
            <div>
                <div>70%</div>
                <div></div>
                <h3>Illustrator</h3>
            </div>
            <div>
                <div>90%</div>
                <div></div>
                <h3>HTML</h3>
            </div>
            <div>
                <div>60%</div>
                <div></div>
                <h3>CSS</h3>
            </div>
        </section>

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
  import Navigation from "./../../Global/Components/Navigation.vue"

  export default {
    name: "app",
    components: {
      "navigation-bar": Navigation
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
        width: 100%;
        margin: auto;
    }

    /*  */

    .section {
        padding: 0 3rem;
        margin-bottom: 3rem;
    }

    .sectionHeader {
        font-size: 2rem;
        text-transform: uppercase;
    }

    .sectionText {
        line-height: 1.5;
    }

    /*  */

    #header {
        margin-bottom: 3rem;
    }

    #headerMessageContainer {
        background-image: url("./../Assets/Images/header2.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 95vh;
    }

    #headerMessage {
        font-size: 3rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-7);
        padding-top: 20vh;
    }

    #headerBottom {
        background-image: url("./../Assets/Images/background-thin.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        max-width: 100%;
        height: 5vh;
    }

    /*  */

    #aboutMeMessageContainer {
        /* text-align: center; */
        margin-bottom: 2rem;
    }

    #aboutMeImageContainer {
        position: relative;
    }

    #aboutMeImage {
        width: 100%;
        height: auto;
        transition-duration: .5s;
        transition-property: transform;
        transform: rotate(0deg);
    }

    /* animate about me image rotation */

        #aboutMeImage:hover {
            transition-duration: .5s;
            transition-property: transform;
            transform: rotate(13deg);
        }

    /*  */

    #aboutMeSecret {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        color: var(--color-heart);
        font-size: 1.5rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -500;
    }

    #aboutMeSecret::before {
        content: var(--fontAwesome-heart);
    }







/* .serviceIcon {
    font-family: var(--font-family-fontAwesome);
    font-weight: var(--font-weight-fontAwesome-solid);
    font-size: 5rem;
    font-style: normal;
}

.serviceIcon::before {
    content: var(--fontAwesome-light);
} */


</style>