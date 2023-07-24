import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, ConfigProvider, Button, Modal } from 'antd';
import axios from 'axios';
import "./Backstage.css";


const Backstage = () => {


    


    // 資料庫取出會員資訊
    const [user, setuser] = useState("")

    useEffect(() => {
        const userApi = async () => {
            const res = await axios.get(`http://localhost:8000/BSuser`)
            const user = await res.data;
            const usersWithIndex = user.map((user, index) => ({
                ...user,
                index: index + 1,
                key: index
            }));

            setuser(usersWithIndex)
        }
        userApi();
    }, [])
    console.log(user)



    // 表單頁面資訊 會員資料
    const { Column, ColumnGroup } = Table;


    // 表單頁面資訊 問題回報
    const { Column1, ColumnGroup1 } = Table;
    const data1 = [
        {
            key: '1',
            MemberID: '12345',
            MemberAt: 'AAA',
            name: "買不到",
            email: '1/1',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            MemberID: '8888',
            MemberAt: 'BBB',
            name: "賣光了",
            phone: "0911111111",
            email: '1/2',
            tags: ['loser'],
        },
        {
            key: '3',
            MemberID: '12345',
            MemberAt: 'CCC',
            name: "太便宜",
            email: '1/3',
            tags: ['cool', 'teacher'],
        },
    ];

    //修改&刪除
    const [DLaccount, setDLaccount] = useState("")
    
    
    const changeData = () => {
        console.log("修改");
        setOpenCG(true);
    }

    const deleteData = (DLid) => {
        setDLaccount(DLid)
        console.log(DLid);
        setOpenDL(true);
    }

    // 修改彈出視窗
    const[openCG, setOpenCG] = useState(false);
    // 點擊確認或取消按鈕時的回調
    const handleOk = () => {
        // 處理確認操作
        setOpenCG(false);
    };
    const handleCancel = () => {
        // 取消操作
        setOpenCG(false);
    };


    // 刪除彈出視窗
    const [openDL, setOpenDL] = useState(false);
    // 點擊確認或取消按鈕時的回調
    const handleOk2 = () => {
        // 處理確認操作
        setOpenDL(false);
        axios.delete(`http://localhost:8000/BSuser?account=${DLaccount}`)

    };
    const handleCancel2 = () => {
        // 取消操作
        setOpenDL(false);
    };


    // 會員&問題回報 切換
    const [open, setOpen] = useState(false);

    const controlBtn = () => {
        setOpen((prev) => { return !prev })
    }



    return (
        <>

            <div className='BS_BtnStyle'>
                <Space className='BS_BtnStyle_space'>
                    <Button type="primary" className='BS_BtnStyle_Button' onClick={controlBtn} >會員資料</Button>
                    <Button type="primary" className='BS_BtnStyle_Button' onClick={controlBtn} >問題回報</Button>
                </Space>
            </div>


            {/* 第一個部分-會員資料 */}
            {!open && <ConfigProvider
                // Token全部CSS 
                theme={{ token: { fontSize: '1.2rem' } }} >

                <Table dataSource={user} >
                    <ColumnGroup title="會員資料">
                        <Column title="會員編號" dataIndex="index" key="index" />
                        <Column title="帳號名稱" dataIndex="account" key="account" />
                    </ColumnGroup>
                    <Column title="姓名" dataIndex="name" key="name" />
                    <Column title="信箱" dataIndex="email" key="email" />
                    <Column title="手機" dataIndex="phoneNumber" key="phoneNumber" />
                    <Column
                        title="操作"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <a href='#' onClick={changeData}>修改</a>
                                <a href='#' onClick={()=>deleteData(record.account)}>刪除</a>
                            </Space>
                        )}
                    />
                </Table>

            </ConfigProvider>}



            {/* 第一個部分-問題回報 */}
            {open && <ConfigProvider
                // Token全部CSS 
                theme={{ token: { fontSize: '1.2rem' } }} >

                <Table dataSource={data1}>
                    <ColumnGroup1 title="問題回報">
                        <Column1 title="申訴編號" dataIndex="MemberID" key="MemberID" />
                        <Column1 title="申訴帳號" dataIndex="MemberAt" key="MemberAt" />
                    </ColumnGroup1>
                    <Column1 title="問題" dataIndex="name" key="name" />
                    <Column1 title="日期" dataIndex="email" key="email" />
                    <Column1
                        title="狀態"
                        dataIndex="tags"
                        key="tags"
                        render={(tags) => (
                            <>
                                {tags.map((tag) => (
                                    <Tag color="blue" key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </>
                        )}
                    />
                    <Column1
                        title="操作"
                        key="action"
                        render={(_, record) => (
                            <Space size="middle">
                                <p >修改 {record.lastName}</p>
                                <a href='#'>刪除</a>
                            </Space>
                        )}
                    />
                </Table>

            </ConfigProvider>}






            <div>
                <Modal
                    title="修改資料"
                    open={openCG}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>這是頁面</p>
                </Modal>
            </div>
            <div>
                <Modal
                    title="是否刪除"
                    open={openDL}
                    onOk={handleOk2}
                    onCancel={handleCancel2}
                >
                    <p>這是刪除頁面</p>
                </Modal>
            </div>
        </>
    );

}


export default Backstage