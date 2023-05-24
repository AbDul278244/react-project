import React, { useState } from 'react'

function About() {
    const [btntxt, setBtntxt] = useState("enable dark mode")
    const [data, setData] = useState(
    {
        backgroundColor:"black",
        color:"white",
        // border:"10px solid grey",
        // borderRadius:"30px"
    }
    )
  
    const togglestyle=()=>{
        if(data.color=="white"){
            setData(
                {
                    color:"black",
                    backgroundColor:"white"

                }
                
                )
                setBtntxt("enable light mode")
        }else{
            setData({
                color:"white",
                backgroundColor:"black",
                
            })
            setBtntxt("enable dark mode")
        }


    }

    return ( 
        <div classNameName='container' style={data}>
            <h1 className='my-3'>About us</h1>
            <div className="accordion" id="accordionExample" style={data}>
                <div className="card">
                    <div style={data} className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button style={data} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div style={data} id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div style={data} className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button style={data} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" style={data} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div style={data} className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button style={data} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div style={data} id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={togglestyle} className='btn btn-success my-4'>{btntxt}</button>
        </div>
    )
}

export default About