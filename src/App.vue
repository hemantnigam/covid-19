<template>
  <v-app>
    <v-app-bar app :color="accentColor" dark fixed :elevateOnScroll="false" flat>
      <v-toolbar-title class="ml-2">COVID - 19</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <!-- <v-navigation-drawer
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
      </v-navigation-drawer> -->
      <home v-if="activeBtn===0"></home>
      <search-tab v-if="activeBtn===1"></search-tab>
      <preventions v-if="activeBtn===2"></preventions>
      <v-bottom-navigation @change="currentTab" :value="activeBtn" class="justify-space-around" color="#f9f9f9" :background-color="accentColor" horizontal fixed light>
        <v-btn v-for="(tab,i) in tabs" :key="i">
          <!-- <span>{{tab.text}}</span> -->
          <v-icon>{{tab.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
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
    activeBtn: 0,
    items: [
      { text: "Home", icon: "mdi-home" },
      { text: "Contact US", icon: "mdi-account-box" }
    ],
    tabs: [
      { text: "Home", icon: "mdi-home" },
      { text: "Search", icon: "mdi-magnify" },
      { text: "Preventions", icon: "mdi-hospital-box" }
    ]
  }),
  computed: {
    accentColor: function() {
      return ACCENT_COLOR;
    }
  },
  methods: {
    currentTab: function(tabIndex) {
      this.activeBtn = tabIndex;
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
.v-item-group.v-bottom-navigation--horizontal .v-btn > .v-btn__content > .v-icon {
  margin-right: 0px !important;
}
</style>