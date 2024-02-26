import React from "react";

class Card extends React.Component{
    title = this.props.title;
    text = this.props.text;

    render(){
        return <div className="card">
            <div className="card-body">
                {this.title ? <h4 className="card-title">{this.title}</h4> : null}
                {this.text ? <p className="card-text">{this.text}</p> : null}
            </div>
        </div>
    }
}

export default Card;