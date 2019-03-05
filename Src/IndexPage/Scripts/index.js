import Vue from "vue";
import VeeValidate from "vee-validate";
import IndexPage from "../Components/IndexPage";
import "../../Global/Styles/global";

export const bus = new Vue();

Vue.use(VeeValidate, {
    events: 'input|blur'
});

new Vue({
    render: h => h(IndexPage)
}).$mount("#indexPage")