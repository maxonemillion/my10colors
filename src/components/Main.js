import React, { useState } from "react";
import { Navbar, Button, Card } from "react-bootstrap"
import "./Main.css"
import getColors from "get-image-colors";



const Main = () => {
    const [file, setFile] = useState(null)
    const [colorized, setColorized] = useState()

    const hiddenInput = React.useRef(null);

    const chooseFile = () => {
        hiddenInput.current.click();
    }



    const handleChange = (event) => {
     
            const uploadedFile = URL.createObjectURL(event.target?.files[0])
            setFile(uploadedFile);
   
        console.log(event)

    }

    const colorize = (e) => {
        getColors(file).then(colors => {
            setColorized(colors.map(color => color.hex()))
        })
        console.log(e)
    }


    return (
        <div>
            {/* ${colorized[0]}, ${colorized[1]}, ${colorized[2]}, ${colorized[3]}, ${colorized[4]} */}
            <Navbar id="navbar">
                <Navbar.Brand href="/">monkë</Navbar.Brand>
            </Navbar>
            <br></br>
            <Button variant="dark" id="uploadBtn" onClick={chooseFile}>upload</Button>
            <br></br>
            <input type="file" id="choose-file" ref={hiddenInput} onChange={handleChange}></input>
            <Button variant="dark" id="goBtn" onClick={colorize}>go</Button>
            <br></br>
            { colorized ? <h1 id="colorsExistHeader">colors</h1> : ""}
            {colorized?.map((color) => {
                return (
                    <div>
                        
                        <Card id="hexCard" style={{ backgroundColor: color }}>
                            <Card.Body>
                            {color}
                        </Card.Body>
                        </Card>
                        
                    </div>
                )
            })}

        </div>
    )
}

export default Main;