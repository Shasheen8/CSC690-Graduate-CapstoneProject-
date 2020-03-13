import React, { useState } from 'react';

const Course = ({ name, instructor, room, id }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{instructor}</h4>
            <h5>{room}</h5>
            <h6>{id}</h6>
        </div>
    );
};


export default Course;