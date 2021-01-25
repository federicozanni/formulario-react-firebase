import React from 'react';
import Header from './Header';
import Graph from './Graph';
import UserSingin from './UserSingin';
import Box from '@material-ui/core/Box';


export default function Menu () {

return (
        <div >
            <Header />

        <div className="container">
            <UserSingin />
            
        <Box mt={5}>
            <Graph /> 
        </Box>

        <Box mt={6} />
            </div>  
        </div>
);
}