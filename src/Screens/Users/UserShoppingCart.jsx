import React, { useState, useEffect } from "react";
import { PlusCircleOutlined, MinusCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import { UserFooter } from "../../Components";
import profile from '../../Assets/Images/Profile.png'
import DeleteIcon from '@mui/icons-material/Delete';
import meat from '../../Assets/Images/meat.jpeg'
import { collection, query, addDoc, getDocs, orderBy } from "firebase/firestore";
import { db, auth } from '../../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
import Counter from "./Counter";

function UserShoppingCart(props) {
  const [data, setData] = useState([])
  // const [count, setCount] = useState(0)
  const [userUid, setUserUid] = useState()
  // const [clr, setClr] = useState("white")
  let title = props
  console.log('title',title)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      setUserUid(user?.uid)
    } else {
      // User is signed out
      // ...
    }
  });

  const getData = async () => {
    let FirebaseData = []
    const q = query(collection(db, "UserAddCarts"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      FirebaseData.push(doc.data())
      setData(FirebaseData)
    });
  }
  // let getCount = localStorage.getItem('count')
  // console.log('count', getCount)
  console.log("data==>", data)
  useEffect(() => {
    getData()
  }, [])
  // function add() {
  //   localStorage.setItem('count', count + 1)
  //   setCount(count + 1)
  //   setClr("white")
  // }
  // function sub() {
  //   localStorage.setItem('count', count - 1)
  //   setCount(count - 1)
  // }
  // const Counter = () => (
  //   <div className="counter_main">
  //     <button className='counter_button' onClick={add}><PlusCircleOutlined /></button>
  //     <span type="text"><p className='number' style={{ color: clr }}>{count}</p></span>
  //     <button className='counter_button' onClick={sub}><MinusCircleOutlined /></button>
  //   </div>
  // )
  return (
    <>

      <img className="shopping_proifle" src={profile} alt="" />
      <div className="shpping_div">
        <div className="shopping_cart_div">
          <div className="shopping_cart_heading">
            <h1>Shopping</h1>
            <p>Cart</p>
          </div>
          <div className="shopping_icon"><DeleteIcon /></div>
        </div>
        {data?.map((v, i) => {
          return (
            userUid === v?.UserID ?
              <div className="shooping_cart_images_main_div">
                <div className="shopping_image">
                  <img src={v?.ImageUrl} alt="" />
                  <h3>{v?.ItemName}</h3>
                  <Counter title={i} />
                </div>
                <div className="ammount">{v?.UnitPrice}</div>
              </div>
              :
              null
          )
        })
        }
        <div className="total">
          <div className="total_heading">Total</div>
          <div className="total_amount">$ 185.500</div>
        </div>

        <input type="password" className="input shop_input" placeholder='Enter Full Name' />
        <input type="password" className="input shop_input" placeholder='Enter Email' />
        <input type="password" className="input shop_input" placeholder='Enter Phone Number' />
        <textarea type="password" className="input shop_input" placeholder='Enter shipping address'></textarea>

        <div className="order_button_div">
          <button className='order_button'> <Link to='' className='link'  > Place Order</Link> </button>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <UserFooter />





    </>
  )
}

export default UserShoppingCart
