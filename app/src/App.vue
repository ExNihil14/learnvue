<template>
    <main id="app">
        <div class="items-wrapper">
            <CityWeatherCard v-for="city in cities"
                         v-bind:key="city"
                         :city="city" />
        </div>
    </main>
</template>

<script>
  import CityWeatherCard from './components/CityWeatherCard.vue'

  export default {
    data() {
      return {cities: ['Malaryta', 'Minsk', 'Homel']}
    },
    name: 'app',
    components: {
      CityWeatherCard
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .items-wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        height: 100%;
    }
</style>
