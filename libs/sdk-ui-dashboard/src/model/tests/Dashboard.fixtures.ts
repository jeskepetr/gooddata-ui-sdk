// (C) 2021 GoodData Corporation

import { ReferenceRecordings } from "@gooddata/reference-workspace";
import {
    IDashboardLayoutItem,
    IDashboardLayoutSectionHeader,
    IDashboardWithReferences,
    IInsightWidget,
    IKpiWidget,
} from "@gooddata/sdk-backend-spi";
import { idRef, IInsight, insightId } from "@gooddata/sdk-model";
import { InsightPlaceholderWidget, KpiPlaceholderWidget } from "../types/layoutTypes";
import { recordedInsight } from "@gooddata/sdk-backend-mockingbird";

//
// Basic constants and building blocks used in tests
//

export const TestCorrelation = "testCorrelationId";
export const TestStash = "testStash";

export const TestSectionHeader: IDashboardLayoutSectionHeader = {
    title: "Test Section",
    description: "Section added for test purposes",
};

//
// Pointers into reference workspace entities. For convenience and unification.
//

export const SimpleDashboardIdentifier = "aaRaEZRWdRpQ";
export const SimpleDashboardWithReferences = ReferenceRecordings.Recordings.metadata.dashboards
    .dash_aaRaEZRWdRpQ.obj as IDashboardWithReferences;
export const SimpleDashboardLayout = SimpleDashboardWithReferences.dashboard.layout!;
export const SimpleDashboardFirstWidgetRef = (SimpleDashboardLayout.sections[0].items[0].widget as any).ref;

/**
 * A more complex dashboard that has 3 sections (rows).
 *
 * Two attribute filters: Region & Product
 * First row: 6 KPIs, first three without date filtering, second three with full filtering
 * Second row: two tables; same tables, each with 3 measures. first without any filtering whatsoever but with all drills; second with date filter and no attribute filtering, no drills
 * Third row: single heatmap with all filters applied
 */
export const ComplexDashboardIdentifier = "aeis6NlXcL7X";
export const ComplexDashboardWithReferences = ReferenceRecordings.Recordings.metadata.dashboards
    .dash_aeis6NlXcL7X.obj as IDashboardWithReferences;
export const ComplexDashboardLayout = ComplexDashboardWithReferences.dashboard.layout!;

export const ComplexDashboardWidgets = {
    FirstSection: {
        FirstKpi: ComplexDashboardWithReferences.dashboard.layout!.sections[0].items[0].widget! as IKpiWidget,
        LastKpi: ComplexDashboardWithReferences.dashboard.layout!.sections[0].items[5].widget! as IKpiWidget,
    },
    SecondSection: {
        FirstTable: ComplexDashboardWithReferences.dashboard.layout!.sections[1].items[0]
            .widget! as IInsightWidget,
        SecondTable: ComplexDashboardWithReferences.dashboard.layout!.sections[1].items[1]
            .widget! as IInsightWidget,
    },
    ThirdSection: {
        Heatmap: ComplexDashboardWithReferences.dashboard.layout!.sections[2].items[0]
            .widget! as IInsightWidget,
    },
};

/**
 * Basic dashboard aimed at testing the widget filters query.
 */
export const FilterTestingDashboardIdentifier = "abr8vSe5exU7";
export const FilterTestingDashboardWithReferences = ReferenceRecordings.Recordings.metadata.dashboards
    .dash_abr8vSe5exU7.obj as IDashboardWithReferences;
export const FilterTestingDashboardWidgets = {
    NoIgnoredFilters: {
        Insight: FilterTestingDashboardWithReferences.dashboard.layout!.sections[0].items[0]
            .widget as IInsightWidget,
        Kpi: FilterTestingDashboardWithReferences.dashboard.layout!.sections[0].items[1].widget as IKpiWidget,
    },
    IgnoredAttributeFilter: {
        Insight: FilterTestingDashboardWithReferences.dashboard.layout!.sections[1].items[0]
            .widget as IInsightWidget,
        Kpi: FilterTestingDashboardWithReferences.dashboard.layout!.sections[1].items[1].widget as IKpiWidget,
    },
    IgnoredDateFilter: {
        Insight: FilterTestingDashboardWithReferences.dashboard.layout!.sections[2].items[0]
            .widget as IInsightWidget,
        Kpi: FilterTestingDashboardWithReferences.dashboard.layout!.sections[2].items[1].widget as IKpiWidget,
    },
};

