<template>
  <div class="ml-4 mt-4 mr-4 mb-4">
    <h1>Coronavirus Precautions</h1>
    <ul>
      <li v-for="(prevention,i) in preventions" :key="i">
          {{prevention}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Preventions",
  data() {
    return {
      preventions: [
        "Regular hand washing",
        "Covering mouth and nose when coughing and sneezing",
        "If you are taking care of someone who is sick, try to stay 6 feet away – this is the distance virus – containing droplets can travel through a sneeze or cough",
        "Avoid close contact with anyone showing symptoms of respiratory illness as coughing and sneezing",
        "Avoid touching your eyes, nose, and mouth",
        "Stay home when you are sick",
        "Clean and disinfect frequently touched objects and surfaces using a regular objects and surfaces using a regular household cleaning spray or wipe."
      ]
    };
  }
};
</script>

<style>
</style>