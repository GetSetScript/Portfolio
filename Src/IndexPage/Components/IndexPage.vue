<template>
  <div class="pageWrapper">
    <header id="headerContainer">

      <navigation-bar></navigation-bar>
      
      <div class="headerMessageContainer">
          <p class="headerMessage">Welcome to</p>
          <h1 class="headerMessage middle">Graphista</h1>
          <p class="headerMessage">The best choice for your online personal portfolio</p>
      </div>
      <div class="headerBottom"></div>
    </header>

    <main>
        <section id="serviceContainer">
            <h2 class="serviceHeader">My Services</h2>
            <div class="serviceCategory">
                <div>
                    <i class="serviceIcon"></i>
                </div>
                <h3 class="serviceTitle">Brand Identity</h3>
                <p class="serviceText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </p>
            </div>
            <div class="serviceCategory">
                <div>
                    <i class="serviceIcon"></i>
                </div>
                <h3 class="serviceTitle">Web Design</h3>
                <p class="serviceText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </p>
            </div>
            <div class="serviceCategory">
                <div>
                    <i class="serviceIcon"></i>
                </div>
                <h3 class="serviceTitle">Rocket Science</h3>
                <p class="serviceText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Eos ad exercitationem dolorem adipisci? Eaque corrupti 
                    repudiandae unde maxime ipsum architecto.
                </p>
            </div>
        </section>

        <section>
            <div>
                <img src="" alt="">
                <h2>I am Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officiis fugit praesentium minima dolore et nobis 
                    repudiandae a sunt cupiditate commodi excepturi ex 
                    delectus, nulla quia veritatis omnis 
                    voluptatum saepe quidem.
                </p>
            </div>
        </section>

        <section>
            <h2>I got the skills</h2>
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

        <section>
            <h2>My Works</h2>
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

        <section>
            <h2>Contact Me</h2>
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
    }
  }
</script>

<style scoped>

.pageWrapper {
    background-color: pink;
}

/*  */

#headerContainer {
    margin-bottom: 3rem;
}

.headerMessageContainer {
    background-image: url("./../Assets/Images/header.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 95vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.headerMessage {
    font-size: 1.5rem;
    text-align: center;
}

.headerMessage.middle {
    font-size: 2.5rem;
    text-transform: uppercase;
}

.headerBottom {
    background-image: url("./../Assets/Images/background-thin.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    height: 5vh;
}

/*  */

#serviceContainer {
    margin-bottom: 3rem;
    text-align: center;
}

.serviceHeader {
    font-size: 2rem;
    text-transform: uppercase;
}

.serviceCategory {

}

.serviceIcon {
    font-family: var(--font-family-fontAwesome);
    font-weight: var(--font-weight-fontAwesome-solid);
    font-size: 5rem;
    font-style: normal;
}

.serviceIcon::before {
    content: var(--fontAwesome-light);
}

.serviceTitle {

}

.serviceText {

}

</style>