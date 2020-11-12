import React, {Component} from 'react';


class Person extends Component {

    constructor(props){
        super(props)
    }
    
    render() {
        const nameFromProps = this.props.name
        // console.log(this.props,  'props')
        return (
            <div> Hello from {this.props.name} </div>
        );
    }
}

export default Person;