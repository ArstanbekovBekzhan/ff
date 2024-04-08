'use client'
import React, { useState, useEffect } from 'react';
import style from '@/styles/Layout/Header/Header.module.scss';
import { ShoppingCartOutlined, ProductOutlined, MenuOutlined } from '@ant-design/icons';
import Layout from 'antd/es/layout/layout';
import Input from 'antd/es/input/Input';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Header = Layout;

const HeaderCustom = () => {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const isTab = useMediaQuery({ maxWidth: 1000 });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	const QuantityInCart = useSelector((state: any) => {
		const itemsInCart = state.itemsInCart
		return itemsInCart.length >= 99 ? '99+' : itemsInCart.length.toString()
	})

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Header className={`${style.Header} ${isNavFixed ? style.fixed : ''}`}>
            <div className={style.logo}>
                <Link href="/">Aliexpress</Link>
            </div>
			<div className={style.box}>
				<div className={style.search}>
					{/* <Languages data={languages} /> */}
					<Input type='search' placeholder='Поиск одежды...' />
					<button>Найти</button>
                </div>
				{isTab&&<div className={style.burgerMenu} onClick={toggleMenu}>
                    <MenuOutlined />
                </div>}
                {isMenuOpen && (
                    <div className={style.menuItems} onClick={toggleMenu}>
						<div onClick={(e)=>e.stopPropagation()}>						<button onClick={() => {router.push('/cart'), toggleMenu}}>
                            <ShoppingCartOutlined />
                            <p>Корзина</p>
                            <span className={style.quantity}>{QuantityInCart}</span>
                        </button>
                        <button onClick={() => {router.push('/categories'), toggleMenu}}>
                            <ProductOutlined />
                            <p>Категории</p>
                        </button>
                        <button className={style.authorization} onClick={() => {router.push('/auth/authorization'), toggleMenu}}>
                            Вход
                        </button></div>
                    </div>
                )}
                {!isTab && (
                    <div className={style.btns}>
                        <button onClick={() => router.push('/cart')}>
                            <ShoppingCartOutlined />
                            <p>Корзина</p>
                            <span className={style.quantity}>{QuantityInCart}</span>
                        </button>
                        <button onClick={() => router.push('/categories')}>
                            <ProductOutlined />
                            <p>Категории</p>
                        </button>
                        <button className={style.authorization} onClick={() => router.push('/auth/authorization')}>
                            Вход
                        </button>
                    </div>
                )}
            </div>
        </Header>
    );
};

export default HeaderCustom;
