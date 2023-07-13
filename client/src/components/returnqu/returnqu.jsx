import React, { useState } from 'react';
import { Button, Space, Radio } from 'antd';
import "./returnqu.css";


const Returnqu = () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);


    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChange2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
    };



    return (
        <>
            <div className="container">

                <h1>問題回報</h1>
                <hr />
                <h3>注意事項</h3>
                <p>回報問題前請您注意以下事項：</p>
                <ol>
                    <li>
                        提供清晰詳細的描述：請在回報問題時提供盡可能清晰和詳細的描述。這將有助於我們更好地了解您的問題並提供準確的幫助。請提供相關的訂單號碼、產品名稱和具體問題的描述。
                    </li>
                    <li>
                        附上相關資料和圖片：如果您遇到產品損壞或其他問題，請盡量提供相關的資料和圖片作為證據。這將有助於我們更好地理解問題的性質，並能夠更快速地為您解決問題。
                    </li>
                    <li>
                        檢查常見問題解答：在回報問題之前，建議您先查看我們的常見問題解答頁面。您可能會在那裡找到對您問題的解答或解決方法，從而節省您的時間和努力。
                    </li>
                    <li>
                        合理的期望與解決時間：請理解，每個問題都有其處理時間。我們將盡力在合理的時間內為您解決問題，但有時可能需要進一步的調查和處理。我們感謝您的耐心和理解。
                    </li>
                </ol>
                <p>謝謝您遵守以上的注意事項。現在您可以填寫下面的問題回報表單，我們將盡快處理您的問題。如有任何疑問，請隨時聯繫我們的客戶服務團隊。</p>
                <hr />
                <h3>請問您的問題類別屬於?</h3>
                <Radio.Group onChange={onChange} value={value} >
                    <Radio value={1} className='RadioWord'>出租項目</Radio>
                    <Radio value={2} className='RadioWord'>借物問題</Radio>
                    <Radio value={3} className='RadioWord'>其他</Radio>
                </Radio.Group>
                <h3>問題具體項目是什麼?</h3>
                <Radio.Group onChange={onChange2} value={value2}>
                    <Radio value={1} className='RadioWord'>租賃合約問題</Radio>
                    <Radio value={2} className='RadioWord'>租賃相關回報</Radio>
                    <Radio value={3} className='RadioWord'>系統相關問題</Radio>
                    <Radio value={4} className='RadioWord'>回報BUG</Radio>
                </Radio.Group>

                <Space wrap size={"large"} className='btnDiv'>
                    <Button type="primary" className='btnWord'>下一步</Button>
                </Space>

            </div>
        </>

    );

}

export default Returnqu;