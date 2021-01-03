import React from 'react';
import {css} from '@emotion/core';
import {BeatLoader as Loader} from 'react-spinners';
import './AnalysisLoaders.css'
import grayCircle from "./greyCircle.svg"
import greenCircle from "./greenCircle.svg"

enum LoadingState {
    NOT_STARTED,
    STARTED,
    FINISHED
}

interface AnalysisLoaderProps {
    loadingState: LoadingState,
    text: String
}

function AnalysisLoader(props: AnalysisLoaderProps) {
    if (props.loadingState === LoadingState.STARTED) {
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
    } else if (props.loadingState === LoadingState.NOT_STARTED) {
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

interface AnalysisLoadersProps {
    triggered: boolean;
}

function AnalysisLoaders(props: AnalysisLoadersProps) {
    if (props.triggered) {
        return (
            <div>
                <br/>
                <AnalysisLoader loadingState={LoadingState.FINISHED} text={"Fetching Code"}/>
                <AnalysisLoader loadingState={LoadingState.STARTED} text={"Analysing Code"}/>
                <AnalysisLoader loadingState={LoadingState.NOT_STARTED} text={"Creating reports"}/>
            </div>
        );
    } else {
        return <div/>;
    }
}

export default AnalysisLoaders;