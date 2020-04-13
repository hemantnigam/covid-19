<template>
  <v-card class="mx-auto total-case-card" tile flat>
    <div class="mb-4">
      <v-card-title>
        Country:
        <span class="ml-2 country-name">{{country.toUpperCase()}}</span>
      </v-card-title>
    </div>
    <div class="title-container">
      <div class="d-flex justify-space-around">
        <v-card-title>
          <h4>Total: {{numberWithCommas(data.cases)}}</h4>
        </v-card-title>
        <v-card-title>
          <h4>Deaths: {{numberWithCommas(data.deaths)}}</h4>
        </v-card-title>
      </div>
      <div>
        <v-card-title class="justify-center">
          <h4>Recovered: {{numberWithCommas(data.recovered)}}</h4>
        </v-card-title>
      </div>
    </div>
    <div class="container">
      <div>
        <v-card-text>Today's Cases: {{numberWithCommas(data.todayCases)}}</v-card-text>
        <v-card-text>Today's Deaths: {{data.todayDeaths?numberWithCommas(data.todayDeaths):data.todayDeaths}}</v-card-text>
        <v-card-text>Tests: {{numberWithCommas(data.tests)}}</v-card-text>
      </div>
      <div>
        <v-img class="globe-img" :src="data.countryInfo&&data.countryInfo.flag"></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
import CommonMixin from "../Mixins/mixins";
export default {
  name: "CurrentCountry",
  data() {
    return {
      country: "India",
      data: {}
    };
  },
  mixins: [CommonMixin],
  created() {
    this.getCountryData();
  },
  methods: {
    numberWithCommas: function(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getCountryData: function() {
      fetch(`https://corona.lmao.ninja/v2/countries/${this.country}`)
        .then(response => response.json())
        .then(data => {
          this.data = data;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  .v-card__title {
    padding: 5px !important;
    font-size: 23px;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // height: 120px;
  .globe-img {
    width: 150px;
  }
  .card-text {
    padding: 0px 16px 5px 16px;
  }
  .v-card__subtitle,
  .v-card__text,
  .v-card__title {
    padding: 0px !important;
    padding-bottom: 10px !important;
  }
}
.total-case-card {
  background-image: linear-gradient(
    to right,
    rgb(142, 158, 171),
    rgb(238, 242, 243)
  );
}
.date {
  font-size: 10px;
  margin-right: 10px;
}
.country-name {
  font-size: 50px !important;
}
</style>