import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div className="card card--uploading">
                <h2>Uploading...</h2>
                <div className="loader"></div>
            </div>
        )
    }
}

export default Loading;