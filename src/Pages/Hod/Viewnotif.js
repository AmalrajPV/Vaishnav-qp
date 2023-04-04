import React from 'react'
import '../hod css/Viewnotif.css'
function Viewnotif() {
  const notif = []
  return (
    <div>
        <div className="title"> Notifications</div>
          {(notif.length >0) ? 
          <div className="notification">
            <p>Date :</p>
            <p>Notification :</p>
          </div> :
          <div className="exam-tile no-exam">No new Notifications... !!</div> } 
    </div>
  )
}

export default Viewnotif