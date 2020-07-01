import React from "react"


function Search(props) {

    return (
        <div className="container-fluid">


            <header className="col-md-6" >
                <div className="row">

                    <div className="col s6">



                        <h3 className="col-md-6 text-left">Associate Directory</h3>

                    </div>
                    <div className="col-md-6 ">

                        <div className="col-md-6 text-right ">

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
                                className="btn btn-primary"
                                onClick={props.handleSearch} >Search</button>
                        </div>






                    </div>
                </div>
            </header>
        </div >
    )
}

export default Search