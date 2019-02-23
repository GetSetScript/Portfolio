<template>
    <section id="contactMe" class="section">
        <div id="contactMessageContainer">
            <h2>Contact Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eos ad exercitationem dolorem adipisci?
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
        background-color: var(--color-japaneseIndigo2);
    }

    #contactMessageContainer {
        text-align: center;
        max-width: 31rem;
        padding: 0 1rem;
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
        background-color: var(--color-background-contactFormSend);
        color: var(--color-text-contactFormSend);
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
