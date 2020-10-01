import React, { Component } from 'react';
import axios from 'axios';
import Upload from './Upload/Upload';
import Loading from './Loading/Loading';
import Success from './Success/Success';

class App extends Component {

    state = {
        file: false,
        upload: false
    }

    handleDragEnter = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    
    handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        // let theFile = new FileReader();
        let theFile = e.dataTransfer.files[0];
        this.setState({
            ...this.state,
            file: theFile
        })
    }

    handleInputChange = (e) => {
        this.setState({
            ...this.state,
            file: e.target.files[0]
        })
    }

    fetchPost = (theFormData) => {
        let headers = {

        }
        axios
            .post('https://fileupload-devchallenge.herokuapp.com/upload', theFormData)
            .then(res => {
                this.setState({
                    ...this.state,
                    upload: res.data.uploadLink
                })
            })
    }

    componentDidUpdate() {
        if(typeof this.state.file === "object" && this.state.upload === false) {
            let theFormData = new FormData();
            theFormData.append('image', this.state.file)
            this.fetchPost(theFormData)
        }
    }

    render() {
        console.log(this.state)
        let appControl;
        if(this.state.file) {
            appControl = !this.state.upload
                ? <Loading />
                : <Success link={`https://fileupload-devchallenge.herokuapp.com/uploads/${this.state.upload}`}/>
        } else {
            appControl = <Upload
                handleDragEnter={this.handleDragEnter}
                handleDragLeave={this.handleDragLeave}
                handleDrop={this.handleDrop}
                handleInputChange={this.handleInputChange}
            />
        }
        return (
            <>{ appControl }</>
        )
    }
}

export default App;