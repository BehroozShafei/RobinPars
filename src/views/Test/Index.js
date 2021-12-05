import React, { Component } from 'react'
import axios from 'axios'
export default class Test extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    // RobinPars/tree/main/src/assets/images
    componentDidMount() {
        axios.get('https://api.github.com/repos/BehroozShafei/RobinPars/contents/src/assets/images/')
            .then(function (response) {
                debugger
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                debugger
                console.log(error);
            })
            .then(function () {
                debugger
            });
    }
    render() {
        return (
            <div>
                asdasd
            </div>
        )
    }
}
