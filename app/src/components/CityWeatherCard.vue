<template>
    <div class="main__item">
        <div class="container main__container">
            <div class="link-wrapper">
                <a href="">
                    <i class="fas fa-angle-left fa-lg"></i>
                </a>
                <a href="">
                    <i class="fas fa-cog fa-lg"></i>
                </a>
            </div>
            <h1 class="item__title" v-if="city">{{city}}</h1>
            <span class="item__temperature" v-if="data.main">{{data.main.temp | convertToCelsius}}&deg;C</span>
            <span class="item__day">{{moment(new Date()).format('dddd')}}</span>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import moment from 'moment';

export default {
  data() {
    return {data: {}}
  },
  props: {
    city: String
  },
  methods: {
    moment
  },
  mounted() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},by&appid=cdc18a852acebe83e9cad67395138f50`).then(
      r => r.json()).then(data => {
        this.data = data;
      }
    )
  },
  filters: {
    convertToCelsius(temp) {
      return Math.floor(temp - 273.15);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main__item {
    width: 25%;
    border-radius: 15px;
    background-color: #404b69;
    height: 600px;
    padding: 25px;
}

.main__container {
    margin: 0 40px;
    display: flex;
    flex-direction: column;
}

.link-wrapper {
    display: flex;
    justify-content: space-between;
}

.item__temperature {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 600;
    color: #f0f0f0;
}

.item__day {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: white;
}

.item__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: white;
}

a {
    color: white;
    opacity: .38;
}
</style>
