// (C) 2019-2024 GoodData Corporation
/**
 * This package provides low-level functions for communication with GoodData Cloud and GoodData.CN.
 *
 * @remarks
 * The package is used by `@gooddata/sdk-backend-tiger`, which you should use instead of directly using
 * `@gooddata/api-client-tiger` whenever possible.
 *
 * @packageDocumentation
 */
import { tigerClientFactory, ITigerClient } from "./client.js";
import {
    axios as defaultAxios,
    newAxios,
    setAxiosAuthorizationToken,
    setGlobalAuthorizationToken,
} from "./axios.js";

export {
    VisualizationObjectModelV1,
    VisualizationObjectModelV2,
    AnalyticalDashboardModelV1,
    AnalyticalDashboardModelV2,
    isAttributeHeader,
    isAfmObjectIdentifier,
    isResultAttributeHeader,
    isResultMeasureHeader,
    isResultTotalHeader,
    isVisualizationObjectsItem,
    isFilterContextData,
    isDashboardPluginsItem,
} from "./gd-tiger-model/index.js";

export { newAxios, setAxiosAuthorizationToken, setGlobalAuthorizationToken };

export {
    AFM,
    AfmIdentifier,
    AfmLocalIdentifier,
    AfmObjectIdentifierAttributeIdentifier,
    AfmObjectIdentifierAttributeIdentifierTypeEnum,
    AfmObjectIdentifierCore,
    AfmObjectIdentifierCoreIdentifier,
    AfmObjectIdentifierCoreIdentifierTypeEnum,
    AfmObjectIdentifierDataset,
    AfmObjectIdentifierDatasetIdentifier,
    AfmObjectIdentifierDatasetIdentifierTypeEnum,
    AfmObjectIdentifierIdentifier,
    AfmObjectIdentifierIdentifierTypeEnum,
    AfmObjectIdentifierLabel,
    AfmObjectIdentifierAttribute,
    AfmObjectIdentifierLabelIdentifier,
    AfmObjectIdentifierLabelIdentifierTypeEnum,
    AbsoluteDateFilter,
    AbsoluteDateFilterAbsoluteDateFilter,
    AbstractMeasureValueFilter,
    AfmExecution,
    AfmExecutionResponse,
    AfmObjectIdentifier,
    AfmValidObjectsQuery,
    AfmValidObjectsQueryTypesEnum,
    AfmValidObjectsResponse,
    ArithmeticMeasureDefinition,
    ArithmeticMeasureDefinitionArithmeticMeasure,
    ArithmeticMeasureDefinitionArithmeticMeasureOperatorEnum,
    AttributeExecutionResultHeader,
    AttributeFilter,
    AttributeFilterElements,
    AttributeHeaderOut,
    AttributeHeaderOutAttributeHeader,
    AttributeHeaderOutAttributeHeaderGranularityEnum,
    AttributeItem,
    AttributeResultHeader,
    ComparisonMeasureValueFilter,
    ComparisonMeasureValueFilterComparisonMeasureValueFilter,
    ComparisonMeasureValueFilterComparisonMeasureValueFilterOperatorEnum,
    DataColumnLocator,
    DataColumnLocators,
    DateFilter,
    Dimension,
    DimensionHeader,
    Element,
    ElementsRequest,
    FilterBy,
    FilterByLabelTypeEnum,
    ElementsRequestSortOrderEnum,
    ElementsResponse,
    ExecutionLinks,
    ExecutionResponse,
    ExecutionResult,
    ExecutionResultGrandTotal,
    ExecutionResultHeader,
    ExecutionResultPaging,
    ExecutionSettings,
    FilterDefinition,
    FilterDefinitionForSimpleMeasure,
    HeaderGroup,
    InlineFilterDefinition,
    InlineFilterDefinitionInline,
    InlineMeasureDefinition,
    InlineMeasureDefinitionInline,
    MeasureDefinition,
    MeasureExecutionResultHeader,
    MeasureGroupHeaders,
    MeasureHeaderOut,
    MeasureItem,
    MeasureResultHeader,
    MeasureValueFilter,
    NegativeAttributeFilter,
    NegativeAttributeFilterNegativeAttributeFilter,
    Paging,
    PopDataset,
    PopMeasureDefinition,
    PopDatasetMeasureDefinition,
    PopDatasetMeasureDefinitionPreviousPeriodMeasure,
    PopDate,
    PopDateMeasureDefinition,
    PopDateMeasureDefinitionOverPeriodMeasure,
    PositiveAttributeFilter,
    PositiveAttributeFilterPositiveAttributeFilter,
    RangeMeasureValueFilter,
    RangeMeasureValueFilterRangeMeasureValueFilter,
    RangeMeasureValueFilterRangeMeasureValueFilterOperatorEnum,
    RankingFilter,
    RankingFilterRankingFilter,
    RankingFilterRankingFilterOperatorEnum,
    RelativeDateFilter,
    RelativeDateFilterRelativeDateFilter,
    RelativeDateFilterRelativeDateFilterGranularityEnum,
    ResultCacheMetadata,
    ResultDimension,
    ResultDimensionHeader,
    ResultSpec,
    SimpleMeasureDefinition,
    SimpleMeasureDefinitionMeasure,
    SimpleMeasureDefinitionMeasureAggregationEnum,
    SortKey,
    SortKeyAttribute,
    SortKeyAttributeAttribute,
    SortKeyTotal,
    SortKeyTotalTotal,
    SortKeyTotalTotalDirectionEnum,
    SortKeyValue,
    SortKeyValueValue,
    SortKeyValueValueDirectionEnum,
    SortKeyAttributeAttributeDirectionEnum,
    SortKeyAttributeAttributeSortTypeEnum,
    TotalExecutionResultHeader,
    TotalResultHeader,
    ActionsApiAxiosParamCreator as AfmActionsApiAxiosParamCreator,
    ActionsApiFp as AfmActionsApiFp,
    ActionsApiFactory as AfmActionsApiFactory,
    ActionsApiInterface as AfmActionsApiInterface,
    ActionsApi as AfmActionsApi,
    ActionsApiComputeLabelElementsPostRequest,
    ActionsApiComputeReportRequest,
    ActionsApiComputeValidObjectsRequest,
    ActionsApiExplainAFMRequest,
    ActionsApiRetrieveResultRequest,
    ActionsApiRetrieveExecutionMetadataRequest,
    RestApiIdentifier,
    Total,
    TotalDimension,
    TotalFunctionEnum,
    AttributeFormat,
    ElementsResponseGranularityEnum,
    ActionsApiComputeValidDescendantsRequest,
    AfmValidDescendantsQuery,
    AfmValidDescendantsResponse,
    DependsOn,
    DependsOnDateFilter,
    ValidateByItem,
    ForecastRequest,
    ActionsApiForecastRequest,
    SmartFunctionResponse,
    ActionsApiForecastResultRequest,
    ForecastResult,
    ClusteringRequest,
    ClusteringResult,
    ActionsApiClusteringRequest,
    ActionsApiClusteringResultRequest,
    AttributeHeaderOutAttributeHeaderValueTypeEnum,
    KeyDriversRequest,
    ActionsApiKeyDriverAnalysisRequest,
    KeyDriversResponse,
    ActionsApiKeyDriverAnalysisResultRequest,
    KeyDriversResult,
    KeyDriversRequestSortDirectionEnum,
    KeyDriversDimension,
    KeyDriversDimensionGranularityEnum,
    KeyDriversDimensionValueTypeEnum,
    AnomalyDetectionRequest,
    ActionsApiAnomalyDetectionRequest,
    ActionsApiAnomalyDetectionResultRequest,
    AnomalyDetectionResult,
} from "./generated/afm-rest-api/api.js";
export {
    ActionsApiFactory as AuthActionsApiFactory,
    ActionsApiInterface as AuthActionsApiInterface,
    ActionsApiProcessInvitationRequest,
    Invitation,
} from "./generated/auth-json-api/api.js";
export { Configuration, ConfigurationParameters } from "./generated/auth-json-api/configuration.js";
export * from "./generated/metadata-json-api/api.js";
export {
    ActionsApiCreatePdfExportRequest,
    ActionsApiGetExportedFileRequest,
    ActionsApiGetMetadataRequest,
    ExportResponse,
    TabularExportRequestFormatEnum,
    Settings,
    CustomOverride,
    CustomLabel,
    CustomMetric,
    VisualExportRequest,
    PdfTableStyle,
    PdfTableStyleProperty,
} from "./generated/export-json-api/api.js";

