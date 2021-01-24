import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function Graph()  {
    const data = {
        labels: ['Sep 10', 'Oct 12', 'Nov 14 ', 'Dic 16', 'Ene 18'],
        datasets:[
            {
            label:'Users registered in the last month',
            backgroundColor: '#7bb6ca',
            hoverBorderColor: '#FF0000',
            data: [90, 100, 80, 69, 70]
        },
        {
             label: 'Users logged in in the last month',
               data: [47, 52, 67, 58, 9],
               backgroundColor: '#006ba1',
             }
    ]
    };
    const options = {
        maintainAspectRatio: false,
        responsive: true
    }
    
    return(
        <div className="Graph" style={{width: '100%', height: '520px'}}>
            <h4>Registered users in the last 30 days</h4>
            <Bar data={data} options={options}/>
        </div>
    );
}