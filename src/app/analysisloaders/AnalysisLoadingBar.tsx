import {BeatLoader as Loader} from "react-spinners";
import {css} from "@emotion/core";
import grayCircle from "../greyCircle.svg";
import greenCircle from "../greenCircle.svg";
import React from "react";
import "./AnalysisLoadingBar.css"

enum AnalysisLoadingBarState {
    NOT_STARTED,
    STARTED,
    FINISHED
}

interface AnalysisLoadingBarProps {
    loadingState: AnalysisLoadingBarState,
    text: String
}

function AnalysisLoadingBar(props: AnalysisLoadingBarProps) {
    if (props.loadingState === AnalysisLoadingBarState.STARTED) {
        return (
            <span className="Analysis-loader">
                <Loader color="black" loading={true} css={css(
                    "display: block;\n" +
                    "margin: 0 auto;\n" +
                    "padding-right: 5px;" +
                    "")} size={5}/>
                <span className="In-progress-loading-text">{props.text}</span>
            </span>
        )
    } else if (props.loadingState === AnalysisLoadingBarState.NOT_STARTED) {
        return (
            <span className="Analysis-loader">
                <img className="Not-loading-analysis-loader-icon" src={grayCircle} alt="gray-circle"/>
                <span>{props.text}</span>
            </span>
        )
    } else {
        return (
            <span className="Analysis-loader">
                <img className="Finished-loading-analysis-loader-icon" src={greenCircle} alt="green-circle"/>
                <span>{props.text}</span>
            </span>
        )
    }
}

export {AnalysisLoadingBarState, AnalysisLoadingBar};