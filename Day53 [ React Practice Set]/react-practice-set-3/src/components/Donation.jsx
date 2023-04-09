import React from 'react'

export const Donation = ({donationData}) => {
  return (
    <div className='box'>
        <h1>donation</h1>
        <h2>total donation collected : ${donationData.reduce((total, {Donation}) => total + Donation , 0)}</h2>
    </div>
  )
}
