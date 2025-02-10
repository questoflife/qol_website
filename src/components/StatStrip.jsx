import React from 'react';

function StatStrip({ text }) {
    return (
        <div className="stat-strip">
            <span className="highlight-text-green">{text}</span>
        </div>
    );
}

export default StatStrip;