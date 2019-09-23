// (C) 2007-2019 GoodData Corporation
import { getObjectIdFromUri, percentFormatter, unwrap } from "../utils";

describe("getObjectIdFromUri", () => {
    it("should extract object id from uris", () => {
        expect(getObjectIdFromUri("/gdc/md/aadsf234234234324/obj/ABC")).toBe("ABC");
        expect(getObjectIdFromUri("/gdc/md/aadsf234234234324/obj/123/sdfghjkhgfd")).toBe("123");
        expect(getObjectIdFromUri("/gdc/md/aadsf234234234324/obj/DEF_456?XXX")).toBe("DEF_456");
    });

    it("should return null if it cannot find the uri", () => {
        expect(getObjectIdFromUri("/uri/without/objectId")).toBe(null);
    });
});

describe("percentFormatter", () => {
    it.each([["0%", 0], ["49.01%", 49.01], ["100%", 100], ["", null]])(
        'should return "%s" when input is %s',
        (formattedValue: string, value: number) => {
            expect(percentFormatter(value)).toEqual(formattedValue);
        },
    );
});

describe("unwrap", () => {
    it("should unwrap an object", () => {
        expect(unwrap({ key: "value" })).toEqual("value");
    });
});
