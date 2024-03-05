import React from "react";

class Progress extends React.Component{
    // percentage = this.props.percentage;
    // text = this.props.text;

    render(){
        console.log(this.props)
        return      (<div className="progress">
                        <div {...this.props}>
                        </div>
                    </div>)
    }
}

export default Progress;


