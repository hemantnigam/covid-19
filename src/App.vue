<template>
  <v-app>
    <v-app-bar app :color="accentColor" dark fixed :elevateOnScroll="false" flat>
      <v-app-bar-nav-icon @click="openDrawer = !openDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>COVID - 19</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-navigation-drawer
        :color="accentColor"
        class="navigation-drawer"
        v-model="openDrawer"
        absolute
        temporary
      >
        <v-list>
          <v-list-item-group v-model="item" color="#dae1e7">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <total-cases :data="totalData"></total-cases>
    </v-content>
  </v-app>
</template>

<script>
import { ACCENT_COLOR } from "./constants/AppConstants";
import TotalCases from "./components/TotalCases";
export default {
  name: "App",
  components: {
    TotalCases
  },
  data: () => ({
    openDrawer: false,
    item: 0,
    totalData:{},
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" }
    ]
  }),
  computed: {
    accentColor: function() {
      return ACCENT_COLOR;
    }
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
          console.log(this.totalData)
        });
    }
  }
};
</script>
<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: white !important;
}
</style>