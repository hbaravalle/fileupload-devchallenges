import React, { Component } from 'react';

class Upload extends Component {
    inputFile = React.createRef()
    dropRef = React.createRef()
    uploadField = () => {
        this.inputFile.current.click()
    }

    render() {
        return (
            <div className="card card--dad" ref={this.dropRef}>
                <h2>Upload your image</h2>
                <small>File should be jpeg, png...</small>
                <div
                    className="dad"
                    ref={this.dropRef}
                    onDragEnter={this.props.handleDragEnter}
                    onDragLeave={this.props.handleDragLeave}
                    onDrop={this.props.handleDrop}
                >
                    <form action="" encType="multipart/form-data">
                        <label htmlFor="imageUpload" onClick={this.uploadField}>Drag & drop your image here</label>
                        <input style={{display: 'none'}} ref={this.inputFile} type="file" name="imageUpload" id="imageUpload" onChange={this.props.handleInputChange}/>
                    </form>
                </div>
                Or
                <button onClick={this.uploadField}>Choose a file</button>
            </div>
        )
    }
}

export default Upload;