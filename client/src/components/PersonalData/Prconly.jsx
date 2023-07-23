import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import React, { useState } from 'react';
import  './Prconly.scss'
const Prconly = ({ account, onClose }) => {

  const [fileList, setFileList] = useState([ ]);

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
 
  const handleConfirm = async () => {
    onClose(fileList);

    // 上传照片到后端服务器
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('photo', file.originFileObj);
    });

    try {

      formData.append('account', account);
      console.log(account)
      const response = await fetch('http://localhost:8000/upload-photo', {
        method: 'POST',
        body: formData,
       
      });
      const data = await response.json();
      
      console.log('Photo upload response:', data);
      window.location.reload()
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
    return (
    <div id='prconlyout'>
      <div>上傳照片</div>
    <ImgCrop rotationSlider>
      <Upload
        action="http://localhost:8000/upload-photo"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
    <button onClick={handleConfirm}>確認</button>
    <button onClick={onClose}>取消</button>
    </div>
  );
};
export default Prconly;