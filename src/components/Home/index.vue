<template>
  <div>
    <total-cases :data="totalData"></total-cases>
    <v-divider class="mt-4 mb-4"></v-divider>
    <current-country></current-country>
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
      totalData: {}
    };
  },
  created() {
    this.getAllCases();
  },
  methods: {
    getAllCases: function() {
      fetch("https://corona.lmao.ninja/all")
        .then(response => response.json())
        .then(data => {
          this.totalData = data;
        });
    }
  }
};
</script>

<style>
</style>