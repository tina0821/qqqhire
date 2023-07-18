import React, { Component } from 'react';
class TradeSuccess extends Component {
    render() { 
        let text = ""
        this.props.data.state.tradeId&&this.props.data.state.tradeId.map(item=>{
                return    text += item.padStart(6,"0")+"、"
        })
        return (
            <React.Fragment>
                <div>訂單{text.slice(0,-1)}已建立成功，等待租借者回應。</div>
            </React.Fragment>
        );
    }
}
 
export default TradeSuccess;