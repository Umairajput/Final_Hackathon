import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grocery from '../../Assets/Images/grocery.png'
import SearchIcon from '@mui/icons-material/Search';
import ShopGrocery from '../../Assets/Images/shop_grocery.jpeg'
function UserHome() {
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
              <img src={ShopGrocery} alt="" />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default UserHome
