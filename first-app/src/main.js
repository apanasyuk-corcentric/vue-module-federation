import Vue from 'vue'
import Vuetify from 'vuetify'
import initRouter from './router';

Vue.use(Vuetify);

class Entry extends Vue {
    constructor (props) {
        super({
            vuetify: new Vuetify(),
            router: initRouter(props.baseRoute),
            render: h => h(`router-view`, { props })
        });
    }
}


export default function mount(el, props) {
    new Entry(props).$mount(el)
}
if (process.env.NODE_ENV === "development") {
    import ('vuetify/dist/vuetify.css')
    mount("#app", { text : "btn text"});
}

