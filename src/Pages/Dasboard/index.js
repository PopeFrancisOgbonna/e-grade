import React from 'react';
import { Redirect } from 'react-router';
import Lecturer from './Lecturer';
import Student from './Student';


const Dashboard = ( ) => {

    const userType = localStorage.getItem('userType');
    const admin = localStorage.getItem('admin');
    if(admin){
        return<Lecturer />
    }
    if(userType === 'user'){
        return <Student />
    }

    return <Redirect to={{pathname: '/login'}} />
}
export default Dashboard;