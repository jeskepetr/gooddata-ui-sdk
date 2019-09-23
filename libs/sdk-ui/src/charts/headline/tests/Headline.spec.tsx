// (C) 2007-2018 GoodData Corporation
import * as React from "react";
import { shallow } from "enzyme";
import { Headline } from "../Headline";
import { M1 } from "../../tests/fixtures/buckets";
import { CoreHeadline } from "../CoreHeadline";
import { dummyBackend } from "@gooddata/sdk-backend-mockingbird";

describe("Headline", () => {
    it("should render with custom SDK", () => {
        const wrapper = shallow(<Headline workspace="foo" primaryMeasure={M1} backend={dummyBackend()} />);
        expect(wrapper.find(CoreHeadline)).toHaveLength(1);
    });
});
