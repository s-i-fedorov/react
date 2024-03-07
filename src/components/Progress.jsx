import React from "react";

class Progress extends React.Component{
    percentage = this.props.percentage;

    render(){
        console.log(this.props)
        return      (<div className="progress">
                        <div className='progress-bar'
                             role='progressbar' aria-valuenow='40' aria-valuemin='0'
                             aria-valuemax='100' aria-label='progressbar' style={width: this.percentage+`%`}>
                        </div>
                    </div>)
    }
}

export default Progress;



