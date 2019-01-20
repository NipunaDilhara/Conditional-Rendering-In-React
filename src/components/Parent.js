import React, {Component} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends Component{

    constructor(props){
        super(props);
        this.state={
            first_component:true
        }
    }

    parentFunction=()=>{
        if(this.state.first_component){
            this.setState({first_component:false});
        } else{
            this.setState({first_component:true});
        }
        
    }

    
    render(){
        const first_component=this.state.first_component;
        let component;

        if(first_component){
            component=<Child1 functionCallFromParent={this.parentFunction.bind(this)}/>;
        }else{
            component=<Child2 functionCallFromParent={this.parentFunction.bind(this)}/>;
        }

        return(
            <div>
                {component}
            </div>
        );
    }
}

export default Parent;