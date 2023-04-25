import React from 'react'
import img from '../../Assets/logo.png'
import '../Logins/Login.css'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const options = [
        // {value : 0 , label : "select "},
        {value : 0 , label : "HOD"},
        {value : 1 , label : "Exam Controller"},
        {value : 2 , label : "Level Officer"}
    ]
    return (
        <div className="main">
            <div className="nav">
                <div className="optn">
                    <ul>
                        <a href="#"><li>About</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <img src={img} alt="" className='logoimg' />
                </div>
                <div className="user">
                    <div className="head">
                        <h2 id='head'>Question Bank</h2>
                    </div>
                </div>
                <div className="box">
                    <form>
                        <div className="input-row">
                            <label htmlFor="hodid">User:</label>
                            <div className="col-md-6">
                                <Select options={options} className='selection_box'/>
                            </div>
                        </div>
                        <div className="btn">
                            <input className='btn1' type="submit" value="Next" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
