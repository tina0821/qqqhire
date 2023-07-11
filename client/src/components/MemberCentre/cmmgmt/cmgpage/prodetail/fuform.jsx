import React from 'react';

const Fuform = () => {
  return (
    <div className="col-12 pt-5 container">
      <form
        action=""
        method="post"
        encType="multipart/form-data"
        className="col-12 row flex-wrap borderclass pt-5 pb-5"
      >
        <div className="subTitle col-12 text-center pb-5">商品上架</div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">商品名稱:</div>
          <input className="ms-3 col-6" type="text" id="商品名稱" />
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">租金/天:</div>
          <input className="ms-3 col-6" type="text" id="租金/天" />
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">押金:</div>
          <input className="ms-3 col-6" type="text" id="押金" />
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">照片:</div>
          <input className="ms-3 col-6" type="file" id="照片" />
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">商品分類:</div>
          <select className="ms-3 col-1" id="商品分類">
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>
          <select className="ms-3 col-1" id="商品分類">
            <option value="2">2</option>
            <option value="2">2</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">配件(非必填):</div>
          <input className="ms-3 col-6" type="text" id="配件(非必填)" />
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">地點:</div>
          <select className="ms-3 col-1" id="商品分類">
            <option value="1">1</option>
            <option value="1">1</option>
            <option value="1">1</option>
          </select>
          <select className="ms-3 col-1" id="商品分類">
            <option value="2">2</option>
            <option value="2">2</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="col-12 d-flex ps-5 ms-5 p-3">
          <div className="col-2">商品描述:</div>
          <input className="ms-3 col-6" type="text" style={{ height: '300px' }} id="商品描述" />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <input type="checkbox" id="agree" className="img40" />
          <label htmlFor="agree">同意注意事項</label>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
        <button type="button" className="ms-5 rounded-2 ps-2 pe-2 pt-1 pb-1 bg-info">
            上架
          </button>
        </div>
      </form>
    </div>
  );
};

export default Fuform;