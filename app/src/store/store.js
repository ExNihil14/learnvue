import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cities: ['Malaryta', 'Minsk', 'Homel'],
    data: []
  },
  mutations: {
    setCity(state, payload) {
      state.cities = state.cities.map((elem, i) => i === payload.index ? payload.cityName : elem);
    },
    setWeather(state, payload) {
      state.data[payload.index] = payload.weather;
    },
    error(state, error) {
      console.error(error); //eslint-disable-line
    }
  },
  actions: {
    async getWeather ({ commit }, payload) {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${payload.cityName},by&appid=cdc18a852acebe83e9cad67395138f50`);
        const weather = await response.json();
        commit('setWeather', { weather, index: payload.index });
      } catch (error) {
        commit('error', error.message);
      }
    }
  },
  getters: {
    getWeatherByIndex: state => state.data
  }
});

export default store;
