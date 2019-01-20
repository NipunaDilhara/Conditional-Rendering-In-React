import React, {Component} from 'react';

class Child2 extends Component{
    
    childFunction=(e)=>{
        e.preventDefault();
        this.props.functionCallFromParent();
    }

    render(){
        return(
            <div>
                <h2>Child 2</h2>
                <button onClick={this.props.functionCallFromParent}>Back</button>
            </div>
        );
    }
}

export default Child2;