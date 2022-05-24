import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import initRouter from './router';

Vue.use(Vuetify);
const vuetify =  new Vuetify({
    icons: {
        iconfont: 'fa',
        values: {
            cancel: 'fas fa-ban',
            menu: 'fas fa-e llipsis-v'
        }
    }
})

class Entry extends Vue {
    constructor () {
        super({
            vuetify,
            router: initRouter(),
            render: h => h(`router-view`)
        });
    }
}

new Entry().$mount("#app")
