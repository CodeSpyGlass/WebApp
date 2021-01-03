import React from 'react';

interface AnalysisProps {
    triggered: boolean
}

function Analysis(props: AnalysisProps) {
    if (props.triggered) {
        return (
            <div className="Analysis">
                <br/>
                <span>Fetching code</span>
            </div>
        );
    } else {
        return <div/>
    }
}

export default Analysis;