/* eslint-disable */
import moment from 'moment';

export default {
  data() {
    return {
      data: {},
      cityName: ''
    }
  },
  props: {
    city: String,
    index: Number
  },
  methods: {
    moment,
    sendCity() {
      this.$emit('send-city', this.cityName, this.index);
    },
    getWeather() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},by&appid=cdc18a852acebe83e9cad67395138f50`).then(
        r => r.json()).then(data => {
          this.data = data;
        }
      )
    }
  },
  mounted() {
    this.getWeather()
  },
  watch: {
    city(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getWeather()
      }
    }
  },
  filters: {
    convertToCelsius(temp) {
      return Math.floor(temp - 273.15);
    }
  }
}
