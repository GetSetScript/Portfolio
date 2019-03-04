import Vue from "vue";
import IndexPage from "../Components/IndexPage";
import "../../Global/Styles/global";

export const bus = new Vue();

new Vue({
    render: h => h(IndexPage)
}).$mount("#indexPage")