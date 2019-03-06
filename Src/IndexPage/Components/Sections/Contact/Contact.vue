<template>
    <section id="contactMe" class="section">
        <div id="contactMessageContainer">
            <h2>Contact Me</h2>
            <p>
                I am available for freelance. I can't wait for the next exciting project! Could it be yours?
            </p>
        </div>
        <form id="contactForm" name="contactForm" v-on:submit.prevent="onSave()">
            <span class="-errorText" v-show="errors.has('name')">{{ errors.first('name') }}</span>
            <input id="contactFormName"
                   type="text" 
                   placeholder="Your name" 
                   name="name" 
                   v-model="contact.name"
                   v-validate="{ 'required': true, min: 2 }"
                   v-bind:class="{ '-errorBorder': errors.has('name') }" />


            <span class="-errorText" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            <input id="contactFormEmail" 
                   type="text" 
                   placeholder="Your email" 
                   name="email"
                   v-model="contact.email"
                   v-validate="{ 'required': true, 'email': true }"
                   v-bind:class="{ '-errorBorder': errors.has('email') }" />


            <span class="-errorText" v-show="errors.has('message')">{{ errors.first('message') }}</span>
            <textarea id="contactFormMessage" 
                      placeholder="Your message" 
                      name="message" 
                      cols="30" 
                      rows="10"
                      v-model="contact.message"
                      v-validate="{ 'required': true, min: 125 }"
                      v-bind:class="{ '-errorBorder': errors.has('message') }" />


            <button id="contactFormSubmit" v-bind:disabled="errors.any()" type="submit">
                <i id="contactFormSubmitIcon"></i>
                Send Message
            </button>

            <div id="spinnerContainer" v-show="hasFormSubmissionStarted">
                <div v-bind:class="{ 'spinner': hasFormSubmissionStarted }"></div>
            </div>

            <div id="submissionResultContainer" 
                 v-show="isFormSubmitted"
                 v-bind:class="{ '-successMessage': isFormSubmissionSuccess, '-errorMessage': !isFormSubmissionSuccess }">
                <h3 id="submissionResultHeader">{{ formSubmissionResult.header }}</h3>
                <p id="submissionResultText">{{ formSubmissionResult.message }}</p>
                <span id="submissionResultClose" v-on:click="closeFormSubmissonMessage">OK</span>
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
                formSubmissionResult: {
                    message: "",
                    header: ""
                },
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
                            this.formSubmissionResult.message = "";
                            this.formSubmissionResult.header = "";
                            this.hasFormSubmissionStarted = true;
                            this.isFormSubmitted = false;

                            axios.post("https://mail.getsetscript.com/api/Email/ContactForm", this.contact)
                                .then(() => {
                                    this.contact.name = "";
                                    this.contact.email = "";
                                    this.contact.message = "";

                                    this.isFormSubmitted = true;
                                    this.isFormSubmissionSuccess = true;
                                    this.hasFormSubmissionStarted = false;
                                    this.formSubmissionResult.message = "Your Email Was Sent!";
                                    this.formSubmissionResult.header = "success";
                                })
                                .catch(() => {
                                    this.isFormSubmitted = true;
                                    this.hasFormSubmissionStarted = false;
                                    this.formSubmissionResult.message = "Your email didn't send. Try again later? Or email me directly at \"getsetscript@gmail.com\" .";
                                    this.formSubmissionResult.header = "error"
                                });
                        }
                    })
            },
            closeFormSubmissonMessage() {
                this.isFormSubmitted = false;
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
        margin-bottom: 1rem;
    }

    #contactForm {
        max-width: 31rem;
        padding: 0 1rem;
        position: relative;
    }

    #contactForm input,
    #contactForm textarea {
        margin-bottom: 1rem;
        padding: .5rem;
        width: 100%;
    }

    #contactFormSubmit {
        outline: none;
        border: none;
        background-color: var(--color-active);
        color: var(--color-text-light-primary);
        padding: .5rem;
        width: 100%;
    }

    #contactFormSubmitIcon:hover {
        background-color: var(--color-active-dark);
    }

    #contactFormSubmitIcon {
        font-family: var(--font-family-fontAwesome);
        font-weight: var(--font-weight-fontAwesome-solid);
        font-size: 1rem;
        font-style: normal;
        margin-right: 1rem;
    }

    #contactFormSubmitIcon::before {
        content: var(--fontAwesome-paper-plane);
    }

    /* hidden elements */

    #spinnerContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-primary);
    }

    .spinner {
        width: 7rem;
        height: 7rem;
        margin: auto;
        border-radius: 50%;
        border: .8rem solid rgba(255, 255, 255, 0.1);
        border-top: .8rem solid var(--color-active);
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

    #submissionResultContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    #submissionResultHeader {
        letter-spacing: .15rem;
        text-transform: uppercase;
    }

    #submissionResultText {
        color: var(--color-text-dark-primary);
        text-align: center;
        margin: 0 auto 2rem auto;
        padding: 0 1rem;
    }

    #submissionResultClose {
        cursor: pointer;
        text-align: center;
        background-color: var(--color-white);
        width: 8rem;
        padding: .3rem;
        margin: 0 auto;
    }

    #submissionResultClose:hover {
        background-color: var(--color-offWhite);
    }

    /* error indication classes */

    .-errorBorder {
        border: 1px solid red;
    }

    .-errorText {
        color: red;
    }

    .-errorMessage {
        background-color: #ff675a;
    }

    .-successMessage {
        background-color: #95df9d;
    }

    
    @media (min-width: 56rem) {

        #contactMe {
            flex-direction: row;
            justify-content: center;
            align-items: baseline;
        }

        #contactMessageContainer {
            max-width: 22rem;
        }

    }

</style>
