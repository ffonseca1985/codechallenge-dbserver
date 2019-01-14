import React from 'react'
import { Provider } from 'react-redux'
import store from './components/state/store'
import Truck from './components/truck'
import { Container, Row, Col } from 'reactstrap'

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Row>
                        <Col xs='12'>
                            <header>
                                <h1>Code Challenge DbServer</h1>
                            </header>
                        </Col>
                        <Col xs='12'>
                            <Truck />
                        </Col>
                    </Row>
                </Container>
            </Provider>
        )
    }
}

export default App