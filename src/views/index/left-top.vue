<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { currentGET } from "@/api";
import CountUp from "@/components/count-up";
import { clone, cloneDeep } from "lodash";

const getOption = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      max: 700,
      progress: {
        show: true,
      },
      splitNumber: 30,
      splitLine: {
        show: true,
        lineStyle: { color: "white", width: 1 },
      },
      axisLabel: {
        show: false,
      },
      title: {
        offsetCenter: [0, "130%"],
        color: "#66cc00",
        fontStyle: "italic",
      },
      axisTick: {
        show: false,
      },
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 1,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#0cebeb",
            },
            {
              offset: 0.5,
              color: "#20e3b2",
            },

            {
              offset: 1,
              color: "#29ffc6",
            },
          ],
          global: false, // default is false
        },
      },
      detail: {
        valueAnimation: true,
        formatter: "{value}",
        fontStyle: "italic",
        fontWeight: "normal",
        fontSize: 12,
        color: "green",
      },
      data: [
        {
          value: 550,
          name: "设备在线数",
        },
      ],
    },
  ],
};

const onlineOption = reactive(cloneDeep(getOption));
const onPlan = reactive(cloneDeep(getOption));
const outPut = reactive(cloneDeep(getOption));
onMounted(() => {
  const onPlanSeries = onPlan.series[0];
  onPlanSeries.max = 1000;
  onPlanSeries.title.color = "#99ccff";
  onPlanSeries.itemStyle.color = "#99ccff";
  onPlanSeries.data[0].value = 100;
  onPlanSeries.data[0].name = "计划达成";

  const onOutPutSeries = outPut.series[0];
  onOutPutSeries.max = 1200;
  onOutPutSeries.title.color = "#BF242A";
  onOutPutSeries.itemStyle.color = "#BF242A";
  onOutPutSeries.data[0].value = 200;
  onOutPutSeries.data[0].name = "产量";
});
setInterval(() => {
  onPlan.series[0].data[0].value += 3;
  outPut.series[0].data[0].value += 4;
}, 10000);
</script>

<template>
  <ul class="user_Overview flex">
    <li class="user_Overview-item" style="color: #00fdfa">
      <v-chart :option="onlineOption"></v-chart>
    </li>
    <li class="user_Overview-item" style="color: #07f7a8">
      <v-chart :option="onPlan"></v-chart>
    </li>
    <li class="user_Overview-item" style="color: #e3b337">
      <v-chart :option="outPut"></v-chart>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.left-top {
  width: 100%;
  height: 100%;
}

.user_Overview {
  li {
    flex: 1;
    width: 100px;
    height: 200px;

    .user_Overview_nums {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 22px;
      margin: 50px auto 30px;
      background-size: cover;
      background-position: center center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      &.bgdonghua::before {
        animation: rotating 14s linear infinite;
      }
    }

    .allnum {
      &::before {
        background-image: url("@/assets/img/left_top_lan.png");
      }
    }

    .online {
      &::before {
        background-image: url("@/assets/img/left_top_lv.png");
      }
    }

    .offline {
      &::before {
        background-image: url("@/assets/img/left_top_huang.png");
      }
    }

    .laramnum {
      &::before {
        background-image: url("@/assets/img/left_top_hong.png");
      }
    }
  }
}
</style>