export {
    ActionsApiGetDataSourceSchemataRequest,
    ActionsApiScanDataSourceRequest,
    ActionsApiTestDataSourceDefinitionRequest,
    ActionsApiTestDataSourceRequest,
    DataSourceSchemata,
    DeclarativeColumn as ScanModelDeclarativeColumn,
    DeclarativeColumnDataTypeEnum as ScanModelDeclarativeColumnDataTypeEnum,
    DeclarativeTable as ScanModelDeclarativeTable,
    DeclarativeTables as ScanModelDeclarativeTables,
    ScanRequest,
    ScanResultPdm,
    TableWarning,
    TestDefinitionRequest,
    TestDefinitionRequestTypeEnum,
    TestQueryDuration,
    TestResponse,
    ColumnWarning,
    DataSourceParameter,
    TestRequest,
    ScanSqlResponse,
    ActionsApiScanSqlRequest,
    SqlColumnDataTypeEnum as ScanApiSqlColumnDataTypeEnum,
    SqlColumn as ScanApiSqlColumn,
    ScanSqlRequest,
    ActionsApiColumnStatisticsRequest,
    ColumnStatisticsResponse,
    ColumnStatistic,
    Histogram,
    Frequency,
    ColumnStatisticWarning,
    ColumnStatisticsRequest,
    ColumnStatisticTypeEnum,
    SqlQuery,
    Table,
    ColumnStatisticsRequestStatisticsEnum,
    HistogramBucket,
    HistogramProperties,
    FrequencyBucket,
    FrequencyProperties,
} from "./generated/scan-json-api/api.js";

