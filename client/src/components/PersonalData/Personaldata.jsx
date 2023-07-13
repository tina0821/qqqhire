import React, { useState } from 'react';

const MemberCenter = () => {
    const [editMode, setEditMode] = useState(false);
    const [account, setAccount] = useState('example');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    return (
        <div>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Account:
                        <input
                            type="text"
                            value={account}
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Address:
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Nickname:
                        <input
                            type="text"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p>Account: {account}</p>
                    <p>Password: {password}</p>
                    <p>Address: {address}</p>
                    <p>Name: {name}</p>
                    <p>Nickname: {nickname}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default MemberCenter;
