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
import { db,auth } from '../../Firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
function UserHome() {
  const [data, setData] = useState([])
  const [userUid, setUserUid] = useState()
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserUid(user?.uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const add = async (product) => {
    let itemName = product?.ItemName
    let imageUrl = product?.ImageUrl
    let itemPrice = product?.ItemPrice
    await addDoc(collection(db, "UserAddCarts"), {
      UserID: userUid,
      ItemName: itemName,
      ImageUrl: imageUrl,
      UnitPrice: itemPrice,
      timestamp: new Date(),
    });
    alert("Add to cart")
  }
  const getData = async () => {
    let FirebaseData = []
    const q = query(collection(db, "Products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData([doc.data()])
      FirebaseData.push(doc.data())
      setData(FirebaseData)
    });
  }
  console.log("data==>", data)
  useEffect(() => {
    getData()
  }, [])
  // setTimeout(() => {
  // console.log('firebase data',FirebaseData)
  // FirebaseData.map((v, i) => {
  //   console.log(v?.ImageUrl)
  // })
  //   setTimer(true)
  // }, 6000)
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
                        <p>{v?.ItemPrice}</p>
                        <buttono onClick={() => add(v)} style={{ cursor: 'pointer' }}><AddIcon /></buttono>
                      </div>
                    </div>
                  </div>
                </div>
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
