import React from 'react';
import { Redirect } from 'react-router';
import Lecturer from './Lecturer';
import Student from './Student';


const Dashboard = ( ) => {

  const userType = JSON.parse(localStorage.getItem('userType'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  if(admin.admin){
    return<Lecturer />
  }
  if(userType.type === 'user'){
    return <Student />
  }

  return <Redirect to={{pathname: '/login'}} />
}
export default Dashboard;