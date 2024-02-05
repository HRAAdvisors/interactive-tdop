import { ChartDefinition } from "@hraadvisors/report-api-types";

export type BarChartDefinition = ChartDefinition<
  "bar_chart",
  "color" | "group" | "size" | "tooltip" | "filter",
  {
    showBarValues: boolean;
    showYAxis: boolean;
  }
>;

export type HorizontalBarChartDefinition = ChartDefinition<
  "horizontal_bar_chart",
  "color" | "group" | "size" | "tooltip" | "filter"
>;

export type StackedBarChartDefinition = ChartDefinition<
  "stacked_bar_chart",
  "color" | "group" | "size" | "tooltip" | "filter",
  {
    showTooltip: boolean;
    showValueInBar: boolean;
    showYAxis: boolean;
    minYValue: string;
    maxYValue: string;
  }
>;

export type StackedHorizontalBarChartDefinition = ChartDefinition<
  "stacked_horizontal_bar_chart",
  "color" | "group" | "size" | "tooltip" | "filter"
>;

export type LineChart = ChartDefinition<
  "line_chart",
  "color" | "x" | "y" | "tooltip" | "filter",
  {
    showPoints: boolean;
    xAxisFormat: string;
    zeroBased: boolean;
    yAxisPadding: number;
  }
>;

export type ScatterPlot = ChartDefinition<
  "scatter_plot",
  "color" | "x" | "y" | "tooltip" | "filter",
  {
    xAxisTitle: string;
    yAxisTitle: string;
    allowZoom: boolean;
    showLabels: boolean;
  }
>;

export type TableChart = ChartDefinition<
  "table_chart",
  "row" | "column" | "text" | "color" | "filter" | "tooltip",
  {
    seriesColumnName: string;
    rowsPerPage: number;
    heatmap: string;
    highlightMain: boolean;
    sortColumnIndex: number;
    sortAscending: "yes" | "";
    pdfMaxRows: number;
  }
>;

export type TextChart = ChartDefinition<
  "text_chart",
  "text" | "filter",
  {
    centered: boolean;
    size: "small" | "medium" | "large";
  }
>;

export type SankeyDiagram = ChartDefinition<
  "sankey_diagram",
  "start" | "end" | "size" | "tooltip" | "filter",
  {
    sorted: boolean;
    align: "justify" | "left" | "right" | "center";
    linkColor: "neutral" | "source" | "target" | "gradient";
  }
>;

export type BeeswarmChart = ChartDefinition<"beeswarm_chart", "color" | "x" | "tooltip" | "filter">;

type RegionDisplay =
  | "none"
  | "boundary_thin"
  | "boundary_thick"
  | "boundary_prominent"
  | "area_light"
  | "area_dark"
  | "area_prominent";
export type BaseMapProps = {
  mapStyle: string;
  colorScheme: "categorical" | "sequential" | "diverging";
  mainDisplay: RegionDisplay;
  containerDisplay: RegionDisplay;
  peersDisplay: RegionDisplay;
  opacity: number;
};

export type ChoroplethMap = ChartDefinition<"choropleth_map", "region" | "color" | "tooltip" | "filter", BaseMapProps>;

export type BubbleMap = ChartDefinition<
  "bubble_map",
  "latitude" | "longitude" | "color" | "size" | "tooltip" | "filter",
  BaseMapProps
>;

export type ConnectionMap = ChartDefinition<
  "connection_map",
  "start" | "end" | "color" | "filter" | "tooltip",
  BaseMapProps & {
    relatedDisplay: RegionDisplay;
  }
>;

export type VennDiagram = ChartDefinition<
  "venn_diagram",
  "color" | "size" | "filter" | "tooltip",
  {
    setText: "label" | "value" | "label_value" | "none";
    showIntersectionText: boolean;
    relations: any[];
  }
>;

export type DonutChart = ChartDefinition<"donut_chart", "color" | "size" | "tooltip" | "filter">;

export type ErrorPlaceholder = ChartDefinition<
  "error_placeholder",
  "",
  {
    message: string;
    code: string;
  }
>;

export type StandardChart =
  | BarChartDefinition
  | HorizontalBarChartDefinition
  | StackedBarChartDefinition
  | StackedHorizontalBarChartDefinition
  | LineChart
  | ScatterPlot
  | TableChart
  | TextChart
  | SankeyDiagram
  | ChoroplethMap
  | BubbleMap
  | ConnectionMap
  | VennDiagram
  | BeeswarmChart
  | DonutChart
  | ErrorPlaceholder;