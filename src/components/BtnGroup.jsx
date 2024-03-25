import React from "react";
import cn from 'classnames';

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // isPressed: false,
            btnClasses: 'btn btn-secondary'
        }
    }

    handleClick = () => {
        this.setState({ bntClasses: 'btn btn-primary' })
        console.log(this.state)
}

    render(){
        // let isPressed = false;

        // const btnClasses = cn('btn', {
        //     'btn-secondary': !this.state.isPressed,
        //     'btn-primary': this.state.isPressed
        // })

        // let btnClasses2 = 'btn btn-secondary'
        // const pressHandl = function (){
        //     btnClasses2 = 'btn btn-primary'
        //     console.log('hello');
        //     return btnClasses2
        // }

        return (

            <div className="btn-group" role="group">
                <button type="button" className={this.state.btnClasses + ' left'} onClick={this.handleClick}>Left</button>
                <button type="button" className={this.state.btnClasses + ' right'} >Right</button>
            </div>

        )
    }
}

export default BtnGroup;