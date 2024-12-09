import Link from "next/link";

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                    <img src={logoImg.src} alt="A plate with food on it" />
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Community</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Share</Link>
                    </li>
                    <li>
                        <Link href="/meals/raw">Dynamiczny</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
  }