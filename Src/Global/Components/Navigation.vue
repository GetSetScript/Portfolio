<template>
    <nav class="menuContainer" v-bind:class="menuContainerClasses">
        <div class="menuToggle" v-bind:class="menuToggleClasses"
                                v-on:click="toggleNavMenu">
                <div class="menuLineBeginning"></div>
                <div class="menuLineMiddle"></div>
                <div class="menuLineEnd"></div>
        </div>
        <a href="#header">
            <img class="logo" src="./../Assets/Images/logo.png" alt="The site logo">
        </a>
         
        <ul class="menuNav" v-bind:class="menuNavClasses">
            <a href="#services"><li>Services</li></a>
            <a href="#aboutMe"><li>About Me</li></a>
            <a href="#skill"><li>Technology</li></a>
            <a href="#work"><li>My Work</li></a>
            <a href="#contactMe"><li>Contact Me</li></a>
        </ul>
    </nav>
</template>

<script>
    import { bus } from "./../../IndexPage/Scripts/index.js";

    export default {
        data() {
            return {
                menuContainer: {
                    isAnimated: true,
                    isTransparent: true,
                    visibilityThreshold: 50,
                },
                menuNav: {
                    isAnimated: true,
                    isOpen: false,
                    animationDelay: 500
                },
                layoutChangeBreakPoint: 900
            }
        },
        methods: {
            toggleNavMenu() {
                let isVisibleArea = document.documentElement.scrollTop <= this.menuContainer.visibilityThreshold

                this.menuNav.isOpen = !this.menuNav.isOpen;
                this.menuContainer.isTransparent = false;
                
                if(!this.menuNav.isOpen && isVisibleArea) {
                    setTimeout(() => { this.menuContainer.isTransparent = true; }, this.menuNav.animationDelay);
                }
            },
            onScroll() {
                let isVisibleArea = document.documentElement.scrollTop <= this.menuContainer.visibilityThreshold;

                if(!this.menuNav.isOpen) {
                    this.menuContainer.isTransparent = isVisibleArea;
                }
            },
            onResize() {
                let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                let isVisibleArea = document.documentElement.scrollTop <= this.menuContainer.visibilityThreshold;

                if(width > this.layoutChangeBreakPoint) {
                    this.menuNav.isAnimated = false;
                    this.menuNav.isOpen = false;
                    this.menuContainer.isTransparent = isVisibleArea;
                }
                else {
                    this.menuNav.isAnimated = true;
                }
            },
            closeMenu() {
                let isVisibleArea = document.documentElement.scrollTop <= this.menuContainer.visibilityThreshold;

                this.menuNav.isOpen = false;
                setTimeout(() => { this.menuContainer.isTransparent = isVisibleArea; }, this.menuNav.animationDelay);
            }
        },
        computed: {
            menuContainerClasses() {
                return {
                    "-animated": this.menuContainer.isAnimated,
                    "-transparent": this.menuContainerHasTransparency
                }
            },
            menuContainerHasTransparency() {
                if(!this.menuContainer.isAnimated) {
                    return false;
                }
                else {
                    return this.menuContainer.isTransparent;
                }
            },
            menuNavClasses() {
                return {
                    "-animated": this.menuNav.isAnimated,
                    "-open": this.menuNavHasOpened
                }
            },
            menuToggleClasses() {
                return {
                    "-animated": this.menuNav.isAnimated,
                    "-closed": this.menuNavHasOpened
                }
            },
            menuNavHasOpened() {
                if(!this.menuNav.isAnimated) {
                    return false;
                }
                else {
                    return this.menuNav.isOpen;
                }
            },
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
            window.addEventListener("resize", this.onResize);
            bus.$on("closeNavMenu", () => {
                this.closeMenu();
            })
        },
        destroyed() {
            window.removeEventListener('scroll', this.onScroll);
            window.addEventListener("resize", this.onResize);
        }
    }
</script>

<style scoped>

    .menuContainer {
        background-color: var(--color-border);
        position: fixed;
        z-index: 500;
        width: 100%;
        box-shadow: none;
        -webkit-box-shadow: -1px 10px 22px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: -1px 10px 22px -4px rgba(0,0,0,0.75);
        box-shadow: -1px 10px 22px -4px rgba(0,0,0,0.75);
    }

    /* animate menu bar fade in */

        .menuContainer.-animated {
            transition-duration: .5s;
            transition-property: background-color, box-shadow;
        }

        .menuContainer.-transparent {
            background-color: transparent;
            box-shadow: none;
        }

    /*  */

    .menuToggle {
        position: absolute;
        z-index: 1000;
        top: 0;
        right: 0;
        margin: .5rem 1rem;
        cursor: pointer;
    }

    .menuToggle div {
        background-color: var(--color-offWhite);
        height: calc(26rem / var(--size-hamburgerMenuSize));
        width: calc(180rem / var(--size-hamburgerMenuSize));
        margin: calc(31rem / var(--size-hamburgerMenuSize)) 0;
    }

    /* animate menu toggle */

        .menuToggle.-animated div {
            transition-property: transform, opacity;
            transition-duration: 0.4s;
        }

        .menuToggle.-closed .menuLineBeginning {
            transform: rotate(-45deg) translate(calc(-47rem / var(--size-hamburgerMenuSize)), calc(31rem / var(--size-hamburgerMenuSize)));
        }

        .menuToggle.-closed .menuLineMiddle {
            opacity: 0;
        }

        .menuToggle.-closed .menuLineEnd {
            transform: rotate(45deg) translate(calc(-42rem / var(--size-hamburgerMenuSize)), calc(-42rem / var(--size-hamburgerMenuSize)));
        }

    /*  */

    .logo {
        height: 2rem;
        margin: .5rem 1rem;
        text-align: right;
    }

    .menuNav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        max-height: 0;
        overflow: hidden;
    }

    /* animate menu open */

        .menuNav.-animated {
            transition-duration: 0.8s;
            transition-property: max-height;
        }

        .menuNav.-open {
            max-height: 20rem;
        }

    /*  */

    .menuNav li {
        border-bottom: 1px solid #435263;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .menuNav li:first-child {
        border-top: 1px solid #435263;
    }

    .menuNav li:last-child {
        border-bottom: none;
    }

    .menuNav a:link {
        color: var(--color-text-light-secondary);
        width: 100%;
        display: inline-block;
    }

    .menuNav a:hover {
        background-color: var(--color-primary);
    }

    .menuNav a:visited {
        color: var(--color-text-light-secondary);
    }


    @media (min-width: 56rem) {

        .menuContainer {
            display: flex;
            flex-direction: row;
        }

        .menuToggle {
            display: none;
        }

        .menuNav {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-end;
            
            margin-left: auto;
            width: 60%;
            max-height: 100%;
        }

        .menuNav a:link {
            height: 100%;
        }

        .menuNav li {
            padding: 0;
            position: relative;
            top: 50%;
            transform: translateY(-50%); 
        }

        .menuNav li:last-child {
            border: none;
        }
    }

</style>