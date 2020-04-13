<template>
  <v-card class="mx-auto total-case-card" tile flat >
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
        <v-card-text>Today's Deaths: {{numberWithCommas(data.todayDeaths)}}</v-card-text>
        <v-card-text>Affected Countries: {{numberWithCommas(data.affectedCountries)}}</v-card-text>
      </div>
      <div>
        <v-img class="globe-img" src="../../assets/globe.png"></v-img>
      </div>
    </div>
    <div class="d-flex justify-end">
      <div class="date">Updated at: {{formatDate(new Date(data.updated))}}</div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TotalCases",
  props: {
    data: Object
  },
  methods: {
    formatDate: function(d) {
      let formatted = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      return formatted;
    },
    numberWithCommas: function(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
</style>