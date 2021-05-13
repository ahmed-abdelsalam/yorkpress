import React, { useEffect, useState } from 'react';
// import { connect } from "react-redux";
import axios from 'axios';
import { useParams } from 'react-router';
import List from './components/List';
import Modal from './components/Modal';

export const ClassRoom = (props) => {
    const { id } = useParams();
    const [classRoom, setclassRoom] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/classrooms/${id}`).then((res) => {
            if (res.data) setclassRoom(res.data);
        });
    }, []);
    return (
        <div>
            <Modal show={true} handleClose={}>
                <p>Modal</p>
            </Modal>
            <h1 className="display-text">{classRoom.name}</h1>
            <button>Assign Homework</button>
            <h3>Current Homeworks</h3>
            <ul>
                {(classRoom.assignments || []).map((r) => (
                    <li key={r.id}>{`${r.name}`}</li>
                ))}
            </ul>
            <h3>Students</h3>
            <ul>
                {(classRoom.students || []).map((r) => (
                    <List key={r.id}>{`${r.firstName} ${r.lastName}`}</List>
                ))}
            </ul>
        </div>
    );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

export default ClassRoom;
// export default connect(mapStateToProps, mapDispatchToProps)(ClassRoom);
