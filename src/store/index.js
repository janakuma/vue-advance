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
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions,
})


