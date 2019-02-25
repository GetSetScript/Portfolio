<template>
    <section id="contactMe" class="section">
        <div id="contactMessageContainer">
            <h2>Contact Me</h2>
            <p>
                I am available for freelance. I can't wait for the next exciting project! Could it be yours?
            </p>
        </div>
        <form id="contactForm" action="">
            <input id="contactFormName" type="text" placeholder="Your name">
            <input id="contactFormEmail" type="text" placeholder="Your email">
            <textarea id="contactFormMessage" placeholder="Your message" name="" cols="30" rows="10"></textarea>
            <button id="contactFormSend"><i id="sendIcon"></i>Send Message</button>
        </form>
    </section>
</template>


<script>
    export default {
        
    }
</script>

<style scoped>

    #contactMe {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-japaneseIndigo-dark);
        color: var(--color-text-light-primary);
    }

    #contactMessageContainer {
        text-align: center;
        max-width: 31rem;
        padding: 0 1rem;
    }

    #contactMessageContainer p {
        color: var(--color-text-light-secondary);
    }

    #contactForm {
        max-width: 31rem;
        padding: 0 1rem;
    }

    #contactForm * {
        margin-bottom: 1rem;
        padding: .5rem;
        width: 100%;
    }

    #contactFormSend {
        outline: none;
        border: none;
        background-color: var(--color-portlandOrange);
        color: var(--color-text-light-primary);
    }

    #sendIcon {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 1rem;
        font-style: normal;
    }

    #sendIcon::before {
        content: var(--fontAwesome-paper-plane);
    }
    
    @media (min-width: 56rem) {

        #contactMe {
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
        }

        #contactMessageContainer {
            text-align: right;
            max-width: 22rem;;
        }

    }

</style>
