
import React from 'react'
import { Label } from 'reactstrap'

class Beer extends React.Component {

    constructor (props){
        super(props)
    }

    render()  {
        const {name, status, increase, decrease} = this.props;

        return (
            <section>
                  <Label>{name}</Label> { } -- { }
                  <Label>{status}</Label>
            </section>
        )
    }
} 

export default Beer;