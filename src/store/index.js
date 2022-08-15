import { createStore } from 'vuex';
import { fetchNewsList } from '../api';

export default createStore ({
    state: {
        news: [],
    },
    mutations: {
        //첫 번째 인자로 state를 받는다.
        //response.data가 news로 넘어왔음
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => {
                    console.log(response.data);
                    context.commit('SET_NEWS', response.data);
                    //mutaion에 접근하기 위해서는 actions에서 commit을 이용한다.
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
})


