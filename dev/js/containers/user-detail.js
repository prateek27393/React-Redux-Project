import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(
                <div>Select a user...</div>
            )
        }
        
        return(
            <div>
                <h3>Full Name : {this.props.user.first} {this.props.user.last}</h3>
                <h3>Job Title : {this.props.user.jobTitle} </h3>
                <h3>Email : {this.props.user.email} </h3>
                <h3>Contact number : {this.props.user.phone} </h3>
                <h3>Address : {this.props.user.Address} </h3>
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser
    };
}


export default connect(mapStateToProps)(UserDetail);
