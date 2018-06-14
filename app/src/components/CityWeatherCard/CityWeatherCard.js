/* eslint-disable */
import { mapMutations, mapGetters } from 'vuex';

import moment from 'moment';

export default {
  data() {
    return {
      cityName: '',
      data: {}
    }
  },
  props: {
    city: String,
    index: Number
  },
  methods: {
    moment,
    ...mapMutations({
      set: 'setCity'  // `this.set()` будет вызывать `this.$store.commit('setCity')`
    }),
    setAction() {
      this.$store.dispatch('getWeather', { cityName: this.cityName, index: this.index });
    },

  },
  mounted() {
    this.$store.dispatch('getWeather', { cityName: this.city, index: this.index });
  },
  filters: {
    convertToCelsius(temp) {
      return Math.floor(temp - 273.15);
    }
  },
  computed: {
    weather2() {
      return this.$store.getters.getWeatherByIndex(this.index);
    },
    ...mapGetters({
      getWeatherByIndex: 'getWeatherByIndex'
    }),
    weather() {
      this.data = this.getWeatherByIndex;
      return this.data[this.index];
    }

  },
   watch: {
     city(newVal) {
       this.cityName = newVal;
       this.data = this.getWeatherByIndex.filter((weather, i) => i === this.index);
     }
  }
}
