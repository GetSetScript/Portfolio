<template>
    <section id="work" class="section">
        <h2 class="sectionHeader">My Work</h2>
        <div id="workGridContainer">
            <div>
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1153&q=80" alt="">
            </div>
            <div>
                <img src="https://previews.123rf.com/images/pozitiw/pozitiw1211/pozitiw121100152/16516172-tic-tac-toe-doodle-style.jpg" alt="">
            </div>
            <div>
                <img src="https://static.themezy.com/system/resources/previews/000/000/058/non_2x/free-responsive-template-for-schools.jpg" alt="">
            </div>
            <div>
                <img src="https://previews.123rf.com/images/dzein/dzein1502/dzein150200002/36125549-under-construction-sign-in-white-background-3d-mesh-vector-illustration.jpg" alt="">
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
        background-color: var(--color-pink);
        text-align: center;
    }

    #workGridContainer {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        justify-items: center;
        grid-gap: 1rem;
        grid-auto-rows: minmax(240px, 1fr);
    }

    #workGridContainer img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #workGridContainer div:hover {
        
    }

</style>
