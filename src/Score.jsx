import React from 'react'
const Score = ({ score }) => {
    return (
        <>
       <h5>Date: {score.date}</h5>
       <h6>Score: {score.score}</h6>
        </>
        )

}
export default Score