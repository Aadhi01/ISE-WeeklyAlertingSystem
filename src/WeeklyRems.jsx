import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';
import AddEventModal from './AddEventModal';

// import { MongoClient } from 'mongodb';


class WeeklyRems extends Component {
    state = { openModal:false, Events:[], _Event: {Type:"Event"}, mongoDBConnected: false, client:{}, App:{}} 
    constructor(props) {
        super(props);  
        this.setState({App:props.App})
    }
    // loadMongo = ()=>{
    //     if(!this.state.mongoDBConnected){
    //         const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
    //         MongoClient.connect(uri, function(err, client) {
    //             const collection = client.db("test").collection("devices");
    //             // perform actions on the collection object
    //             // client.close();
    //             debugger;
    //             this.setState({client})
    //         });
    //     }
    // }
    getDisplayTime = (time)=>{
        return time.toDateString() + " "+ time.toLocaleTimeString();
    }
    getTableContent = ()=>{
        return (<Table style={{width:"80%", marginTop:40}} striped bordered hover size="sm">
            
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Event Name</th>
                        <th>Schedule Info</th>
                        <th>Event Type</th>
                        </tr>
                    </thead>
                    {this.getTableBody()}
                </Table>)
    }
    getTableBody = ()=>{
        debugger;
        return (<tbody>{this.state.Events.map((event,index)=>(<tr><td>{index+1}</td><td>{event.Name}</td><td>{this.getDisplayTime(event.Time)}</td><td>{event.Type}</td></tr>))}</tbody>)
    }
    addToListAndClose = () =>{
        debugger;
        var exisitngEvents = this.state.Events;
        exisitngEvents.push(this.state._Event);
        this.setState({Events:exisitngEvents, _Event:{Type:"Event"},openModal:false});
    }
    
    updateName = e=>{
        var {_Event} = this.state;
        _Event.Name = e.target.value;
        this.setState({_Event})
    }

    updateTime = dateTime=>{
        var {_Event} = this.state;
        _Event.Time = dateTime._d;
        this.setState({_Event})
    }

    getType = (val)=>{
        var finalState = "";
        switch(parseInt(val)){
            case 1:
                finalState = "Reminder";
                break;
            case 2:
                finalState = "Meeting";
                break;
            default:
                finalState = "Event";
        }
        return finalState;
    }
    updateType = e=>{
        var {_Event} = this.state;
        _Event.Type = this.getType(e.target.value);
        this.setState({_Event})
    }

    clearTemp =()=>{
        this.setState({_Event:{Type:"Event"}, openModal:false})
    }

    render() { 
        // this.loadMongo();
        return (
            <div>
                <div style={{marginTop:40, marginLeft:50}}>
                    <Button onClick={() =>this.setState({openModal:true})}>Add New Event</Button>
                </div>
                    <AddEventModal 
                        openModal={this.state.openModal} 
                        closeModal={this.clearTemp} 
                        updateName={this.updateName} 
                        updateTime={this.updateTime} 
                        updateType={this.updateType} 
                        saveChanges={this.addToListAndClose}/> 
                    {this.getTableContent()}
            </div>
            );
    }
}
export default WeeklyRems;