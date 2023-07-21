import { Upload } from 'antd';
import React, { useState } from 'react';
const Prconly2 = () => {
  const [fileList, setFileList] = useState([]);
  // const onChange = ({ fileList: newFileList }) => {
  //   setFileList(newFileList);
  // };

  // ======Chatgpt新增程式碼======
  const onChange = ({ file, fileList: newFileList }) => {
    // 如果文件正在被移除，可以在這裡處理移除的邏輯
    if (file.status === 'removed') {
      // 在此處理文件移除的相關邏輯，如果有需要的話
    }
  // ======Chatgpt程式碼結束======

    // 更新 fileList 的狀態
    setFileList(newFileList);
  };

  // 預覽部分
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
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture-card"
      fileList={fileList}
      onChange={onChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && '+ Upload'}
    </Upload>
  );
};
export default Prconly2;