import React, {Component} from 'react';

class Child1 extends Component{

    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent();
    }

    render(){
        return(
            <div>   
                <h2>Child 1</h2>
                <button onClick={this.props.functionCallFromParent}>Click</button>
            </div>
        );
    }
}

export default Child1;


