import React, { useState } from 'react'; 
import Course from './Course.js';
import './App.css'


// Home Page. This is a dummy page as of yet. This page will contain the list of faculty or individuals, and using their credentials a 
//particular user will be able to connect to them in the chat room. 

const Courselist = () => {
    const [courses, setCourses] = useState([
        {
            name: 'Computer Science',
            instructor: 'Cristiano Ronaldo ',
            room: 'room 1',
            id: 1
        }
        
    ]);

    return (
        <div className="courselist">
        {courses.map(course => (
            <Course name={course.name} instructor={course.instructor} room={course.room} key={course.id}/>
            ))}
        </div>
    );
};

export default Courselist;
