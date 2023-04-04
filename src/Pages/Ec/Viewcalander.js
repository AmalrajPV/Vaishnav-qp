import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../Ec css/Viewcalander.css'
function Viewcalander() {
  return (
    <div>
      <div className="title"> View calander</div>
      <div className="calander">
        <Calendar />
      </div>
    </div>
  )
}

export default Viewcalander