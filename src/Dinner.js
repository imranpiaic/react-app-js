import React from 'react';

function Dinner (props) {
    return(
    <div>    
        <h1>Today we are attending {props.sessionName}</h1>
        <h1>Student Name: {props.studentName}</h1>
        <h1>Course Name: {props.courseName}</h1>
        <h1>Topic: {props.topicName}</h1>
        <h1>Teachers Name: {props.teachersName}</h1>    
    </div>   
    )

}
export default Dinner;