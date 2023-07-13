import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import style from "./bp.module.css"
import "./returnqu.css";

function Returnqu() {

    return (
        <>
            <div className={style.container}>
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
                {/* =========== 選單1 ========== */}
                <form id="List1">
                    <h3>請問您的問題類別屬於?</h3>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="quone" id="rent" defaultValue="option1" />
                        <label className={style["form-check-label"]} htmlFor="rent">出租問題</label>
                    </div>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="quone" id="borrow" defaultValue="option2" />
                        <label className={style["form-check-label"]} htmlFor="borrow">借物問題</label>
                    </div>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="quone" id="other" defaultValue="option3" />
                        <label className={style["form-check-label"]} htmlFor="other">其他</label>
                    </div>
                    <h3>問題具體項目是什麼?</h3>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="qutwo" id="contract" defaultValue="option1" />
                        <label className={style["form-check-label"]} htmlFor="contract">租賃合約問題</label>
                    </div>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="qutwo" id="lease" defaultValue="option2" />
                        <label className={style["form-check-label"]} htmlFor="lease">租賃相關回報</label>
                    </div>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="qutwo" id="system" defaultValue="option3" />
                        <label className={style["form-check-label"]} htmlFor="system">系統相關問題</label>
                    </div>
                    <div className={`${style["form-check"]} ${style["form-check-inline"]}`}>
                        <input className={style["form-check-input"]} type="radio" name="qutwo" id="bug" defaultValue="option4" />
                        <label className={style["form-check-label"]} htmlFor="bug">回報BUG</label>
                    </div>
                    <div className={style.nextbtn}>
                        <button type="button" className={`${style["btn btn-primary"]} ${style["btn-lg"]}`} id="nextBtnChick">下一步</button>
                    </div>
                </form>
                {/* =========== 選單2 ========== */}
                <div id="List2" className={style.container}>
                    <label className={`${style.btil} ${style.label}`}>
                        <div className={`${style.quti} ${style.labelText}`}>分類 :</div>
                        <input className={`${style["form-control"]} ${style.input}`} type="text" id="quoneInput" placeholder="類別回答" aria-label="Disabled input example" readOnly />
                    </label>
                    <label className={`${style.btil} ${style.label}`}>
                        <div className={`${style.quti} ${style.labelText}`}>類別 :</div>
                        <input className={`${style["form-control"]} ${style.input}`} type="text" id="qutwoInput" placeholder="項目回答" aria-label="Disabled input example" readOnly />
                    </label>
                    <div className={`${style["col-auto"]} ${style.btil}`}>
                        <label htmlFor="specificSizeSelect">
                            <div className={`${style.quti} ${style.labelText}`}>項目 :</div>
                        </label>
                        <select className={`${style["form-select"]} ${style.select}`} id="autoSizingSelect">
                            <option selected> </option>
                            <option value={1}>租賃建議</option>
                            <option value={2}>一般租賃問題</option>
                        </select>
                    </div>
                    {/* 文字輸入框和上傳圖片選項 */}
                    <div id="inputContainer" className={style.inputContainer}>
                        <div className={`${style["form-group"]} ${style.formGroup}`}>
                            <label htmlFor="textInput" className={style.label}>文字輸入框:</label>
                            <textarea className={`${style["form-control"]} ${style.textarea}`} id="textInput" maxLength={100} defaultValue={""} />
                        </div>
                        {/* 用于顯示已输入字數和總字數限制 */}
                        <div id="charCount" className={style.charCount} />
                        <div className={`${style["form-group"]} ${style.formGroup}`}>
                            <label htmlFor="imageUpload" className={style.label}>圖片補充:</label>
                            <input type="file" className={`${style["form-control-file"]} ${style.fileInput}`} id="imageUpload" />
                        </div>
                    </div>
                    <hr />
                    <div className={`${style["form-check"]} ${style["form-check-inline"]} ${style.formCheck}`}>
                        <input className={style["form-check-input"]} type="radio" name="qu" id="agree" defaultValue="option4" />
                        <label className={`${style["form-check-label"]} ${style.checkboxLabel}`} htmlFor="agree">我已詳細閱讀合約&amp;規範與線上回報相關注意事項內容，並同意遵守所有規定</label>
                    </div>
                    <form>
                        <div className={style.nextbtn}>
                            <button type="button" className={`${style.btn} ${style["btn-primary"]} ${style['btn-lg']} ${style.backBtn}`} id="backBtnChick">上一步</button>
                            <button type="button" className={`${style.btn} ${style["btn-primary"]} ${style['btn-lg']} ${style.sendBtn}`} id="sendBtn">送出</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Returnqu;