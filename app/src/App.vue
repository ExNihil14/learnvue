<template>
    <main id="app">
        <div class="items-wrapper">
            <CityWeatherCard v-for="(city, index) in cities"
                             :key="index"
                             :index="index"
                             :city="city" >
                <h1 slot="title" class="item__title" v-if="city">{{city}}</h1>
            </CityWeatherCard>
        </div>
    </main>
</template>

<script>
  import CityWeatherCard from './components/CityWeatherCard/CityWeatherCard.vue';

  export default {
    computed: {
      cities() {
        return this.$store.state.cities;
      }
    },
    name: 'app',
    components: {
      CityWeatherCard
    },
    watch: {
      cities: {
        handler(newValue) {
          console.log('Prop changed: ', newValue) //eslint-disable-line
        },
        deep: true
      }
    },
    methods: {

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
