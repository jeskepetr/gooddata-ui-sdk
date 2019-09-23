// (C) 2019 GoodData Corporation
import {
    getSupportedPropertiesControls,
    getSupportedProperties,
    getReferencePointWithSupportedProperties,
    removeImmutableOptionalStackingProperties,
    isDualAxisOrSomeSecondaryAxisMeasure,
} from "../propertiesHelper";
import {
    emptyReferencePoint,
    simpleStackedReferencePoint,
    twoMeasureBucketsReferencePoint,
    measuresOnSecondaryAxisAndAttributeReferencePoint,
    oneMetricAndCategoryAndStackReferencePoint,
} from "../../mocks/referencePointMocks";
import {
    simpleStackedBaseUiConfig,
    multipleMetricsAndCategoriesBaseUiConfig,
} from "../../mocks/uiConfigMocks";
import { OPTIONAL_STACKING_PROPERTIES } from "../../constants/supportedProperties";
import { IExtendedReferencePoint, IBucketItem } from "../../interfaces/Visualization";

describe("propertiesHelper", () => {
    describe("getSupportedPropertiesControls", () => {
        const defaultControls = {
            propA: {
                foo: "bar",
                bar: "foo",
            },
            propB: {
                foo: "bar",
            },
            foo: "bar",
        };

        it("should return empty object if no supported properties list is defined", () => {
            expect(getSupportedPropertiesControls(null, null)).toEqual({});
        });

        it("should return empty object when supported properties list is empty", () => {
            expect(getSupportedPropertiesControls(defaultControls, [])).toEqual({});
        });

        it("should return every property if highest level is defined", () => {
            const supportedPropertiesList = ["propA", "propB", "foo"];

            expect(getSupportedPropertiesControls(defaultControls, supportedPropertiesList)).toEqual(
                defaultControls,
            );
        });

        it("should return only properties parts which are defined in supported properties list", () => {
            const supportedPropertiesList = ["propA.foo", "foo"];

            const expectedSupportedProperties = {
                propA: {
                    foo: "bar",
                },
                foo: "bar",
            };

            expect(getSupportedPropertiesControls(defaultControls, supportedPropertiesList)).toEqual(
                expectedSupportedProperties,
            );
        });
    });

    describe("getSupportedProperties", () => {
        it("should return empty object when properties are null", () => {
            const result = getSupportedProperties(null, []);
            expect(result).toEqual({});
        });

        it("should return empty object when properties do not have controls", () => {
            const result = getSupportedProperties({}, []);
            expect(result).toEqual({});
        });

        it("should return object with only supported controls", () => {
            const properties = {
                properties: {
                    controls: {
                        supported: "abc",
                        unsupported: "xyz",
                    },
                },
            };
            const supported = ["supported"];

            const expected = {
                controls: {
                    supported: "abc",
                },
            };

            const result = getSupportedProperties(properties, supported);

            expect(result).toEqual(expected);
        });
    });

    describe("getReferencePointWithSupportedProperties", () => {
        it("should return reference point with pith properties with only sort items", () => {
            const referencePoint = {
                ...emptyReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
                properties: {
                    sortItems: ["sortItem"],
                    controls: {},
                },
            };
            const expected = {
                ...emptyReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
                properties: {
                    sortItems: ["sortItem"],
                },
            };

            const result = getReferencePointWithSupportedProperties(referencePoint, []);

            expect(result).toEqual(expected);
        });

        it("should return properties with controls", () => {
            const referencePoint = {
                ...emptyReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
                properties: {
                    controls: {
                        testProperty: "value",
                    },
                },
            };
            const expected = referencePoint;

            const result = getReferencePointWithSupportedProperties(referencePoint, ["testProperty"]);

            expect(result).toEqual(expected);
        });
    });

    describe("removeImmutableOptionalStackingProperties", () => {
        it("should remove both stackMeasures and stackMeasuresToPercent when all bucket is empty", () => {
            const extendedReferencePoint = {
                ...emptyReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
            };
            const result = removeImmutableOptionalStackingProperties(
                extendedReferencePoint,
                OPTIONAL_STACKING_PROPERTIES,
            );
            expect(result).toEqual([]);
        });

        it("should remove both stackMeasures and keep stackMeasuresToPercent when stack attribute existed", () => {
            const extendedReferencePoint = {
                ...simpleStackedReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
            };
            const result = removeImmutableOptionalStackingProperties(
                extendedReferencePoint,
                OPTIONAL_STACKING_PROPERTIES,
            );
            expect(result).toEqual(["stackMeasuresToPercent"]);
        });

        it("should keep both stackMeasures and stackMeasuresToPercent when have many measures", () => {
            const extendedReferencePoint: IExtendedReferencePoint = {
                ...twoMeasureBucketsReferencePoint,
                uiConfig: multipleMetricsAndCategoriesBaseUiConfig,
            };
            const result = removeImmutableOptionalStackingProperties(
                extendedReferencePoint,
                OPTIONAL_STACKING_PROPERTIES,
            );
            expect(result).toEqual(OPTIONAL_STACKING_PROPERTIES);
        });
    });

    describe("isDualAxisOrSomeSecondaryAxisMeasure", () => {
        it("should return true if dualAxis is false but secondary measure item has showOnSecondaryAxis", () => {
            const extendedReferencePoint: IExtendedReferencePoint = {
                ...measuresOnSecondaryAxisAndAttributeReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
                properties: {
                    controls: {
                        dualAxis: false,
                    },
                },
            };

            const secondaryMeasures: IBucketItem[] = [
                {
                    localIdentifier: "item1",
                    showOnSecondaryAxis: false,
                },
                {
                    localIdentifier: "item2",
                    showOnSecondaryAxis: true,
                },
            ];

            expect(isDualAxisOrSomeSecondaryAxisMeasure(extendedReferencePoint, secondaryMeasures)).toEqual(
                true,
            );
        });

        it("should return false if dualAxis is false or secondary measure item hasn't showOnSecondaryAxis", () => {
            const extendedReferencePoint: IExtendedReferencePoint = {
                ...oneMetricAndCategoryAndStackReferencePoint,
                uiConfig: simpleStackedBaseUiConfig,
                properties: {
                    controls: {
                        dualAxis: false,
                    },
                },
            };

            const secondaryMeasures: IBucketItem[] = [
                {
                    localIdentifier: "item1",
                    showOnSecondaryAxis: false,
                },
                {
                    localIdentifier: "item2",
                    showOnSecondaryAxis: false,
                },
            ];

            expect(isDualAxisOrSomeSecondaryAxisMeasure(extendedReferencePoint, secondaryMeasures)).toEqual(
                false,
            );
        });
    });
});
