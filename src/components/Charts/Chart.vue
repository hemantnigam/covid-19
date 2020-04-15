<template>
  <ECharts :options="options" ref="chart" :autoresize="true"></ECharts>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

export default {
  name: "Chart",
  components: { ECharts },
  props: {
    casesData: Array,
    deathsData: Array,
    recoveredData: Array
  },
  data() {
    return {
      options: {
        legend: {
          show: true,
          bottom:'bottom',
          icon:'ret'
        },
        tooltip: {
          show: true,
          backgroundColor: "#000000",
          extraCssText: "border-radius:0px;",
          formatter: params => {
            let template = `<div><div>Date: ${
              params.data[0]
            }</div><div>Count: ${this.numberWithCommas(
              params.data[1]
            )}</div></div>`;
            return template;
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#3e4a61"
            }
          },
          axisLabel: {
            color: "#3e4a61"
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#3e4a61"
            }
          },
          axisLabel: {
            color: "#3e4a61"
          }
        },
        grid: {
          left: "20%"
        },
        series: [
          {
            name: "Cases",
            data: this.casesData,
            type: "line",
            // lineStyle: {
            //   color: "#ffb174"
            // }
          },
          {
            name: "Deaths",
            data: this.deathsData,
            type: "line",
            // lineStyle: {
            //   color: "#f85959"
            // }
          },
          {
            name: "Recovered",
            data: this.recoveredData,
            type: "line",
            // lineStyle: {
            //   color: "#21e6c1"
            // }
          }
        ]
      }
    };
  },
  methods: {
    numberWithCommas: function(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  destroyed() {
    if (this.$refs && this.$refs.chart) this.$refs.chart.destroy();
  }
};
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  div {
    width: 100% !important;
  }
}
</style>