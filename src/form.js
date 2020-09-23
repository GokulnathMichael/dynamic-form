import React, { Component } from 'react';
import axios from "axios";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formValue: {
                username: "",
                address: "",
                age: "",
                sex: "male",
                phonenumber: "",
              },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchUsers() {
        axios
          .get(
            "https://usermainapp.herokuapp.com/getformfields"
          )
          .then((d) => d.data)
          .then((d) => this.setState({ users: d.Content}))
      }

    componentDidMount() {
        this.fetchUsers();
    }

    handleChange(event) {
        this.setState({formValue: event.target.value});
    }

    handleSubmit(event) {
        alert('Success: ' + this.state.formValue);
        event.preventDefault();
    }

    

    render() {
        return(
            <div className="dynamic-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>User Name :</label>
                        <input 
                            type="text" 
                            name="username" 
                            value={this.state.formValue.username} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Residential Address :</label>
                        <input 
                            type="text" 
                            name="address" 
                            value={this.state.formValue.address} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>User Age :</label>
                        <input 
                            type="number" 
                            name="age" 
                            value={this.state.formValue.age} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <label>Gender :</label>
                        <select name="sex" value={this.state.formValue.sex} onChange={this.handleChange} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Phone Number :</label>
                        <input 
                            type="text" 
                            name="phonenumber" 
                            value={this.state.formValue.phonenumber} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="field">
                        <input type="submit" value={this.state.handleSubmit}  />
                    </div>
                </form>
            </div>
        );
    }
}