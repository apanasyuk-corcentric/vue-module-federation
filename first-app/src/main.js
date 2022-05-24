import Vue from 'vue'
import Vuetify from 'vuetify'
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
    constructor (props) {
        super({
            vuetify,
            router: initRouter(props.baseRoute),
            render: h => h(`router-view`, { props })
        });
    }
}


export default function mount(el, props) {
    new Entry(props).$mount(el)
}
if (process.env.NODE_ENV === "development") {
    import ('vuetify/dist/vuetify.min.css')
    mount("#app", { text : "btn text"});
}

