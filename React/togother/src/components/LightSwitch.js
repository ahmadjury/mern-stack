import React, { Component } from 'react';
                
                
class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "On"
            
        };
    
    }
    flipSwitch = () => {
        if (this.state.position === "on" ) {
            this.setState({position:"off"});
         } else {
            this.setState({position:"on"});
        }
     }

    render() {
        return (
            <fieldset>
              the light switch is  {this.state.position}
              <button onClick = {this.flipSwitch}>switch light</button>
            </fieldset>
     
        );
        
    }
    
}
                
export default LightSwitch;