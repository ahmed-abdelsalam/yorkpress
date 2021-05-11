import React, { useEffect, useState } from 'react';
import { Link } from 'react-dom';
import axios from 'axios';

const Dashboard = () => {
    const [classRooms, setClassRooms] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/classrooms').then((res) => {
            if (res.data) setClassRooms(res.data);
        });
    }, []);
    return (
        <div className="grid">
            {classRooms.map((r, idx) => (
                <div className="card classroom-card" key={idx}>
                    <h2>Class: {r.name}</h2>
                    <h4>School: {r.school}</h4>
                    {/* <button> */}
                    {/* <Link to={`/classroom/${r.id}`}>Assign Homework</Link> */}
                    {/* </button> */}
                </div>
            ))}
            <div></div>
        </div>
    );
};

export default Dashboard;
