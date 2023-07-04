import React, { useState } from 'react';
// import "./register.css"
function RegisterForm() {
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    //   const [username, setUsername] = useState('');
    //   const [password, setPassword] = useState('');
    //   const [confirmPassword, setConfirmPassword] = useState('');

    function checkUsernameAvailability() {
        const username = document.getElementById('username').value;
        const okk = /^[a-zA-Z0-9_-]{6,12}$/; // no symbols
        const nextButton = document.getElementById('nextButton');

        if (okk.test(username)) {
            document.getElementById('usernameAvailability').textContent = '帳號可用';
            sessionStorage.setItem('username', username);
        } else {
            document.getElementById('usernameAvailability').textContent = '帳號不可用';
            nextButton.setAttribute("disabled", false)
        }
    }

    function handlePasswordBlur() {
        const password = document.getElementById('password').value;
        const regex = /^[a-zA-Z0-9_-]{6,12}$/;
        if (!regex.test(password)) {
            // document.getElementById('nextButton').disabled = true;
            document.getElementById('passwordName').textContent = '不ok';
        } else {
            document.getElementById('passwordName').textContent = 'ok ';
            sessionStorage.setItem('password', password);
        }
    }

    function handleConfirmPasswordBlur() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            // document.getElementById('nextButton').disabled = true;
            document.getElementById('doubleCheak').textContent = '兩次輸入密碼不一致';
        } else {
            // document.getElementById('nextButton').disabled = false;
            document.getElementById('doubleCheak').textContent = '';
        }
    }

    function goToNextPage() {
        console.log('下一步');
     
        setNextButtonDisabled(true);
        // Perform the necessary logic to navigate to the next step
    }
    //將1.2頁資料一起submit出去
    function submitForm() {
        var username = sessionStorage.getItem("username");
        var password = sessionStorage.getItem("password");

        var name = document.getElementById("name").value;
        var idNumber = document.getElementById("idNumber").value;
        var birthdate = document.getElementById("birthdate").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;

        var message = "帳號: " + username + "\n" +
            "密碼: " + password + "\n" +
            "姓名/暱稱: " + name + "\n" +
            "身分證: " + idNumber + "\n" +
            "生日: " + birthdate + "\n" +
            "手機: " + phone + "\n" +
            "電子信箱: " + email;
        alert(message);
    }

    // 第二頁
    function phoneCheak() {
        const phoneregex = /^09[0-9]{8}$/;
        var phone = document.getElementById('phone').value;
        if (!phoneregex.test(phone)) {
            // document.getElementById('nextButton').disabled = true;
            document.getElementById('phonetext').textContent = "不ok";
        } else {
            document.getElementById('phonetext').textContent = "ok ";
        }
    }

    function idNumberCheak() {
        const idNumberregex = /^[A-Za-z][12]\d{8}$/;
        var idNumber = document.getElementById('idNumber').value;
        if (!idNumberregex.test(idNumber)) {
            // document.getElementById('nextButton').disabled = true;
            document.getElementById('idNumbertext').textContent = "不ok";
        } else {
            document.getElementById('idNumbertext').textContent = "ok ";
        }
    }
    return (
        <div className="box_1">
            <div></div>
            <div id="page1">
                <form>
                    <h1>註冊</h1>
                    <label htmlFor="username">帳號:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        onBlur={checkUsernameAvailability}
                        required
                    />
                    <span id="usernameAvailability">&nbsp;</span>

                    <label htmlFor="password">密碼:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onBlur={handlePasswordBlur}
                        required
                    />
                    <span id="passwordName">&nbsp;</span>

                    <label htmlFor="confirmPassword">再次輸入密碼:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onBlur={handleConfirmPasswordBlur}
                        required
                    />
                    <span id="doubleCheak">&nbsp;</span>

                    <div className="navigation-buttons">
                        <button
                            id="nextButton"
                            type="button"
                            onClick={goToNextPage}
                            disabled
                        >
                            下一步
                        </button>
                    </div>
                </form>
                <div id="page2">
                    <form onsubmit="submitForm()">
                        <h1>註冊</h1>
                        <label htmlFor="name">姓名/暱稱:</label>
                        <input type="text" id="name" name="name" required />
                        {/* <br><br> */}
                        <label htmlFor="idNumber">身分證:</label>
                        <input type="text" id="idNumber" name="idNumber" onblur="idNumberCheak()" required />
                        <span id="idNumbertext">&nbsp;</span>
                        {/* <br><br> */}
                        <label htmlFor="birthdate">生日:</label>
                        <input type="date" id="birthdate" name="birthdate" required />
                        {/* <br><br> */}
                        <label htmlFor="phone">手機:</label>
                        <input type="tel" id="phone" name="phone" onblur="phoneCheak()" required />
                        <span id="phonetext">&nbsp;</span>
                        {/* <br><br> */}
                        <label htmlFor="email">電子信箱:</label>
                        <input type="email" id="email" name="email" required />
                        {/* <br><br> */}
                        <div className="navigation-buttons">
                            <button type="button" onclick="goToPreviousPage()">上一步</button>
                            <button type="submit">註冊</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
