import React from "react";

class Card extends React.Component{
    render(){
        return <div className="card">
            <div className="card-body">
                <h4 className="card-title">hi {this.props.title}</h4>
                <p className="card-text">how are you? {this.props.text}</p>
            </div>
        </div>
    }
}

export default Card;