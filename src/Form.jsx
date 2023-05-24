import React, { useState } from 'react'

function Form(props) {
    const [text, setText] = useState("enter your text here")

    const handleClick = () => {
        console.log("handleclicked" + text)
        let newtxt = text.toUpperCase()
        setText(newtxt)


    }

    const handleOnchange = (e) => {
        setText(e.target.value)

    }

    const handleClicklower = () => {
        setText(text.toLowerCase())

    }
    const handleClickclear=()=>{
        setText("")
    } 

    return (
        <>
            <div>

                <h1>{props.txt}</h1>
                <div className="mb-3">

                    <textarea onChange={handleOnchange} value={text} className="form-control" id="myBox" rows="12"> </textarea>

                </div >

                <div className='container '>

                <button onClick={handleClick} type="submit" className="btn btn-primary mx-3">convert to uppercase</button>
                <button onClick={handleClicklower} type="submit" className="btn btn-primary mx-3">convert to lowercase</button>
                <button onClick={handleClickclear} type="submit" className="btn btn-primary mx-3">clear text</button>

                </div>


            </div>
            <div className='container my-5'>
                <h1>text summary</h1>
                <h3>your text have {text.split(" ").length} word and {text.length} character </h3>
                <p>it will take {0.008 * text.split(" ").length}minutes to read</p>
                <h2>preview of your text</h2>
                <p>{text}</p>

            </div>
        </>


    )
}


export default Form