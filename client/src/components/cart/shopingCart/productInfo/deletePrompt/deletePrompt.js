//刪除購物車商品視窗
import React, { Component } from 'react';
class DeletedPrompt extends Component { 
    render() { 
        return (
            <div style={{display:`${this.props.show?'flex':"none"}`,justifyContent:'center',alignItems:'center',top:'50vh',left:'50%',marginLeft:'-200px',marginTop:'-200px',width:'400px',position:'absolute',height:'400px',backgroundColor:'red'}}>
                <div className='col-12 d-flex flex-wrap'><div className='col-12'>確定刪除{this.props.cartMap}?</div><div className='col-12'>aaaa</div></div>
            </div>
        );
    }
}
 
export default DeletedPrompt;