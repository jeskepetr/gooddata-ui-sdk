// (C) 2022 GoodData Corporation

import { Button } from "../../Button";
import React from "react";
import { useIntl } from "react-intl";
import { IDialogBaseProps } from "../typings";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

/**
 * @internal
 */
export interface IStylingEditorDialogFooterProps extends IDialogBaseProps {
    link: {
        text: string;
        url: string;
    };
    disableSubmit?: boolean;
    showProgressIndicator?: boolean;
}

/**
 * @internal
 */
export const StylingEditorDialogFooter = (props: IStylingEditorDialogFooterProps) => {
    const { link, disableSubmit = false, showProgressIndicator = false, onSubmit, onCancel } = props;
    const intl = useIntl();

    return (
        <div className="gd-styling-editor-dialog-footer">
            <div className="gd-styling-editor-dialog-footer-link">
                <a
                    className="gd-button-link-dimmed gd-icon-circle-question"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    {link.text}
                </a>
            </div>
            {showProgressIndicator && (
                <LoadingSpinner className="gd-dialog-spinner small s-gd-styling-editor-spinner" />
            )}
            <Button
                className="gd-button-secondary s-dialog-cancel-button"
                value={intl.formatMessage({ id: "cancel" })}
                onClick={() => onCancel()}
            />
            <Button
                className="gd-button-action s-dialog-submit-button"
                value={intl.formatMessage({ id: "save" })}
                onClick={() => onSubmit()}
                disabled={disableSubmit}
            />
        </div>
    );
};