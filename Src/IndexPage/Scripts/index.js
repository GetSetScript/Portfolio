import Vue from "vue";
import IndexPage from "../Components/IndexPage";
import "../../Global/Styles/global";

new Vue({
    render: h => h(IndexPage)
}).$mount("#indexPage")