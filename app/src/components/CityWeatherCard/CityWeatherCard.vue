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
            <div class="input-wrapper">
                <input placeholder="Enter city name (eng):"
                       :value="cityName"
                       @input="(e) => cityName = e.target.value">
                <button class="button" @click="set({cityName, index}); setAction()">Send</button>
            </div>
            <slot name="title"></slot>
            <span class="item__temperature" v-if="weather">{{weather.main.temp | convertToCelsius}}&deg;C</span>
            <span class="item__day">{{moment(new Date()).format('dddd')}}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script src="./CityWeatherCard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@fontSize: 32px;
@buttonfontSize: 18px;

.font-family(@typeFace) {
    font-family: @typeFace, sans-serif;
}

input {
    border-radius: 3px;
    padding: 2px;
    margin-bottom: 5px;
    .font-family('Montserrat');
    font-size: 16px;
}

.button {
    align-self: center;
    border-radius: 5px;
    font-weight: 600;
    font-size: @buttonfontSize;
    .font-family('Montserrat');
    width: 100px;
    height: 40px;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

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
    .font-family('Montserrat');
    font-size: @fontSize;
    font-weight: 600;
    color: #f0f0f0;
}

.item__day {
    .font-family('Montserrat');
    font-weight: 300;
    color: white;
}

.item__title {
    .font-family('Montserrat');
    font-weight: 500;
    color: white;
}

a {
    color: white;
    opacity: .38;
}
</style>
