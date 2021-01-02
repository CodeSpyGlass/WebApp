import React from 'react';
import spyglass from './spyglass.png'
import {Button, Input} from '@material-ui/core'
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: 'white'}}>
                <img src={spyglass} alt="logo"/>
                <p>Enter a GitHub repository URL</p>
                <Input color="primary" type="text" value="https://www.github.com/robmoore-i/LSystems"/>
                <br/>
                <Button color="primary" size="large" variant="contained">Analyse</Button>
            </header>
        </div>
    );
}

export default App;
