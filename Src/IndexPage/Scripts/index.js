import Vue from "vue";
import IndexPage from "../Components/IndexPage";
import "../../Global/Styles/global";
import "../Styles/index";

new Vue({
    render: h => h(IndexPage)
}).$mount("#indexPage")