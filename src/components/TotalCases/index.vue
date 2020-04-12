<template>
  <v-card class="mx-auto total-case-card" tile flat height="180">
    <div class="container">
      <div>
        <v-card-title><h1>Total: 5665</h1></v-card-title>
        <v-card-title>Recovered: 5657</v-card-title>
        <v-card-title>Deaths: 677</v-card-title>
        <div></div>
        <div></div>
      </div>
      <div>
        <v-img class="globe-img" src="../../assets/globe.png"></v-img>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "TotalCases"
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  .globe-img {
    width: 150px;
  }
  .card-text {
    padding: 0px 16px 5px 16px;
  }
  .v-card__subtitle, .v-card__text, .v-card__title {
    padding:0px !important;
    h1 {
      margin-bottom: 10px;
    }
  }
}
.total-case-card {
  background-image: linear-gradient(to right, rgb(142, 158, 171), rgb(238, 242, 243));
}
</style>