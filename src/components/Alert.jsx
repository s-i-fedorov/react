import React from "react";

class Alert extends React.Component{
    text = this.props.text;
    type = this.props.type;

    render(){
        return <div className={"alert alert-" + this.type} role="alert">{this.text}</div>
    }
}

export default Alert;
