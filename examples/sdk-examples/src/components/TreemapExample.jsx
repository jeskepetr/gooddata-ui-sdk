// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { Treemap, Model } from "@gooddata/sdk-ui";

import "@gooddata/sdk-ui/styles/css/main.css";

import {
    numberOfChecksIdentifier,
    locationCityDisplayFormIdentifier,
    locationStateDisplayFormIdentifier,
    projectId,
} from "../utils/fixtures";

export class TreeMapExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("TreeMapExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("TreeMapExample onLoadingChanged", ...params);
    }

    render() {
        const numberOfChecks = Model.measure(numberOfChecksIdentifier)
            .format("#,##0")
            .alias("# Checks")
            .localIdentifier("numberOfChecks");

        const locationState = Model.attribute(locationStateDisplayFormIdentifier).localIdentifier(
            "locationState",
        );

        const locationCity = Model.attribute(locationCityDisplayFormIdentifier).localIdentifier(
            "locationCity",
        );

        return (
            <div style={{ height: 300 }} className="s-tree-map">
                <Treemap
                    projectId={projectId}
                    measures={[numberOfChecks]}
                    viewBy={locationState}
                    segmentBy={locationCity}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default TreeMapExample;
