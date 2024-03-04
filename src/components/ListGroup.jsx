import React from "react";

class ListGroup extends React.Component{


    render(){
        const {children} = this.props;
        console.log(children)
        return (
            <ul className="list-group">
                {children.map(item => <li className="list-group-item">{item.props.children}</li>)}
        </ul>
        )
    }
}

export default ListGroup;