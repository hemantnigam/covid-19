<template>
  <v-expansion-panels focusable tile>
    <v-expansion-panel v-for="(country,i) in allCountriesData" :key="i">
      <v-expansion-panel-header>
          <div>{{country.country}}</div>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div class="mt-4 mb-4">
          <div class="d-flex justify-space-around">
            <div>Confirmed: {{country.stats.confirmed}}</div>
            <div>Deaths: {{country.stats.deaths}}</div>
          </div>
          <div class="d-flex justify-center">
            <div>Recovered: {{country.stats.deaths}}</div>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "SearchTab",
  data() {
    return {
      allCountriesData: []
    };
  },
  created() {
    this.getAllCountriesData();
  },
  methods: {
    getAllCountriesData: function() {
      fetch("https://corona.lmao.ninja/v2/jhucsse")
        .then(response => response.json())
        .then(data => {
          this.allCountriesData = data;
          console.log(this.allCountriesData);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-expansion-panel-header--active {
  background-color: #113a5d !important;
  color: #dae1e7 !important;
}
</style>