import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends Component {
    render(){
        return (
            <h1>Hello world!</h1>
        )
    }
}

ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById("root")
);