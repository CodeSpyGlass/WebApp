import React from 'react';
import {Button, Input} from '@material-ui/core'
import spyglass from './spyglass.png'
import AnalysisLoaders from './analysisloaders/AnalysisLoaders'
import './App.css';
import {useTrigger} from "./useTrigger";

function analysisLoaders(analysisTriggered: boolean): JSX.Element {
    if (analysisTriggered) {
        return <AnalysisLoaders/>;
    } else {
        return <div/>;
    }
}

function App() {
    let [analysisTriggered, triggerAnalysis] = useTrigger();
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: 'white'}}>
                <img src={spyglass} alt="logo"/>
                <p>Enter a GitHub repository URL</p>
                <Input color="primary" type="text" value="https://www.github.com/robmoore-i/LSystems"/>
                <br/>
                <Button color="primary" size="large" variant="contained"
                        onClick={triggerAnalysis}>
                    Analyse
                </Button>
                {analysisLoaders(analysisTriggered)}
            </header>
        </div>
    );
}

export default App;
