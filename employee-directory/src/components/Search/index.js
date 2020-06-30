import React from "react"
import "./style.css";

function Search(props) {

    return (
        <div className="container-fluid">


            <header className="z-depth-3 col s12" >
                <div className="row">
                    {/* <header className=" > */}

                    <div className="col s6">



                        <h3 className="right-align headerText">Associate Directory</h3>
                        {/* <h6 className="center-align smallerHeaderText">Use the box down below to narrow your search</h6> */}

                    </div>
                    <div className="col s6 ">

                        <div className="col s6 inputAndButton right-align ">

                            <input
                                onChange={props.handleInputChange}
                                value={props.value}
                                id="employees"
                                type="text"
                                name="search"
                                list="employee"
                                className=" inputBox  "
                                placeholder="Search by name" />


                        </div>
                        <div className="col m4">


                            <button
                                type="submit"
                                value=""
                                className=" btn z-depth-2 waves-effect  searchBttn"
                                onClick={props.handleSearch} >Search</button>
                        </div>






                    </div>
                    {/* </header > */}
                </div>
            </header>
        </div >
    )
}

export default Search