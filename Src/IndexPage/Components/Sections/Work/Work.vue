<template>
    <section id="work" class="section">
        <div class="wrapper">
            <h2 id="workHeader">My Work</h2>
            <div id="workGridContainer">
                <div class="gridBox">
                    <img src="./../../../Assets/Images/bookshelf.png" alt="">
                    <div class="details">
                        <h3>The Bookshelf</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolores et minima ut mollitia, veritatis maxime dicta numquam exercitationem cupiditate!</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/mailHub.png" alt="">
                    <div class="details">
                        <h3>The MailHub</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolores et minima ut mollitia, veritatis maxime dicta numquam exercitationem cupiditate!</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/concuer.png" alt="">
                    <div class="details">
                        <h3>Concuer CopyCat</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolores et minima ut mollitia, veritatis maxime dicta numquam exercitationem cupiditate!</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/template.png" alt="">
                    <div class="details">
                        <h3>Project Templates</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum dolores et minima ut mollitia, veritatis maxime dicta numquam exercitationem cupiditate!</p>
                        <a href="#">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        
    }
</script>

<style scoped>

    #work {
        text-align: center;
        padding-bottom: 5rem;
        background-color: var(--color-primary);
        color: var(--color-text-light-primary);
    }

    #workHeader {
        margin-bottom: 2rem;
    }

    #workGridContainer {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
        grid-gap: 2rem;
        grid-auto-rows: minmax(16rem, 1fr);
    }

    .gridBox {
        position: relative;
        overflow: hidden;
        border-radius: 2%;
    }

    .gridBox img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition-duration: 1s;
        transition-property: transform;
    }

    .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 1rem;
        background-color: var(--color-white);
        color: var(--color-text-dark-primary);
        opacity: 0;

        transition-duration: .4s;
        transition-delay: .2s;
        transition-property: opacity;
    }

    .details p {
        /* color: var(--color-text-light-secondary); */
        margin-bottom: 1rem;
    }

    .details a {
        background-color: var(--color-active);
        padding: .5rem;
        color: var(--color-text-light-primary);
        width: 50%;
        margin: 0 auto;
    }

    .details a:hover {
        background-color: var(--color-active-dark);
    }

    /* animate grid hover effects */

        .gridBox:hover img {
            transform: scale(1.2);
        }

        .gridBox:hover .details {
            opacity: .97;
        }

    
    @media (min-width: 56rem) {

        .wrapper {
            width: 85%;
            margin: 0 auto;
        }

    }

    @media (min-width: 110rem) {

        .wrapper {
            width: 70%;
        }

    }

</style>
