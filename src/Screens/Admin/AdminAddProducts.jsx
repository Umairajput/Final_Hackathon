import React, { useState } from 'react';
import { Navbar } from '../../Components'
import camera_img from '../../Assets/Images/camera_img.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
function AdminAddProducts() {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className='Add_item_heading'>Add New Item</h2>
        <div className='camera_main_div'>
          {/* <img className='admin_camera' src={camera_img} alt="" /> */}
          {/* <CameraAltIcon className='camera_icon' /> */}
          <ImgCrop rotate>
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 5 && <div style={{ width: '0' }}><CameraAltIcon className='camera_icon' /></div>}
            </Upload>
          </ImgCrop>
        </div>
        <div className='inputs_div'>
          <input type="text" className='inp' placeholder='Item Name' />
        </div>
        <div className='inputs_div'>
          <select className='inp' name="cars" id="cars">
            <option value="volvo">Select Category</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default AdminAddProducts
