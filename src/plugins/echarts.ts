// vue-echarts
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  BarChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  LineChart,
  GaugeChart,
} from "echarts/charts";
import "echarts-gl";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  GaugeChart,
  PieChart,
  MapChart,
  EffectScatterChart,
  LineChart,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
  VisualMapComponent,
  GeoComponent,
  MarkPointComponent,
]);

export const registerEcharts = (app: any) => {
  app.component("v-chart", ECharts);
};
