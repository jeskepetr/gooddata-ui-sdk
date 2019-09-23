// (C) 2007-2019 GoodData Corporation
import { MAX_POINT_WIDTH } from "./commonConfiguration";
import { LINE_WIDTH } from "./lineConfiguration";
import { INewChartConfig } from "../../../interfaces/Config";
import { VisualizationTypes } from "../../../base/constants/visualizationTypes";
import { isLineChart } from "../../utils/common";
import { MEASURES, SECONDARY_MEASURES } from "../../../base/constants/bucketNames";
import { IExecutionDefinition } from "@gooddata/sdk-backend-spi";
import { bucketIsEmpty, bucketsFind } from "@gooddata/sdk-model";
import get = require("lodash/get");

const { COLUMN, LINE } = VisualizationTypes;

function getDefaultComboTypes(config?: INewChartConfig): INewChartConfig {
    return {
        primaryChartType: get(config, "primaryChartType", COLUMN),
        secondaryChartType: get(config, "secondaryChartType", LINE),
    };
}
export function getDefaultChartType(config?: INewChartConfig) {
    const { primaryChartType, secondaryChartType } = getDefaultComboTypes(config);

    if (primaryChartType === secondaryChartType) {
        return primaryChartType;
    }

    if (primaryChartType === COLUMN || secondaryChartType === COLUMN) {
        return COLUMN;
    }

    return LINE;
}

function isOnlyLineSeries(config: INewChartConfig, definition?: IExecutionDefinition): boolean {
    const { primaryChartType, secondaryChartType } = getDefaultComboTypes(config);
    const buckets = definition ? definition.buckets : [];
    const isEmptyPrimaryMeasure = bucketIsEmpty(bucketsFind(buckets, MEASURES));
    const isEmptySecondaryMeasure = bucketIsEmpty(bucketsFind(buckets, SECONDARY_MEASURES));
    const isLineChartOnLeftAxis = isLineChart(primaryChartType);
    const isLineChartOnRightAxis = isLineChart(secondaryChartType);
    return (
        (isLineChartOnLeftAxis && isLineChartOnRightAxis) ||
        (isLineChartOnLeftAxis && isEmptySecondaryMeasure) ||
        (isEmptyPrimaryMeasure && isLineChartOnRightAxis)
    );
}

export function getComboConfiguration(config?: INewChartConfig, definition?: IExecutionDefinition) {
    const series = isOnlyLineSeries(config, definition)
        ? {
              series: {
                  states: {
                      inactive: {
                          opacity: 1,
                      },
                  },
              },
          }
        : {};
    const COMBO_TEMPLATE = {
        chart: {
            type: getDefaultChartType(config),
            spacingTop: 20,
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    crop: false,
                    overflow: "none",
                    padding: 2,
                },
                maxPointWidth: MAX_POINT_WIDTH,
                borderColor: "#00000000",
            },
            line: {
                marker: {
                    symbol: "circle",
                    radius: 4.5,
                },
                lineWidth: LINE_WIDTH,
                fillOpacity: 0.3,
                stickyTracking: false,
                states: {
                    hover: {
                        lineWidth: LINE_WIDTH + 1,
                    },
                },
                dataLabels: {
                    style: {
                        fontWeight: "normal",
                    },
                },
            },
            area: {
                marker: {
                    symbol: "circle",
                    radius: 4.5,
                },
                lineWidth: LINE_WIDTH,
                fillOpacity: 0.6,
                stickyTracking: false,
                states: {
                    hover: {
                        lineWidth: LINE_WIDTH + 1,
                    },
                },
            },
            ...series,
        },
    };
    return COMBO_TEMPLATE;
}
