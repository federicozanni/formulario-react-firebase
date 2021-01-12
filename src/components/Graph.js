import React from 'react';
import {Bar} from 'react-chartjs-2';


export default function Graph()  {
    const data = {
        labels: ['Sep 10', 'Oct 12', 'Nov 14 ', 'Dic 16', 'Ene 18'],
        datasets:[
            {
            label:'Usuarios registrados en el ultimo mes',
            backgroundColor: '#7bb6ca',
            hoverBorderColor: '#FF0000',
            data: [90, 100, 80, 69, 70]
        },
        {
             label: 'Usuarios logeados en el ultimo mes',
               data: [47, 52, 67, 58, 9],
               backgroundColor: '#006ba1',
             }
    ]
    };
    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    
    return(
        <div className="Graph" style={{width: '100%', height: '520px'}}>
            <h2>Users</h2>
            <p>Usuarios registrados en los ultimos 30 dias </p>
            <Bar data={data} options={opciones}/>
        </div>
    );
}