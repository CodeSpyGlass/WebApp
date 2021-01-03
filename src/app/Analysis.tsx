import React from 'react';

interface AnalysisProps {
    triggered: boolean
}

function Analysis(props: AnalysisProps) {
    if (props.triggered) {
        return (
            <div>Fetching code</div>
        );
    } else {
        return <div/>
    }
}

export default Analysis;