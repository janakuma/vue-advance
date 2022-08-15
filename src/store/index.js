import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';

export default createStore ({
    state: {
        news: [],
        jobs: [],
        ask:[],
    },
    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedJobs(state) {
            return state.jobs;
        }
    },
    mutations,
    actions,
})


