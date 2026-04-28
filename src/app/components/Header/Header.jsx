'use client'
import React from "react";
import './Header.scss'
import { Box, Button, Drawer } from "@mui/material";
import Link from 'next/link'
import Image from 'next/image' 

export default function Header() {

    let urlList = []

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box className="drawer" sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <ul>
                {urlList.map((obj, index) => (
                    <li key={index}>
                        <Link className="link" href={obj.url}>
                            {obj.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Box>
    );

    return (
        <div className="Header">
            <Link href="/" className="logo">
                
                <Image src='/images/logo.ico' alt="logo" width={50} height={50} /> 
            </Link>
            <ul className="Links">
                <li><Link href='/' className="link ">Главная страница</Link></li>
                <li className="dropdownNIC">
                    <Link href="/" className="link aboutNIC">О НИЦ</Link>
                    <div className="dropdown-contentNIC">
                        <ul>
                            <li className="dropDownLink"><Link href='/management-structure'>Структура управления</Link></li>
                            <li className="dropDownLink"><Link href='/plan-of-work'>План работы</Link></li>
                            <li><Link href='/contacts' className="dropDownLink">Контакты</Link></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdownGAG">
                    <Link className="link aboutGagauz" href="#">О гагаузах</Link>
                    <div className="dropdown-contentGAG">
                        <ul>
                            <li className="dropDownLink"><Link href='/history-of-gagauz'>Краткая история гагаузов</Link></li>
                            <li className="dropDownLink"><Link href='/alphabet'>Гагаузский алфавит</Link></li>
                        </ul>
                    </div>
                </li>
            

            </ul>
            <div className="drawerLinks">
                <Button id="drawerBut" onClick={toggleDrawer(true)}>Навигация по сайту</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
    <Box
        className="drawer"
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
    >
        <li>
            <Link href='/' className="link">
                Главная страница
            </Link>
        </li>

        <li className="dropdownNIC">
            <ul>
                <li className="dropDownLink">
                    <Link href="/video-section" className='link-project'>Видео презентация</Link>
                </li>
                <li className="dropDownLink">
                    <Link href="/dictionary" className='link-project'>Онлайн словарь</Link>
                </li>
                <li className="dropDownLink">
                    <Link href='/management-structure'>Структура управления</Link>
                </li>
                <li className="dropDownLink">
                    <Link href='/plan-of-work'>План работы</Link>
                </li>
                <li>
                    <Link href='/contacts' className="dropDownLink">Контакты</Link>
                </li>
            </ul>
        </li>

        <li className="dropdownGAG">
            <ul>
                <li className="dropDownLink">
                    <Link href='/history-of-gagauz'>Краткая история гагаузов</Link>
                </li>
                <li className="dropDownLink">
                    <Link href='/alphabet'>Гагаузский алфавит</Link>
                </li>
            </ul>
        </li>
    </Box>
</Drawer>
            </div>
        </div>
    )
}