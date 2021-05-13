import React, { useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
// import Select from 'react-select';
import axios from 'axios';
import { useParams } from 'react-router';
import List from './components/List';
import Modal from './components/Modal';
import './ClassRoomDetails.css';

const assignmentOptions = async () => {
    const res = await axios.get('http://localhost:3000/assignments');
    let result = [];
    if (res.data) {
        result = res.data.map((r) => ({
            value: r.id,
            label: r.name,
        }));
    }
    return new Promise((resolve) => resolve(result));
    // return new Promise(async (resolve) => {
    //     console.log('failed sdfsdfsfd');
    //     // resolve(result);
    //     resolve([{ value: 'a', label: 'a' }]);
    // });
};
export const ClassRoom = (props) => {
    const { id } = useParams();
    const [classRoom, setclassRoom] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:3000/classrooms/${id}`).then((res) => {
            if (res.data) setclassRoom(res.data);
        });
    }, [id]);

    const handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        // this.setState({ inputValue });
        return inputValue;
    };

    return (
        <div>
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <div className="conainer">
                    <h3>Select Assignment</h3>
                    <AsyncSelect
                        isMulti
                        isLoading
                        isOptionSelected
                        defaultValue="1"
                        autoLoad
                        name="assignments"
                        // onMenuOpen={onMenuOpen}
                        // onInputChange={handleInputChange}
                        loadOptions={assignmentOptions}
                        classNamePrefix="select"
                    />
                    <button>Create New & Assign</button>
                </div>
                <p>Modal</p>
            </Modal>
            <h1 className="display-text">{classRoom.name}</h1>
            <button onClick={() => setShowModal(true)}>Assign Homework</button>
            <h3>Select Assignement</h3>
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
