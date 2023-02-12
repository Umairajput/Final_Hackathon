import React,{useState,useEffect} from 'react'
import { Footer } from '../../Components'
import Navbar from '../../Components/Navbar/Navbar'
import apple_img from '../../Assets/Images/apple.png'
import { UserFooter } from '../../Components/index'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../Firebase/firebase';
function AdminHome() {
  const [data, setData] = useState([])
  const getData = async () => {
    const q = query(collection(db, "Products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData([...data, {
        itemName: doc.data()?.ItemName,
        imageUrl: doc.data()?.ImageUrl,
        price: doc.data()?.UnitPrice
      }])
    });
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Navbar />
      <div className='admin_home_div'>
        <h3>All Products</h3>
        {
          data.map((v, i) => {
            return(
              <div className='card_main_div'>
              <div className='product_card_div'>
                <img className='card_img' src={v?.imageUrl} />
                <div className='product_main_div'>
                  <p className='product_name'>{v?.itemName}</p>
                  <p className='product_rate' >1 Kg</p>
                </div>
              </div>
              <p className='product_cost'>{v?.price}</p>
            </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default AdminHome
