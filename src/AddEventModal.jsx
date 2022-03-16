import React, { Component } from 'react'
import { Button,Form, Modal, Row, Container, Col } from 'react-bootstrap';
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css"

class AddEventModal extends Component {
    state ={EventName:"",EventTime:new Date(),EventType:""}
    
    getModalBody = ()=>{
        return (<Form>
                    <Container>
                        <Row>
                            <Col xs ={4}>
                                <Form.Label>Event Name</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" onChange={this.props.updateName} placeholder="Enter Event Name" />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <br/>
                        <Row>
                            <Col xs ={4}>
                                <Form.Label>Event Time</Form.Label>
                            </Col>
                            <Col>
                                <Datetime onChange={this.props.updateTime}/>
                            </Col>
                        </Row>
                    </Container>
                        <br/>
                    <Container> 
                        <Row>
                            <Col xs ={4}>
                                <Form.Label>Event Name</Form.Label>
                            </Col>
                            <Col>
                                <select onChange={this.props.updateType}>
                                    <option value="1">Event</option>
                                    <option value="2">Meeting</option>
                                    <option value="3">Reminder</option>
                                </select>
                            </Col>
                        </Row>
                    </Container>
            </Form>);
    }
    // getEventObj = ()=>{
    //     return {
    //         "EventName":this.state.EventName,
    //         "EventTime":this.state.EventTime,
    //         "EventType":this.state.EventType
    //     }
    // }
    render() { 
        return  (              
        <Modal show={this.props.openModal} onHide={this.props.closeModal} center>
            <Modal.Header closeButton>
                <Modal.Title>Test Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.getModalBody()}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.closeModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        );
    }
}
 
export default AddEventModal;