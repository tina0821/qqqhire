import React, { useState } from 'react';
import { Button, Space, Radio, Form, Select, Typography } from 'antd';
import "./returnqu.css";


const Returnqu = () => {

    // ======== 單選按鈕 ========
    // 抓取單選框value值
    // 把值回傳進去input框

    const [value, setValue] = useState();
    const [value2, setValue2] = useState();
    
    const onChange = (e) => {
        setValue(e.target.value);
        console.log('radio checked', e.target.value);
    };
    const onChange2 = (e) => {
        setValue2(e.target.value);
        console.log('radio checked', e.target.value);
    };





    // === 監聽 input ===
    // const [form] = Form.useForm();
    // const nameValue = Form.useWatch('name', form);
    // const nameValue2 = Form.useWatch('name2', form);


    // ======== 下一步 上一步按鈕 ========
    const [open, setOpen] = useState(false);

    const controlBtn = ()=>{
        setOpen((prev)=>{return !prev})
    }
    // 方法一 {open?<div></div>:null}
    // 方法二 {!open&&<></>} {open&&<></>}

    
    // ======== 確認合約 並送出 ========
    const [checked, setChecked] = useState("");

    // 測試是否收到單選框資訊 setChecked為非同步傳遞
    const sendChick = (e) => {
        setChecked(e.target.value);
        if (e.target.value) {
            console.log("OK")
        }else{
            console.log("NO")
        }
      };
    console.log(checked)
    // 點擊送出判斷單選框回傳值
    const controlSendBtn = ()=>{
        if (checked === '1') {
            alert('成功送出');
            window.location.reload();
        }else{
            alert("尚未勾選合約 請確認!")
        }
    }

    // ======== 點選項目 出現文字框 ========
    const [demo1, setdemo1] = useState();
    const [demo2, setdemo2] = useState();

    const onChangeA = (e) => {
        setdemo1(e.target.value);
        console.log('radio checked', e.target.value);
    };
    const onChangeB = (e) => {
        setdemo2(e.target.value);
        console.log('radio checked', e.target.value);
    };



    return (
        <>
            {/* Token全局改動範例 需要import=>ConfigProvider */}
            {/* <ConfigProvider
                // 用這段去自訂全部CSS 
                theme={
                    {token:{colorSplit:'red'}}
                }>
            </ConfigProvider> */}

            <div className="container">
                <h1>問題回報</h1>
                <hr />
                <h3>注意事項</h3>
                <p>回報問題前請您注意以下事項：</p>
                <ul style={{ fontSize: "1.6rem" }}>1.提供清晰詳細的描述:
                    <li>
                        請在回報問題時提供盡可能清晰和詳細的描述。這將有助於我們更好地了解您的問題並提供準確的幫助。請提供相關的訂單號碼、產品名稱和具體問題的描述。
                    </li>
                </ul>
                <ul style={{ fontSize: "1.6rem" }}>2.附上相關資料和圖片：
                    <li>
                        如果您遇到產品損壞或其他問題，請盡量提供相關的資料和圖片作為證據。這將有助於我們更好地理解問題的性質，並能夠更快速地為您解決問題。
                    </li>
                </ul>
                <ul style={{ fontSize: "1.6rem" }}>3.檢查常見問題解答：
                    <li>
                        在回報問題之前，建議您先查看我們的常見問題解答頁面。您可能會在那裡找到對您問題的解答或解決方法，從而節省您的時間和努力。
                    </li>
                </ul>
                <ul style={{ fontSize: "1.6rem" }}>4.合理的期望與解決時間：
                    <li>
                        請理解，每個問題都有其處理時間。我們將盡力在合理的時間內為您解決問題，但有時可能需要進一步的調查和處理。我們感謝您的耐心和理解。
                    </li>
                </ul>
                <p>謝謝您遵守以上的注意事項。現在您可以填寫下面的問題回報表單，我們將盡快處理您的問題。如有任何疑問，請隨時聯繫我們的客戶服務團隊。</p>

                <hr />
                
                {/* 第一區 */}
                {!open&&<div>

                    <h3>請問您的問題類別屬於?</h3>
                    <Radio.Group onChange={onChange} value={value} >
                        <Radio value={'出租項目'} className='RadioWord'>出租項目</Radio>
                        <Radio value={'借物問題'} className='RadioWord'>借物問題</Radio>
                        <Radio value={'其他'} className='RadioWord'>其他</Radio>
                    </Radio.Group>
                    <h3>問題具體項目是什麼?</h3>
                    <Radio.Group onChange={onChange2} value={value2}>
                        <Radio value={'租賃合約問題'} className='RadioWord'>租賃合約問題</Radio>
                        <Radio value={'租賃相關回報'} className='RadioWord'>租賃相關回報</Radio>
                        <Radio value={'系統相關問題'} className='RadioWord'>系統相關問題</Radio>
                        <Radio value={'回報BUG'} className='RadioWord'>回報BUG</Radio>
                    </Radio.Group>
                    <Space wrap size={"large"} className='btnDiv'>
                        <Button type="primary" className='btnWord' onClick={controlBtn}>下一步</Button>
                    </Space>

                </div>}
                
                {/* 第二區 */}
                {open&&<div>
                    {/* 測試用input 要使用上面import 記得再引入input */}
                    {/* <Form form={form}  >
                        <Form.Item name="name2" label="try">
                            <Input />
                        </Form.Item>
                    </Form> */}

                    <Typography>
                        <pre style={{ fontSize: "1.5rem" }}>分類: {value}</pre>
                    </Typography>
                    <Typography>
                        <pre style={{ fontSize: "1.5rem" }}>類別: {value2}</pre>
                    </Typography>

                    <Form size="large">
                        <Form.Item label={<p style={{ fontSize: "1.5rem" }}>項目</p>}  >
                            <Select>
                                <Select.Option value="" style={{ fontSize: "1.5rem" }}></Select.Option>
                                <Select.Option value={"demo1"} style={{ fontSize: "1.1rem" }} onChange={onChangeA}>租賃建議</Select.Option>
                                <Select.Option value={"demo2"} style={{ fontSize: "1.1rem" }} onChange={onChangeB}>一般租賃問題</Select.Option>
                            </Select>
                        </Form.Item>
                    </Form>


                    {/* 文字輸入框和上傳圖片選項 */}
                    <div id="inputContainer">
                        <div className="form-group">
                            <label htmlFor="textInput" style={{ fontSize: "1.5rem" }}>文字輸入框:</label>
                            <textarea className="form-control" id="textInput" maxLength={100} defaultValue={""}/>
                        </div>
                        {/* 用于顯示已输入字數和總字數限制 */}
                        <div id="charCount" />
                        <div className="form-group">
                            <label htmlFor="imageUpload" style={{ fontSize: "1.5rem" }}>圖片補充:</label>
                            <input type="file" className="form-control-file" id="imageUpload" style={{ fontSize: "1.1rem" }} />
                        </div>
                    </div>

                    <hr />


                    <Radio className='RadioWord' checked={checked} onChange={sendChick} value="1">我已詳細閱讀合約&規範與線上回報相關注意事項內容，並同意遵守所有規定</Radio>
                    <Space wrap size={"large"} className='btnDiv'>
                        <Button type="primary" className='btnWord' onClick={controlBtn}>上一步</Button>
                        <Button type="primary" className='btnWord' onClick={controlSendBtn}>送出</Button>
                    </Space>


                </div>}

            </div>

        </>

    );

} 

export default Returnqu