export {
    ActionsApiAnalyzeCsvRequest,
    ActionsApiDeleteFilesRequest,
    ActionsApiImportCsvRequest,
    ActionsApiListFilesRequest,
    ActionsApiReadFileManifestsRequest,
    ActionsApiStagingUploadRequest,
    AnalyzeCsvRequest,
    AnalyzeCsvRequestItem,
    AnalyzeCsvRequestItemConfig,
    AnalyzeCsvResponse,
    AnalyzeCsvResponseColumn,
    AnalyzeCsvResponseConfig,
    CacheRemovalInterval,
    CacheUsageData,
    CsvConvertOptions,
    CsvConvertOptionsColumnType,
    CsvManifestBody,
    CsvParseOptions,
    CsvReadOptions,
    DeleteFilesRequest,
    GdStorageFile,
    GdStorageFileTypeEnum,
    ImportCsvRequest,
    ImportCsvResponse,
    ImportCsvRequestTable,
    ImportCsvRequestTableSource,
    ImportCsvRequestTableSourceConfig,
    OrganizationCacheSettings,
    OrganizationCacheUsage,
    OrganizationCurrentCacheUsage,
    ReadFileManifestsRequest,
    ReadFileManifestsRequestItem,
    ReadFileManifestsResponse,
    UploadFileResponse,
    WorkspaceCacheSettings,
    WorkspaceCacheUsage,
    WorkspaceCurrentCacheUsage,
} from "./generated/result-json-api/api.js";

export * from "./client.js";

export { jsonApiHeaders, JSON_API_HEADER_VALUE, ValidateRelationsHeader } from "./constants.js";

export {
    MetadataUtilities,
    MetadataGetEntitiesResult,
    MetadataGetEntitiesFn,
    MetadataGetEntitiesOptions,
    MetadataGetEntitiesParams,
    MetadataGetEntitiesThemeParams,
    MetadataGetEntitiesColorPaletteParams,
    MetadataGetEntitiesWorkspaceParams,
    MetadataGetEntitiesUserParams,
} from "./metadataUtilities.js";

export {
    OrganizationUtilities,
    OrganizationGetEntitiesResult,
    OrganizationGetEntitiesSupportingIncludedResult,
    OrganizationGetEntitiesFn,
    OrganizationGetEntitiesParams,
} from "./organizationUtilities.js";

export { ActionsUtilities } from "./actionsUtilities.js";

const defaultTigerClient: ITigerClient = tigerClientFactory(defaultAxios);

export default defaultTigerClient;
