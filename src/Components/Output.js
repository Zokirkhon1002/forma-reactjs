import React, { Component } from 'react';
import Amaliyot from './form/Amaliyot';
// import Forma from './form/Forma';
class Output extends Component {

    render() { 
        return ( 
            <div>
                {/* <Forma /> */}
                <Amaliyot />
            </div>
         );
    }
}
 
export default Output;