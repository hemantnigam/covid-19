<template>
  <v-app>
    <div>
      <v-app-bar app :color="accentColor" dark fixed :elevateOnScroll="false" flat>
        <v-toolbar-title class="ml-2">COVID - 19</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-if="activeBtn===1"
          v-model="searchText"
          clearable
          class="search-field"
          placeholder="Search"
          hide-details
          height="35"
          filled
          rounded
          dense
        ></v-text-field>
      </v-app-bar>
    </div>
    <div style="margin-bottom: 56px; height:100%">
      <v-content style="height:100%">
        <home v-if="activeBtn===0"></home>
        <search-tab ref="searchTab" v-if="activeBtn===1" @allData="allData"></search-tab>
        <preventions v-if="activeBtn===2"></preventions>
      </v-content>
      <!-- <v-btn
        @click="scrollToTop"
        color="pink"
        class="float-button"
        dark
        small
        fixed
        bottom
        right
        fab
        v-if="activeBtn===1"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>-->
    </div>
    <v-bottom-navigation
      @change="currentTab"
      :value="activeBtn"
      class="justify-space-around"
      color="#f9f9f9"
      :background-color="accentColor"
      horizontal
      fixed
      light
    >
      <v-btn v-for="(tab,i) in tabs" :key="i">
        <v-icon>{{tab.icon}}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { ACCENT_COLOR } from "./constants/AppConstants";
import Home from "./components/Home";
import SearchTab from "./components/SearchTab";
import Preventions from "./components/Preventions";

export default {
  name: "App",
  components: {
    Home,
    SearchTab,
    Preventions
  },
  data: () => ({
    openDrawer: false,
    item: 0,
    searchText: "",
    activeBtn: 0,
    items: [
      { text: "Home", icon: "mdi-home" },
      { text: "Contact US", icon: "mdi-account-box" }
    ],
    tabs: [
      { text: "Home", icon: "mdi-home" },
      { text: "Search", icon: "mdi-magnify" },
      { text: "Preventions", icon: "mdi-hospital-box" }
    ],
    allCountriesData: []
  }),
  watch: {
    searchText: function(value) {
      if (value) {
        this.$refs.searchTab.allCountriesData = this.allCountriesData.filter(
          country => {
            return country.country.toLowerCase().includes(value.toLowerCase());
          }
        );
      } else this.$refs.searchTab.allCountriesData = this.allCountriesData;
    }
  },
  computed: {
    accentColor: function() {
      return ACCENT_COLOR;
    }
  },
  methods: {
    allData: function(allCountriesData) {
      this.allCountriesData = allCountriesData;
    },
    scrollToTop: function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    currentTab: function(tabIndex) {
      this.activeBtn = tabIndex;
    },
    startSearch: function() {
      if (this.searchText === "")
        this.$refs.searchTab.allCountriesData = this.allCountriesData;
      else this.$refs.searchTab.allCountriesData = [];
    }
  }
};
</script>
<style scoped>
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: white !important;
}
.v-content {
  background-image: linear-gradient(
    to right,
    rgb(142, 158, 171),
    rgb(238, 242, 243)
  );
}

.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #dae1e7 !important;
}
.v-item-group.v-bottom-navigation--horizontal
  .v-btn
  > .v-btn__content
  > .v-icon {
  margin-right: 0px !important;
}
.v-item-group.v-bottom-navigation
  .v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  height: 100% !important;
}
.float-button {
  bottom: 70px !important;
}
.v-text-field.v-text-field--enclosed .v-text-field__details {
  display: none !important;
}
.v-input--hide-details > .v-input__control > .v-input__slot {
  min-height: 35px !important;
}
.search-field {
  width: 150px !important;
}
</style>