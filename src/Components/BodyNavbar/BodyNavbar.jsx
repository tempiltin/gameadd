import React, { useState } from 'react'
import { BiPlusMedical } from "react-icons/bi"
const BodyNavbar = () => {
    const [addgame, setAddGame] = useState(false)

    const [state, setState] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        if (state) {
            setState(false);
        } else {
            setState(true);
        }
    }
    return (
        <>
            <div className="row justify-content-between mt-4">
                <div className="col-auto">
                    <div className="genre">
                        <a href="#!" onClick={handleClick}><BiPlusMedical /> Add genre</a>
                        {
                            state ?
                                <div className="hoverGenre">
                                 <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Strategy</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Fps</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Strategy</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>FPS</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>FPS</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Strategy</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Fps</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>Strategy</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>FPS</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="" id="" /> <span>FPS</span>
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                                </div>
                                : ""
                        }

                    </div>
                </div>
                <div className="col-auto">
                    <input type="text" placeholder='Search' name='search' />
                </div>
            </div>
            <div className="row justify-content-end mt-5">
                <div className="col-auto">
                    {addgame === true ? <button className='AddGame'>Add game</button> : ""}

                </div>
            </div>
        </>
    )
}

export default BodyNavbar