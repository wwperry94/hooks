import React from 'react';

function spinner() {
    return <div style={{ textAlign: "center", marginTop: "6em" }}>
    <div className="spinner-border text-secondary" role="status">
        <span className="sr-only">Loading...</span>
    </div>
</div>
}


// More Utlities below for later...


export { spinner }