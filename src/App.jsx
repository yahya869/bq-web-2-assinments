import { useState } from "react"
import { CirclePlus } from "lucide-react";
import { CircleMinus } from "lucide-react";
import { RotateCcw } from "lucide-react";
import './App.css'

export default function App() {
    const [num, setnum] = useState(0)
    function increment() {
        setnum(num + 1)
    }
    function decrement() {
        if (num === 0) {
            return
        } else {
            setnum(num - 1)
        }
    }
    function incrementFive() {
        setnum(num + 5)
    }
    function decrementFive() {
        if (num <= 5) {
            setnum(0)
            //    return 0;
        } else {
            setnum(num - 5)
        }
    }
    function reset() {
        setnum(0)
    }
    return (
        <>
            <div className="container">
              
                <h2><b>Web-App</b></h2><br />
                <h1 className="h1"><b>COUNTER</b></h1><br /><br />
                <h1> <b>{num}</b></h1><br /><br /><br />
                <div className="buttons">
                    <button className="b1" onClick={increment}><CirclePlus  /></button> &nbsp;
                    <button className="b2" onClick={decrement}><CircleMinus  /></button><br />&nbsp;
                    <button className="b3" onClick={incrementFive}><b>+ 5</b></button>&nbsp;
                    <button className="b4" onClick={decrementFive}><b>- 5</b></button><br />&nbsp;
                    <button className="b5" onClick={reset}><RotateCcw  /></button>
                </div>
            </div>
        </>
    )
}








