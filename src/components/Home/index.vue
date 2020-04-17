<template>
  <div class="home">
    <total-cases :data="totalData"></total-cases>
    <v-divider class="mt-4 mb-4"></v-divider>
    <current-country :data="data" :country="country"></current-country>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import TotalCases from "../TotalCases";
import CurrentCountry from "../CurrentCountry";
export default {
  name: "Home",
  components: {
    TotalCases,
    CurrentCountry
  },
  data() {
    return {
      country: "India",
      data: {},
      hasCountryData: false,
      hasTotalData: false,
      totalData: {}
    };
  },
  created() {
    this.getAllCases();
    this.getCountryData();
  },
  computed: {
    overlay: function() {
      return !this.hasTotalData && !this.hasCountryData;
    }
  },
  methods: {
    getAllCases: function() {
      this.hasTotalData = false;
      fetch("https://corona.lmao.ninja/v2/all")
        .then(response => response.json())
        .then(data => {
          this.totalData = data;
          this.hasTotalData = true;
        });
    },
    getCountryData: function() {
      this.hasCountryData = false;
      fetch(`https://corona.lmao.ninja/v2/countries/${this.country}`)
        .then(response => response.json())
        .then(data => {
          this.data = data;
          this.hasCountryData = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 15px !important;
}
</style>