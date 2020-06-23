// (C) 2007-2020 GoodData Corporation

import { IScenario, WorkspaceType } from "../../src";
import process from "process";
import path from "path";
import fs from "fs";

export type SupportedDefinitionTypes = "executions" | "insights";

type DefinitionStores = {
    [E in SupportedDefinitionTypes]: {
        [E in WorkspaceType]: string;
    };
};

const StoreEnvVar = "GDC_STORE_DEFS";
const Stores: DefinitionStores | undefined = initializeStores();

function initializeStores(): DefinitionStores | undefined {
    const rootDir = process.env[StoreEnvVar];

    if (!rootDir) {
        // tslint:disable-next-line:no-console
        console.warn(
            `The smoke-and-capture suite is not configured with store root. The suite will run but will not store any recording definitions.`,
        );

        return;
    }

    return {
        executions: {
            "live-examples-workspace": initializeStore(rootDir, "live-examples-workspace", "executions"),
            "reference-workspace": initializeStore(rootDir, "reference-workspace", "executions"),
        },
        insights: {
            "live-examples-workspace": initializeStore(rootDir, "live-examples-workspace", "insights"),
            "reference-workspace": initializeStore(rootDir, "reference-workspace", "insights"),
        },
    };
}

function initializeStore(
    rootDir: string,
    workspaceType: WorkspaceType,
    defType: SupportedDefinitionTypes,
): string {
    /*
     * construct full path to a store. the src/recordings/uiTestScenarios is standard path in the
     * different workspace projects
     */
    const dir = path.join(rootDir, workspaceType, "src", "recordings", "uiTestScenarios", defType);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });

        return dir;
    }

    if (!fs.statSync(dir).isDirectory()) {
        // tslint:disable-next-line:no-console
        console.error(
            `Path ${dir} already exists but is not a directory. Not going to store any definitions.`,
        );

        throw new Error();
    }

    return dir;
}

/**
 * Locates target directory where the recording definition for the provided scenario should be stored. Returns
 * `undefined` if not possible to determine - for instance of the stores root location is not provided via the
 * env variable
 *
 * @param scenario
 * @param defType
 */
export function storeDirectoryFor(
    scenario: IScenario<any>,
    defType: SupportedDefinitionTypes,
): string | undefined {
    return Stores && Stores[defType][scenario.workspaceType];
}

/*
 * Initialize on import
 */
initializeStores();
