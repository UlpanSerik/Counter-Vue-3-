const App = {
    data() {
        return{
            counter: 5,
            title: "Счетчик",
        }
    }
}

Vue.createApp(App).mount('#app')