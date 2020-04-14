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
        <v-card-text>Today's Cases: {{data.todayCases?numberWithCommas(data.todayCases):data.todayCases}}</v-card-text>
        <v-card-text>Today's Deaths: {{data.todayDeaths?numberWithCommas(data.todayDeaths):data.todayDeaths}}</v-card-text>
        <v-card-text>Tests: {{data.tests?numberWithCommas(data.tests):data.tests}}</v-card-text>
      </div>
      <div>
        <v-img class="globe-img" :src="data.countryInfo&&data.countryInfo.flag"></v-img>
      </div>
    </div>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          @click="dialog=true"
          class="ml-3"
          style="color:white"
          depressed
          tile
          small
          color="#113a5d"
          v-on="on"
        >Stats</v-btn>
      </template>
      <chart-card
        @close="dialog=false"
        :casesData="casesData"
        :deathsData="deathsData"
        :recoveredData="recoveredData"
      ></chart-card>
    </v-dialog>
  </v-card>
</template>

<script>
import CommonMixin from "../Mixins/mixins";
import ChartCard from "../ChartCard";
export default {
  name: "CurrentCountry",
  components: {
    ChartCard
  },
  data() {
    return {
      country: "India",
      data: {},
      dialog: false,
      casesData: [],
      deathsData: [],
      recoveredData: []
    };
  },
  mixins: [CommonMixin],
  created() {
    this.getCountryData();
    this.getChart();
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
    },
    getChart: function() {
      fetch(
        `https://corona.lmao.ninja/v2/historical/${
          this.country
        }?lastdays=${this.getDays()}`
      )
        .then(response => response.json())
        .then(result => {
          this.casesData = Object.entries(result.timeline.cases);
          this.deathsData = Object.entries(result.timeline.deaths);
          this.recoveredData = Object.entries(result.timeline.recovered);
        });
    },
    getDays: function() {
      let oneDay = 24 * 60 * 60 * 1000;
      let diffDays = Math.round(
        Math.abs(new Date(2020, 1, 1) - new Date()) / oneDay
      );
      return diffDays;
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