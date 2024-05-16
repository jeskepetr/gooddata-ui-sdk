// (C) 2021-2024 GoodData Corporation
import React, { useCallback } from "react";
import { useIntl } from "react-intl";
import { Bubble, BubbleHoverTrigger, Button } from "@gooddata/sdk-ui-kit";

import { IShareButtonProps } from "./types.js";
import { uiActions, useDashboardDispatch, useDashboardSelector } from "../../../../../model/index.js";
import { HiddenShareButton } from "./HiddenShareButton.js";
import { selectIsShareButtonVisible } from "../selectors.js";

const ALIGN_POINTS_TOOLTIP = [{ align: "bc tr" }];

/**
 * @internal
 */
export function useShareButtonProps(): IShareButtonProps {
    const dispatch = useDashboardDispatch();
    const onShareButtonClick = useCallback(() => dispatch(uiActions.openShareDialog()), [dispatch]);
    const isVisible = useDashboardSelector(selectIsShareButtonVisible);

    return {
        isVisible,
        onShareButtonClick,
    };
}

/**
 * @alpha
 */
export const DefaultShareButton: React.FC<IShareButtonProps> = ({
    isVisible,
    onShareButtonClick,
}): JSX.Element | null => {
    const intl = useIntl();
    const tooltipText = intl.formatMessage({ id: "share.button.tooltip" });

    if (!isVisible) {
        return <HiddenShareButton />;
    }

    return (
        <BubbleHoverTrigger showDelay={100}>
            <Button
                onClick={() => onShareButtonClick()}
                value={intl.formatMessage({ id: "share.button.text" })}
                className={
                    "gd-button-secondary dash-header-share-button s-header-share-button gd-button gd-icon-users"
                }
                ariaLabel={tooltipText}
            />
            <Bubble alignTo="gd-button-secondary dash-header-share-button" alignPoints={ALIGN_POINTS_TOOLTIP}>
                {tooltipText}
            </Bubble>
        </BubbleHoverTrigger>
    );
};
