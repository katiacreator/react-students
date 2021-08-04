import React from 'react'
import Score from "./Score";
const Student = ({student}) => {
    return (
        <>
        <h4>{student.name}</h4>
        <h6>{student.bio}</h6>
        {student.scores.map(score => 
            <Score score={score}/>
            )}
        </>
        )

}
export default Student