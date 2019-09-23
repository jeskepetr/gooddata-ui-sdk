// (C) 2007-2019 GoodData Corporation
import { VisualizationObject, AFM, ExecuteAFM } from "@gooddata/gd-bear-model";

export type SortDirection = "asc" | "desc";

export interface IAccountInfo {
    login: string;
    loginMD5: string;
    firstName: string;
    lastName: string;
    organizationName: string;
    profileUri: string;
}

export interface IIdentifierUriPair {
    identifier: string;
    uri: string;
}

export interface IElement {
    element: {
        uri: string;
        title: string;
    };
}

export interface IValidElementsResponse {
    validElements: {
        items: IElement[];
        paging: {
            count: number;
            offset: string;
            total: string;
        };
        elementsMeta: {
            attribute: string;
            attributeDisplayForm: string;
            filter: string;
            order: SortDirection;
        };
    };
}

export interface IGetObjectsByQueryOptions {
    category?: string;
    mode?: string;
    author?: string;
    limit?: number;
    deprecated?: boolean;
}

export interface IGetObjectUsingOptions {
    types?: string[];
    nearest?: boolean;
}

export interface IEtlPullResponse {
    pull2Task: {
        links: {
            poll: string;
        };
    };
}

export interface IBaseLoadOptions {
    bucketItems?: VisualizationObject.IVisualizationObjectContent;
    excludeObjectsWithTags?: string[];
    includeObjectsWithTags?: string[];
}

export interface ILoadCatalogOptions extends IBaseLoadOptions {
    filter?: string;
    paging?: {
        limit: number;
        offset: number;
    };
    types?: string[];
}

export interface ILoadDateDataSetOptions extends IBaseLoadOptions {
    dataSetIdentifier?: string;
    includeAvailableDateAttributes?: boolean;
    includeUnavailableDateDataSetsCount?: boolean;
    returnAllDateDataSets?: boolean;
    returnAllRelatedDateDataSets?: boolean;
}

export interface ISort {
    column: string;
    direction: string;
}

export interface IMetricDefinition {
    expression: string;
    format?: string;
    identifier: string;
    title?: string;
    [key: string]: string | undefined;
}

export interface IDefinition {
    metricDefinition: IMetricDefinition;
}

export interface IExecutionConfiguration {
    definitions?: IDefinition[];
    filters?: any[];
    orderBy?: ISort[];
    where?: {
        [key: string]: any;
    };
}

export interface IAttributeHeader {
    id: string;
    title: string;
    type: "attrLabel";
    uri: string;
}

export interface IMetricHeader {
    format?: string;
    id: string;
    title: string;
    type: "metric";
    uri?: string;
}

export type Header = IAttributeHeader | IMetricHeader;

export type WarningParameterType = boolean | number | string | null;

export interface ISimpleExecutorWarning {
    errorCode: string;
    message: string;
    parameters: WarningParameterType[];
}

export type MetricValue = string;

export interface IAttributeValue {
    id: string;
    name: string;
}

export type ResultDataType = MetricValue | IAttributeValue;

export interface ISimpleExecutorResult {
    headers?: Header[];
    isEmpty?: boolean;
    isLoaded?: boolean;
    rawData?: ResultDataType[][];
    warnings?: ISimpleExecutorWarning[];
}

export type EmbeddedFilter = IEmbeddedDateFilter | IEmbeddedListAttributeFilter;

export type EmbeddedDateFilterType = "relative" | "absolute";

export interface IEmbeddedDateFilter {
    dateFilter: {
        attribute?: string;
        dataset?: string;
        dimension?: string;
        from?: string | number;
        granularity: string;
        to?: string | number;
        type: EmbeddedDateFilterType;
    };
}

export interface IEmbeddedListAttributeFilter {
    listAttributeFilter: {
        attribute: string;
        displayForm: string;
        default: {
            attributeElements: string[];
            negativeSelection: boolean;
        };
    };
}

export interface IMeasureSort {
    direction: SortDirection;
    sortByPoP?: boolean;
}

export type VisualizationStyleType = "common" | "table" | "line" | "column" | "bar";

export interface IVisualizationStyle {
    visualizationStyle: {
        type: VisualizationStyleType;
        colorPalette: {
            measure?: {
                color: string;
                periodOverPeriod: string;
            };

            stack?: any;
        };
    };
}

export type MeasureType = "metric" | "fact" | "attribute";
export type MeasureAggregation = "sum" | "count" | "avg" | "min" | "max" | "median" | "runsum";

export interface IMeasure {
    measure: {
        aggregation?: MeasureAggregation;
        format?: string;
        generatedId?: string;
        measureFilters: EmbeddedFilter[];
        objectUri: string;
        showInPercent: boolean;
        showPoP: boolean;
        sort?: IMeasureSort;
        styles?: IVisualizationStyle[];
        title: string;
        type: MeasureType;
    };
}

export interface IColor {
    r: number;
    g: number;
    b: number;
}

export type IColorPalette = IColorPaletteItem[];

export interface IColorPaletteItem {
    guid: string;
    fill: IColor;
}

export interface ICreateProjectOptions {
    summary?: string;
    projectTemplate?: string;
    driver?: string;
    environment?: string;
    guidedNavigation?: number;
}

export interface ITimezone {
    id: string;
    displayName: string;
    currentOffsetMs: number;
}

export interface IXhrMockInBeforeSend {
    setRequestHeader(key: string, value: string): void;
}

export interface IXhrSettings {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "HEAD";
    body?: any;
    beforeSend?(xhr: IXhrMockInBeforeSend, url: string): void;

    [key: string]: any;
}

export interface ISdkOptions {
    domain?: string;
}

export interface IFeatureFlags {
    [key: string]: number | boolean | string;
}

export interface IBaseExportConfig {
    title?: string;
    format?: "xlsx" | "csv" | "raw";
    mergeHeaders?: boolean;
}

export interface IExportConfig extends IBaseExportConfig {
    showFilters?: ExecuteAFM.CompatibilityFilter[];
}

export interface IExportResponse {
    uri: string;
}

export type GuidType = "guid";
export type RGBType = "rgb";

export interface IGuidColorItem {
    type: GuidType;
    value: string;
}

export interface IRGBColorItem {
    type: RGBType;
    value: IColor;
}

export type IColorItem = IGuidColorItem | IRGBColorItem;

export interface IColorMappingProperty {
    id: string;
    color: IColorItem;
}

export interface IPropertiesControls {
    colorMapping?: IColorMappingProperty[];
}

export interface IProperties {
    controls?: IPropertiesControls;
    sortItems?: AFM.SortItem[];
}

export interface IStoredItemDescription {
    uri: string;
}

export interface IAdHocItemDescription {
    expression: string;
}

export type ItemDescription = IStoredItemDescription | IAdHocItemDescription;
