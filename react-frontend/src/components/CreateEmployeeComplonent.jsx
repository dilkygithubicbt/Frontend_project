import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComplonent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                firstName: '',
                lastName: '',
                emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        //this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employee');
        });
    })

    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employee');
    }

    render() {

        return (
            <div>
                <div className="constainer">
                    <div className= "row">
                        <div className="card col-md-6 offset-md-3 offset-3">
                            <h3 className="text-center"> Add Employee</h3>
                            <div className= "card-body">
                                <form>
                                    <div className= "form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange=
                                        {this.changeFirstNameHandler}/>

                                    </div>
                                    <div className= "form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" value={this.state.lastName} onChange=
                                        {this.changeLastNameHandler}/>

                                    </div>
                                    <div className= "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" value={this.state.emaolId} onChange=
                                        {this.changeEmailIdHandler}/>

                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}> Save</button>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{merginLeft: "10px"}}> Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default CreateEmployeeComplonent;