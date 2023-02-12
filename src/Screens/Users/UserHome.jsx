import React, { useEffect, useState } from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grocery from '../../Assets/Images/grocery.png'
import SearchIcon from '@mui/icons-material/Search';
import ShopGrocery from '../../Assets/Images/shop_grocery.jpeg'
import vegetable from '../../Assets/Images/vegetable.png'
import meat from '../../Assets/Images/meat.jpeg'
import AddIcon from '@mui/icons-material/Add';
import { UserFooter } from '../../Components/index'
import { collection, query, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
function UserHome() {
  const [data, setData] = useState([])
  const [timer, setTimer] = useState(false)
  // let data = [{
  //   img: { meat },
  //   Name: 'meat',
  //   price: 'RS.800-per Kg'

  // },
  // {
  //   img: { meat },
  //   Name: 'meat',
  //   price: 'RS.800-per Kg'

  // }]
  const add = async () => {
    await addDoc(collection(db, "UserAddCarts"), {
      ItemName: data[0]?.ItemName,
      ImageUrl: data[0]?.ImageUrl,
      UnitPrice: data[0]?.UnitPrice
    });
    alert("Add to cart")
  }
  let FirebaseData = []
  const getData = async () => {
    const q = query(collection(db, "Products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData([doc.data()])
      // console.log("docData",doc.data())
      FirebaseData.push(doc.data())
    });
  }
  setTimeout(() => {
    // console.log('firebase data',FirebaseData)
    FirebaseData.map((v, i) => {
      console.log(v?.ImageUrl)
    })
    setTimer(true)
  }, 6000)
  useEffect(()=>{
  },[timer === true])
  // console.log("data==>", data)
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <div className="user_home_page_main_section">
        <div className="user_interface_navbar">
          <div className="users_heading">
            <h1>SAYLANI WELFARE</h1>
            <p>DISCOUNT STORE</p>
          </div>
          <div className="cart_icon">
            <AddShoppingCartIcon />
          </div>
        </div>

        <div className="discount_store_grocery_image_div">
          <img className='discount_store_grocery_image' src={Grocery} alt="" />
        </div>
        <div className="search_input_div">
          <SearchIcon />     <input type="text" className="search" placeholder='Seacrh by Product NAme' />
        </div>
        <div className="shop_categery">
          <div className="shop_category_heading">
            Shop By Categery
          </div>
          <div className="section_of_category">
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
            <div className="categery_box">
              <img src={vegetable} alt="" />
            </div>
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
            <div className="categery_box">
              <img src={ShopGrocery} alt="" />
            </div>
          </div>

          {
            data?.map((v, i) => {
              return (
                timer == true ?
                  <div>
                    <div className="categery_description">
                      <div className="cateries">
                        <div className="cateries_image"><img src={v?.ImageUrl} alt="" /></div>
                        <div className="Description">
                          <h1>{v?.ItemName}</h1>
                          <p>This is product description </p>
                          <p> This is abc product description</p>


                        </div>
                        <div className="categries_button">
                          <p>{v?.UnitPrice}</p>
                          <buttono onClick={add} style={{ cursor: 'pointer' }}><AddIcon /></buttono>
                        </div>
                      </div>
                    </div>
                  </div>
                  :
                  null
            )
          })
          }





        </div>
        <UserFooter />
      </div>
    </>
  )
}

export default UserHome
