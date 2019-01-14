
import React from 'react'
import { Label, Button } from 'reactstrap'

class Beer extends React.Component {

    constructor (props){
        super(props)
    }

    render()  {
        const {name, minTemp, maxTemp, increase, decrease} = this.props;

        return (
            <section>
                  <Label>{name}</Label>
                  <Label>Min. temperature: {minTemp}</Label>
                  <Label>Max. temperature: {maxTemp}</Label>
            </section>
        )
    }
} 

export default Beer;