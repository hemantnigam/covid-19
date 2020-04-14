<template>
  <v-card class="mx-auto total-case-card" tile flat>
    <v-card-title>
      <h3>Total: {{numberWithCommas(data.cases)}}</h3>
    </v-card-title>
    <!-- <div class="title-container">
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
    </div> -->
    <div class="container ml-1">
      <div>
        <v-card-text>Deaths: {{numberWithCommas(data.deaths)}}</v-card-text>
        <v-card-text>Recovered: {{numberWithCommas(data.recovered)}}</v-card-text>
        <v-card-text>Today's Cases: {{numberWithCommas(data.todayCases)}}</v-card-text>
        <v-card-text>Today's Deaths: {{numberWithCommas(data.todayDeaths)}}</v-card-text>
        <v-card-text>Affected Countries: {{numberWithCommas(data.affectedCountries)}}</v-card-text>
      </div>
      <div>
        <v-img class="globe-img" src="../../assets/globe.png"></v-img>
      </div>
    </div>

    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          @click="dialog=true"
          class="ml-4"
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

    <div class="d-flex justify-end">
      <div class="date">Updated at: {{formatDate(new Date(data.updated))}}</div>
    </div>
  </v-card>
</template>

<script>
import ChartCard from "../ChartCard";

export default {
  name: "TotalCases",
  components: {
    ChartCard
  },
  props: {
    data: Object
  },
  data() {
    return {
      dialog: false,
      casesData: [],
      deathsData: [],
      recoveredData: []
    };
  },
  mounted() {
    this.getChart();
  },
  methods: {
    formatDate: function(d) {
      let formatted = `${d.getDate()}-${d.getMonth() +
        1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      return formatted;
    },
    numberWithCommas: function(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getChart: function() {
      fetch("https://corona.lmao.ninja/v2/historical/all")
        .then(response => response.json())
        .then(result => {
          this.casesData = Object.entries(result.cases);
          this.deathsData = Object.entries(result.deaths);
          this.recoveredData = Object.entries(result.recovered);
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
.stats-button {
  color: white !important;
}
</style>