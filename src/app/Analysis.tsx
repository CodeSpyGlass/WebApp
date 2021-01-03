import React from 'react';
import {css} from '@emotion/core';
import {GridLoader as Loader} from 'react-spinners';
import './Analysis.css'

interface AnalysisProps {
    triggered: boolean
}

function Analysis(props: AnalysisProps) {
    if (props.triggered) {
        return (
            <div className="Analysis">
                <br/>
                <span className="Analysis-loader">
                    <Loader color="black" loading={true} css={css(
                        "display: block;\n" +
                        "margin: 0 auto;\n" +
                        "padding-right: 10px;" +
                        "padding-top: 3px")} size={5}/>
                    <span>Fetching code</span>
                </span>
            </div>
        );
    } else {
        return <div/>
    }
}

export default Analysis;