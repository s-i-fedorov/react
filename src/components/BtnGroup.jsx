import React from "react";

class BtnGroup extends React.Component{


    render(){
        const a = this.props;
        return (

            <div className="btn-group" role="group">
                <button type="button" className="btn btn-secondary left">Left</button>
                <button type="button" className="btn btn-secondary right">Right</button>
            </div>

        )
    }
}

export default BtnGroup;