import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import initRouter from './router';
import App from "@/components/App";

Vue.use(Vuetify);
const vuetify = new Vuetify()

class Entry extends Vue {
    constructor() {
        super({
            vuetify,
            router: initRouter(),
            render: h => h(App)
        });
    }
}
new Entry().$mount("#app")
