import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-dom';
import LinkButton from './components/LinkButton';
import axios from 'axios';
import ClassRoom from './ClassRoom';

const Dashboard = () => {
    const [classRooms, setClassRooms] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/classrooms').then((res) => {
            if (res.data) setClassRooms(res.data);
        });
    }, []);
    return (
        <>
            <h1 classname="display-text">Examine Your Classes</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
            </p>
            <div className="grid">
                {classRooms.map((r, idx) => (
                    <ClassRoom data={r} />
                ))}
            </div>
        </>
    );
};

export default Dashboard;
