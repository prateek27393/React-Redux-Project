import React from 'react';
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';


const App = () => (
    <div className='container'>
        <div className='userList'><h1>UserName List : </h1><UserList /></div>
        
        
        <div className='userDetail'><h1>User Details : </h1><UserDetail /></div>
        
    </div>
);

export default App;