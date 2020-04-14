<template>
  <v-card>
    <v-card-title class="headline" primary-title>Coronavirus Stats</v-card-title>
    <div class="chart">
      <Chart :casesData="casesData" :deathsData="deathsData" :recoveredData="recoveredData"></Chart>
    </div>
    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#113a5d" text @click="$emit('close')">Close</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Chart from "../Charts/Chart";
export default {
  name: "ChartCard",
  components: { Chart },
  props: {
    casesData: Array,
    deathsData: Array,
    recoveredData: Array
  }
};
</script>

<style lang="scss" scoped>
.headline {
  background-color: #113a5d;
  color: white;
}
</style>