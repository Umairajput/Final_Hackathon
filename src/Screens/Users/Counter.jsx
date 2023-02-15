import React, { useEffect, useState } from 'react'
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { collection, query, addDoc, getDocs } from "firebase/firestore";
import { db, auth } from '../../Firebase/firebase';

function Counter(props) {
    const [count, setCount] = useState(0)
    const [clr, setClr] = useState("white")
    // let title = count
    // const addData = async () => {
    //     await addDoc(collection(db, "counter"), {
    //         counterValue:count,
    //         index:title,
    //     });
    //     alert("Add to cart")
    // }
    // useEffect(()=>{
    //     addData()
    // },[count > count])
    function add() {
        // title = count
        // localStorage.setItem('count',count + 1)
        setCount(count + 1)
        setClr("white")
    }
    function sub() {
        // localStorage.setItem('count',count - 1)
        setCount(count - 1)
    }
    return (
        <div>
            <div className="counter_main">
                <button className='counter_button' onClick={add}><PlusCircleOutlined /></button>
                <span type="text"><p className='number' style={{ color: clr }} title = {count}>{count}</p></span>
                <button className='counter_button' onClick={sub}><MinusCircleOutlined /></button>
            </div>
        </div>
    )
}

export default Counter
