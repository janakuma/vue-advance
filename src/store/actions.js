import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api';

export default {
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
    },
    FETCH_JOBS(context) {
        fetchJobsList()
            .then(response => {
                //mutations 접근은 commit
                context.commit('SET_JOBS', response.data);
            })
            .catch(
                error => { console.log(error); }
            );
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then( ({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(
                error => { console.log(error); }
            );
    },
    FETCH_USER({ commit }, itemid) {
        fetchUserInfo(itemid)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(
                (error) => console.log(error)
            )
    },
    FETCH_ITEM() {

    }
}