import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'

import { Form, Field, CellGroup, Tag, Button, Image as VanImage, Card, Tab, Tabs, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem} from 'vant';

createApp(App)
    .use(Swipe).use(SwipeItem).use(Lazyload, {
        loading: require('./assets/images/default.jpeg')
    }).use(Badge).use(Sidebar).use(SidebarItem)
	.use(Collapse).use(CollapseItem)
	.use(Tab).use(Tabs).use(Form).use(Field).use(CellGroup)
	.use(Card).use(VanImage).use(Tag).use(Button)
    .use(store).use(router).mount('#app')
