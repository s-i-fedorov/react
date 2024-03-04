import React from "react";

class Progress extends React.Component{
    // percentage = this.props.percentage;
    // text = this.props.text;

    render(){
        return      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                             aria-valuemax="100" aria-label="progressbar" style="width: 40%;">
                        </div>
                    </div>
    }
}

export default Progress;


