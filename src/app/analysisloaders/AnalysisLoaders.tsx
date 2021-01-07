import React, {useState} from 'react';
import {AnalysisLoadingBar, AnalysisLoadingBarState} from './AnalysisLoadingBar'

// noinspection JSUnusedGlobalSymbols These enums are used, just not explicitly.
enum LoadingStage {
    FETCH_CODE,
    ANALYSE_CODE,
    CREATE_REPORTS,
    DONE
}

function loadingStageText(s: LoadingStage): String {
    let enumText = LoadingStage[s];
    let firstLetter = enumText[0]
    let lowercaseTruncatedWithSpace = enumText.toLowerCase().substring(1).replace("_", " ");
    return firstLetter + lowercaseTruncatedWithSpace
}

function useLoadingStages(): [LoadingStage, () => void] {
    const [stage, setStage] = useState<LoadingStage>(LoadingStage.FETCH_CODE);
    const advanceStage = () => {
        if (stage !== LoadingStage.DONE) {
            setStage(stage + 1)
        }
    }
    return [stage, advanceStage]
}

function stageState(stage: LoadingStage, currentStage: LoadingStage): AnalysisLoadingBarState {
    if (stage < currentStage) {
        return AnalysisLoadingBarState.FINISHED
    } else if (stage > currentStage) {
        return AnalysisLoadingBarState.NOT_STARTED
    } else {
        return AnalysisLoadingBarState.STARTED
    }
}

function AnalysisLoaders() {
    let [currentStage, advanceStage] = useLoadingStages();
    let loadingBars = Array.from({length: 4}, (x, i) => i)
        .filter(i => i < LoadingStage.DONE)
        .map(i => <AnalysisLoadingBar
            loadingState={stageState(i, currentStage)}
            text={loadingStageText(i)}/>
        );

    // Actually this hook should be called whenever some websocket connection indicates that there has been progress
    // on the server-side.
    setTimeout(advanceStage, 2000);

    return (
        <div>
            <br/>
            {loadingBars}
        </div>
    );
}

export default AnalysisLoaders;