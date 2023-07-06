//刪除購物車商品視窗
import React, { Component } from "react";
import { Button } from "antd";
class DeletedPrompt extends Component {
  render() {
    return (
      <div
        style={{
          display: `${this.props.show ? "flex" : "none"}`,
          justifyContent: "center",
          alignItems: "center",
          top: "50vh",
          left: "50%",
          marginLeft: "-200px",
          marginTop: "-200px",
          width: "400px",
          position: "absolute",
          height: "400px",
          border:"1px solid black",
          backgroundColor:"white",
          borderRadius:'20px'
          
        }}
      >
        <div className="col-12 d-flex flex-wrap">
          <div className="col-12 d-flex justify-content-center mb-5">
            確定刪除
            {this.props.productInfo && this.props.productInfo.productName}?
          </div>
          <div className="col-12 d-flex justify-content-center ">
            <Button className="m-5" onClick={()=>{this.props.deleteItem(this.props.productInfo && this.props.productInfo)}} type="primary" danger style={{fontSize:'2rem',width:'auto',height:'auto'}}>是</Button>
            <Button className="m-5" onClick={()=>{this.props.close()}} type="primary"  style={{fontSize:'2rem',width:'auto',height:'auto'}}>否</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeletedPrompt;
