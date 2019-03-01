import React, { Component} from 'react';
import FormComponent from './FormComponent';
import axios from 'axios';
import './FormStyles.css'

class FormView extends Component {
    state = {
        user: {
            username: '',
            password: ''
        },
        isRegistering: false
    }
    handleChanges = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        const user = this.state.user
        if(user.username && user.password) {
            if(this.isRegistering){
                
            } else{
                console.log(user)
                axios.post('http://localhost:3300/api/login', user)
                    .then(res => {
                        localStorage.setItem('jwt', res.data.token)
                        this.props.history.push('/jokes')
                    })
                    .catch(err => console.log(err))
            }
        } else {
            alert('Please enter a valid username and password')
        }
       
    }
    render(){
        return(
            <FormComponent user={this.state.user} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} isRegistering={this.state.isRegistering}/>
        )
    }
}

export default FormView