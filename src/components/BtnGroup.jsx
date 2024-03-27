import React from "react";

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isPressed: null
        }
    }

    handleClick = (btn) => {
        this.setState({ isPressed: btn })
    }

    render(){

        let isClicked = 'btn btn-primary';
        let notClicked = 'btn btn-secondary';

        return (

            <div className="btn-group" role="group">
                <button type="button" className={
                    this.state.isPressed === 'left' ? isClicked : notClicked + ' left'}
                        onClick={()=>this.handleClick( 'left')}>Left</button>
                <button type="button" className={
                    this.state.isPressed === 'right' ? isClicked : notClicked + ' left'}
                        onClick={()=>this.handleClick('right')}>Right</button>
            </div>

        )
    }
}

export default BtnGroup;