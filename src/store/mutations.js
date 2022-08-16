export default {
    //첫 번째 인자로 state를 받는다.
    //response.data가 news로 넘어왔음
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_USER(state, user) {
        state.user = user;
    }
}