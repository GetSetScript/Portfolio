<template>
    <section id="contactMe" class="section">
        <div id="contactMessageContainer">
            <h2>Contact Me</h2>
            <p>
                I am available for freelance. I can't wait for the next exciting project! Could it be yours?
            </p>
        </div>
        <form id="contactForm" name="contactForm" v-on:submit.prevent="onSave()">
            <span class="errorDisplay -errorText" v-if="errors.has('name')">{{ errors.first('name') }}</span>
            <label for="contactFormName"></label>
            <input id="contactFormName"
                   type="text" 
                   placeholder="Your name" 
                   name="name" 
                   v-model="contact.name"
                   v-validate="{ 'required': true, min: 2 }"
                   v-bind:class="{ '-errorBorder': errors.has('name') }" />


            <span class="errorDisplay -errorText" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            <label for="contactFormEmail"></label>
            <input id="contactFormEmail" 
                   type="text" 
                   placeholder="Your email" 
                   name="email"
                   v-model="contact.email"
                   v-validate="{ 'required': true, 'email': true }"
                   v-bind:class="{ '-errorBorder': errors.has('email') }" />


            <span class="errorDisplay -errorText" v-if="errors.has('message')">{{ errors.first('message') }}</span>
            <label for="contactFormMessage"></label>
            <textarea id="contactFormMessage" 
                      placeholder="Your message" 
                      name="message" 
                      cols="30" 
                      rows="10"
                      v-model="contact.message"
                      v-validate="{ 'required': true, min: 125 }"
                      v-bind:class="{ '-errorBorder': errors.has('message') }" />


            <button id="contactFormSend" v-bind:disabled="errors.any()"><i id="sendIcon"></i>Send Message</button>

            <div v-bind:class="{ 'spinner': hasFormSubmissionStarted }" 
                 v-if="hasFormSubmissionStarted"></div>


            <div id="submissionResultContainer" 
                 v-if="isFormSubmitted" 
                 v-bind:class="{ '-successBorder': isFormSubmissionSuccess, '-errorBorder': !isFormSubmissionSuccess }">
                <p id="submissionResultText">{{ formSubmissionResult }}</p>
            </div>
        </form>
    </section>
</template>


<script>
    import axios from "axios";

    export default {
        data() {
            return {
                contact: {
                    name: "",
                    email: "",
                    message: ""
                },
                formSubmissionResult: "",
                isFormSubmitted: false,
                isFormSubmissionSuccess: false,
                hasFormSubmissionStarted: false
            }
        },
        methods: {
            onSave() {
                this.$validator.validateAll()
                    .then((result) => {
                        if (result) {
                            this.formSubmissionResult = "";

                            this.hasFormSubmissionStarted = true;
                            this.isFormSubmitted = false;

                            setTimeout(() => 
                            {
                                axios.post("https://localhost:44396/api/Email/ContactForm", this.contact)
                                    .then(() => {
                                        this.contact.name = "";
                                        this.contact.email = "";
                                        this.contact.message = "";

                                        this.isFormSubmitted = true;
                                        this.isFormSubmissionSuccess = true;
                                        this.hasFormSubmissionStarted = false;
                                        this.formSubmissionResult = "Your Email Was Sent!"
                                    })
                                    .catch(() => {
                                        this.isFormSubmitted = true;
                                        this.hasFormSubmissionStarted = false;
                                        this.formSubmissionResult = "Your email didn't send. Try again later? Or email me directly at \"getsetscript@gmail.com\" .";
                                    });

                            }, 2000);
                        }
                    })
            }
        }
    }
</script>

<style scoped>

    #contactMe {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #contactMessageContainer {
        max-width: 31rem;
        padding: 0 1rem;
    }

    #contactMessageContainer {
        margin-bottom: 1rem;
    }

    #contactForm {
        max-width: 31rem;
        padding: 0 1rem;
    }

    #contactForm input,
    #contactForm textarea,
    #contactForm button {
        margin-bottom: 1rem;
        padding: .5rem;
        width: 100%;
    }

    #contactFormSend {
        outline: none;
        border: none;
        background-color: var(--color-active);
        color: var(--color-text-light-primary);
    }

    #contactFormSend:hover {
        background-color: var(--color-active-dark);
    }

    #sendIcon {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 1rem;
        font-style: normal;
        margin-right: 1rem;
    }

    #sendIcon::before {
        content: var(--fontAwesome-paper-plane);
    }

    /* hidden elements */

    #submissionResultContainer {
        background-color: white;
    }

    #submissionResultText {
        text-align: center;
        margin: auto;
    }

    #contactForm .errorDisplay {
        padding: 0;
    }

    .spinner {
        width: 50px;
        height: 50px;
        margin: auto;
        border-radius: 50%;
        border: 10px solid rgba(0,0,0,.1);
        border-top: 10px solid var(--color-active);
        animation: animate 1.5s infinite linear;
    }
    @keyframes animate {
        0%
        {
            transform: rotate(0deg);
        }
        100%
        {
            transform: rotate(360deg);
        }
    }

    /* error indication */

    .-errorBorder {
        border: 1px solid red;
    }

    .-successBorder {
        border: 1px solid green;
    }

    .-errorText {
        color: red;
    }
    
    @media (min-width: 56rem) {

        #contactMe {
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
        }

        #contactMessageContainer {
            max-width: 22rem;;
        }

    }

</style>
