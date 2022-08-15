import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

const routes = [
    {
        path: '/',
        name: '',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'News',
        component: NewsView,
    },
    {
        path: '/ask',
        name: 'Ask',
        component: AskView,
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView,
    },
    {
        path: '/item',
        name: 'Item',
        component: ItemView,
    },
    {
        path: '/user',
        name: 'User',
        component: UserView,
    },
]

export default routes;