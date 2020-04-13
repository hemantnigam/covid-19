<template>
  <div>
    <div v-if="isDataAvailable">
      <v-expansion-panels focusable tile>
        <v-expansion-panel v-for="(country,i) in allCountriesData" :key="i">
          <v-expansion-panel-header>
            <div>{{country.country}}</div>
            <img class="image ml-2" :src="country.countryInfo.flag" />
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="mt-4 mb-4">
              <div class="d-flex justify-space-around">
                <div>Confirmed: {{country.cases}}</div>
                <div>Deaths: {{country.deaths}}</div>
              </div>
              <div class="d-flex justify-center mt-2">
                <div>Recovered: {{country.recovered}}</div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div v-if="!isDataAvailable" class="loader">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchTab",
  data() {
    return {
      allCountriesData: [],
      isDataAvailable: false
    };
  },
  created() {
    this.getAllCountriesData();
  },
  methods: {
    getAllCountriesData: function() {
      this.isDataAvailable = false;
      fetch("https://corona.lmao.ninja/v2/countries")
        .then(response => response.json())
        .then(data => {
          this.allCountriesData = data;
          this.isDataAvailable = true;
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
.loader {
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.image {
  width: 30px;
}
.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
    flex:none;
}
</style>