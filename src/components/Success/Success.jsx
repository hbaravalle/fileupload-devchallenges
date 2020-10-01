import React, { Component } from 'react';

class Success extends Component {
    theLink = React.createRef();
    copyToClipboard = () => {
        console.log(this.theLink.current)
        console.log(this.theLink.current.select())
        document.execCommand("copy")
        document.getSelection().removeAllRanges()
    }
    render() {
        return (
            <div className="card card--success">
                <i className="material-icons">check_circle</i>
                <h2>Uploaded Successfully!</h2>
                <img src={this.props.link} alt=""/>
                <div className="link-clipboard">
                    <input ref={this.theLink} type="text" value={this.props.link} readOnly />
                    <button onClick={this.copyToClipboard}>Copy&nbsp;link</button>
                </div>
            </div>
        )
    }
}

export default Success;