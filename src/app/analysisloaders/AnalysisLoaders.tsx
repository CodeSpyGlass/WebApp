import React from 'react';
import {AnalysisLoadingBar, AnalysisLoadingBarState} from './AnalysisLoadingBar'

interface AnalysisLoadersProps {
    triggered: boolean;
}

function AnalysisLoaders(props: AnalysisLoadersProps) {
    if (props.triggered) {
        return (
            <div>
                <br/>
                <AnalysisLoadingBar loadingState={AnalysisLoadingBarState.FINISHED} text={"Fetching Code"}/>
                <AnalysisLoadingBar loadingState={AnalysisLoadingBarState.STARTED} text={"Analysing Code"}/>
                <AnalysisLoadingBar loadingState={AnalysisLoadingBarState.NOT_STARTED} text={"Creating reports"}/>
            </div>
        );
    } else {
        return <div/>;
    }
}

export default AnalysisLoaders;