import Vue from "vue";
import Vuex, { Store } from "vuex";
import global from "@/store/global";

Vue.use(Vuex);

export default new Store({
    modules: {
        global,
    },
});
