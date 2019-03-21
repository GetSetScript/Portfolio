<template>
    <section id="work" class="section">
        <div class="wrapper">
            <h2 id="workHeader">My Work</h2>
            <div id="workGridContainer">
                <div class="gridBox">
                    <img src="./../../../Assets/Images/bookshelf.jpg" alt="">
                    <div class="details">
                        <h3>The Bookshelf</h3>
                        <p>A web application for keeping track of your favorite books. Built with ASP.NET Core, Razor Views and custom CSS.</p>
                        <a target="_blank" href="http://bookshelf.getsetscript.com">View Project</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/mailhub.jpg" alt="">
                    <div class="details">
                        <h3>The MailHub</h3>
                        <p>A web API built with ASP.NET Core for sending mail to getsetscript.com</p>
                        <a target="_blank" href="http://mail.getsetscript.com/api/docs">View Docs</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/template.jpg" alt="">
                    <div class="details">
                        <h3>Project Templates</h3>
                        <p>ASP.NET Core project templates that use Webpack and Vue.</p>
                        <a target="_blank" href="https://github.com/GetSetScript">View Code</a>
                    </div>
                </div>
                <div class="gridBox">
                    <img src="./../../../Assets/Images/coming-soon.jpg" alt="">
                    <div class="details">
                        <h3>Coming Soon</h3>
                        <p>More projects are on the way!</p>
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
        text-align: center;
        margin-bottom: 1rem;
    }

    .details p > a {
        text-decoration: underline;
    }

    .details > a {
        background-color: var(--color-active);
        padding: .5rem;
        color: var(--color-text-light-primary);
        width: 50%;
        margin: 0 auto;
    }

    .details > a:hover {
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
