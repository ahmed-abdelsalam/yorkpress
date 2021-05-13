import React, { useEffect, useState } from 'react';
// import { connect } from "react-redux";
import axios from 'axios';
import { useParams } from 'react-router';
import LinkButton from './components/LinkButton';
import './ClassRoom.css';
export const ClassRoom = ({ data }) => {
    return (
        <div className="card classroom-card" key={data.id}>
            <img
                src="/img/kinderGarten.jpg"
                className="cover"
                alt="cover image"
            />
            <div class="card-body">
                <h2>Class: {data.name}</h2>
                <h4>School: {data.school}</h4>
                <button class="full">
                    <LinkButton
                        classnme="bg-light-yellow"
                        to={`/classrooms/${data.id}`}
                    >
                        Assign Homework
                    </LinkButton>
                    {/* <Link to={`/classrooms/${data.id}`}>Assign Homework</Link> */}
                </button>
            </div>
        </div>
    );
};

export default ClassRoom;
