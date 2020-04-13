<template></template>
<script>
export default {
  name: "CommonMixin",
  methods: {
    async getCurrentName() {
      let apiCall = await fetch("http://ip-api.com/json");
      let response = await apiCall.json();
      return response.country;
    }
  }
};
</script>