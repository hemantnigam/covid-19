<template>
  <div id="lateral" class="height100">
    <div v-if="isDataAvailable">
      <v-expansion-panels accordion tile>
        <virtual-list :size="20" :remain="50" class="virtual-list">
          <v-expansion-panel v-for="(country,i) in allCountriesData" :key="i" :id="i">
            <v-expansion-panel-header>
              <div>{{country.country}}</div>
              <img class="image ml-2" :src="country.countryInfo.flag" />
              <div class="ml-6">{{numberWithCommas(country.cases)}}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="mt-4 mb-4">
                <div class="d-flex justify-space-around">
                  <div>Confirmed: {{numberWithCommas(country.cases)}}</div>
                  <div>Deaths: {{numberWithCommas(country.deaths)}}</div>
                </div>
                <div class="d-flex justify-center mt-2">
                  <div>Recovered: {{numberWithCommas(country.recovered)}}</div>
                </div>
                <div class="d-flex justify-start mt-2">
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                      <v-btn
                        @click="getChart(country.country)"
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
                      v-if="casesData.length>0&&deathsData.length>0&&recoveredData.length>0"
                      :casesData="casesData"
                      :deathsData="deathsData"
                      :recoveredData="recoveredData"
                    ></chart-card>
                  </v-dialog>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </virtual-list>
      </v-expansion-panels>
    </div>
    <div v-if="!isDataAvailable" class="loader">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
import VirtualList from "vue-virtual-scroll-list";
import ChartCard from "../ChartCard";

export default {
  name: "SearchTab",
  components: {
    VirtualList,
    ChartCard
  },
  data() {
    return {
      allCountriesData: [],
      isDataAvailable: false,
      icon: "fas fa-lock",
      dialog: false,
      casesData: [],
      deathsData: [],
      country: "",
      recoveredData: []
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

          this.allCountriesData.sort((a, b) => {
            return a.cases > b.cases ? -1 : 1;
          });
          this.$emit("allData", this.allCountriesData);
        });
    },
    numberWithCommas: function(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    getChart: async function(country) {
      this.country = country;
      let response = await fetch(
        `https://corona.lmao.ninja/v2/historical/${
          this.country
        }?lastdays=${this.getDays()}`
      );
      let result = await response.json();
      this.casesData = Object.entries(result.timeline.cases);
      this.deathsData = Object.entries(result.timeline.deaths);
      this.recoveredData = Object.entries(result.timeline.recovered);
      this.dialog = true;
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
.v-expansion-panel-header--active {
  background-color: #113a5d !important;
  color: #dae1e7 !important;
}
.loader {
  height: 100%;
  //   position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.image {
  width: 30px;
  height: 20px;
}
.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
  flex: none;
}
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
.height100 {
  height: 100%;
}
.float-button {
  bottom: 20px !important;
}
.virtual-list {
  width: 100%;
}
</style>