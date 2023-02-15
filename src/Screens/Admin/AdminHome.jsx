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
  return (
    <div>
      <Navbar />
      <div className='admin_home_div'>
        <h3>All Products</h3>
        {
          data?.map((v, i) => {
            return(
              <div className='card_main_div'>
              <div className='product_card_div'>
                <img className='card_img' src={v?.ImageUrl} />
                <div className='product_main_div'>
                  <p className='product_name'>{v?.ItemName}</p>
                  <p className='product_rate' >{v?.UnitName}</p>
                </div>
              </div>
              <p className='product_cost'>{v?.ItemPrice}</p>
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