/**
 * More advanced dashboard aimed at testing the widget filters query.
 */
export const AdvancedFilterTestingDashboardIdentifier = "aaQ8QjLVhNOG";
export const AdvancedFilterTestingDashboardWithReferences = ReferenceRecordings.Recordings.metadata.dashboards
    .dash_aaQ8QjLVhNOG.obj as IDashboardWithReferences;
export const AdvancedFilterTestingDashboardWidgets = {
    InsightWithOwnAttributeFilter: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!.sections[0]
        .items[0].widget as IInsightWidget,
    InsightWithOwnDateFilter: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!.sections[0]
        .items[1].widget as IInsightWidget,
    InsightWithOwnRankingFilter: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!.sections[0]
        .items[2].widget as IInsightWidget,
    InsightWithOwnMeasureValueFilter: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!
        .sections[0].items[3].widget as IInsightWidget,

    InsightWithAllMeasuresFilteredByDate: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!
        .sections[1].items[0].widget as IInsightWidget,
    InsightWithSomeMeasuresFilteredByDate: AdvancedFilterTestingDashboardWithReferences.dashboard.layout!
        .sections[1].items[1].widget as IInsightWidget,

    InsightConnectedToDifferentDateDimensionThanIsUsedInItsOwnFilter:
        AdvancedFilterTestingDashboardWithReferences.dashboard.layout!.sections[2].items[0]
            .widget as IInsightWidget,
};

//
//
//

export const EmptyDashboardIdentifier = "emptyDashboard";
export const EmptyDashboardWithReferences = ReferenceRecordings.Recordings.metadata.dashboards
    .dash_emptyDashboard.obj as IDashboardWithReferences;

export const PivotTableWithRowAndColumnAttributes = recordedInsight(
    ReferenceRecordings.Insights.PivotTable.SingleMeasureWithTwoRowAndTwoColumnAttributes,
);

export const PivotTableWithDateFilter = recordedInsight(
    ReferenceRecordings.Insights.PivotTable.WithDateFilter,
);

export const PivotTableWithTwoSameDates = recordedInsight(
    ReferenceRecordings.Insights.PivotTable.WithTwoSameDates,
);

export const TreemapWithSingleMeasureAndViewByFilteredToOneElement = recordedInsight(
    ReferenceRecordings.Insights.Treemap.SingleMeasureAndViewByFilteredToOneElement,
);

export const TreemapWithOneMeasureAndViewByDateAndSegmentByDate = recordedInsight(
    ReferenceRecordings.Insights.Treemap.WithOneMeasureAndViewByDateAndSegmentByDate,
);

//
// Test placeholders
//

export const TestKpiPlaceholderWidget: KpiPlaceholderWidget = {
    type: "kpiPlaceholder",
};

export const TestKpiPlaceholderItem: IDashboardLayoutItem<KpiPlaceholderWidget> = {
    type: "IDashboardLayoutItem",
    widget: TestKpiPlaceholderWidget,
    size: {
        xl: {
            gridWidth: 2,
        },
    },
};

export const TestInsightPlaceholderWidget: InsightPlaceholderWidget = {
    type: "insightPlaceholder",
};

export const TestInsightPlaceholderItem: IDashboardLayoutItem<InsightPlaceholderWidget> = {
    type: "IDashboardLayoutItem",
    widget: TestInsightPlaceholderWidget,
    size: {
        xl: {
            gridWidth: 2,
        },
    },
};

//
//
//

export const TestInsightItem: IDashboardLayoutItem<IInsightWidget> = createTestInsightItem(
    PivotTableWithRowAndColumnAttributes,
);

export function createTestInsightItem(insight: IInsight): IDashboardLayoutItem<IInsightWidget> {
    return {
        type: "IDashboardLayoutItem",
        widget: {
            type: "insight",
            insight: idRef(insightId(insight), "insight"),
            ref: idRef("newWidget"),
            uri: "newWidgetUri",
            identifier: "newWidgetIdentifier",
            ignoreDashboardFilters: [],
            drills: [],
            title: "Test Insight Item",
            description: "",
        },
        size: {
            xl: {
                gridWidth: 2,
            },
        },
    };
}
