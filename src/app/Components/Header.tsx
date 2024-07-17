import Link from "next/link";
import Image from "next/image";
import InputHeader from "./InputHeader";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        width={32}
                        height={32}
                        alt="logo"
                    />
                    <h3>PostPlatform</h3>
                </Link>
                <InputHeader />
                <nav className={styles.nav}>
                    <Link href="/">
                        <div className={styles.nav_icon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 14.0585C5 13.0494 5 12.5448 5.22166 12.1141C5.44333 11.6833 5.8539 11.3901 6.67505 10.8035L10.8375 7.83034C11.3989 7.42938 11.6795 7.2289 12 7.2289C12.3205 7.2289 12.6011 7.42938 13.1625 7.83034L17.325 10.8035C18.1461 11.3901 18.5567 11.6833 18.7783 12.1141C19 12.5448 19 13.0494 19 14.0585V19C19 19.9428 19 20.4142 18.7071 20.7071C18.4142 21 17.9428 21 17 21H7C6.05719 21 5.58579 21 5.29289 20.7071C5 20.4142 5 19.9428 5 19V14.0585Z" fill="#7E869E" fill-opacity="0.25" />
                                <path d="M3 12.3866C3 12.6535 3 12.7869 3.0841 12.8281C3.16819 12.8692 3.27352 12.7873 3.48418 12.6234L10.7721 6.95502C11.362 6.49625 11.6569 6.26686 12 6.26686C12.3431 6.26686 12.638 6.49625 13.2279 6.95502L20.5158 12.6234C20.7265 12.7873 20.8318 12.8692 20.9159 12.8281C21 12.7869 21 12.6535 21 12.3866V11.9782C21 11.4978 21 11.2576 20.8983 11.0497C20.7966 10.8418 20.607 10.6944 20.2279 10.3995L13.2279 4.95502C12.638 4.49625 12.3431 4.26686 12 4.26686C11.6569 4.26686 11.362 4.49625 10.7721 4.95502L3.77212 10.3995C3.39295 10.6944 3.20337 10.8418 3.10168 11.0497C3 11.2576 3 11.4978 3 11.9782V12.3866Z" fill="#222222" />
                                <path d="M12.5 15H11.5C10.3954 15 9.5 15.8954 9.5 17V20.85C9.5 20.9328 9.56716 21 9.65 21H14.35C14.4328 21 14.5 20.9328 14.5 20.85V17C14.5 15.8954 13.6046 15 12.5 15Z" fill="#222222" />
                                <rect x="16" y="5" width="2" height="4" rx="0.5" fill="#222222" />
                            </svg>

                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href="/publication">
                        <div className={styles.nav_icon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z" fill="#7E869E" fill-opacity="0.25" />
                                <path d="M8.5 12.5L15.5 12.5" stroke="#222222" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.5 15.5L13.5 15.5" stroke="#222222" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M17.5 3.5V9.5" stroke="#222222" stroke-linecap="round" />
                                <path d="M14.5 6.5H20.5" stroke="#222222" stroke-linecap="round" />
                            </svg>
                            <p>Publication</p>
                        </div>
                    </Link>
                    <Link href="/profile">
                        <div className={styles.nav_icon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" fill="#7E869E" fill-opacity="0.25" />
                                <circle cx="12" cy="10" r="4" fill="#222222" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9463 20.2532C18.9616 20.3587 18.9048 20.4613 18.8063 20.5021C17.6048 21 15.8353 21 13 21H11C8.16476 21 6.3953 21 5.19377 20.5022C5.0953 20.4614 5.03846 20.3587 5.05373 20.2532C5.48265 17.2919 8.42909 15 12 15C15.571 15 18.5174 17.2919 18.9463 20.2532Z" fill="#222222" />
                            </svg>

                            <p>Profile</p>
                        </div>
                    </Link>
                    <Link href="/help">
                        <div className={styles.nav_icon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="9" fill="#7E869E" fill-opacity="0.25" />
                                <circle cx="12" cy="18" r="0.6" fill="#222222" stroke="#222222" stroke-width="0.2" />
                                <path d="M12 16V15.1432C12 14.429 12.357 13.762 12.9512 13.3659L13.5497 12.9669C14.4558 12.3628 15 11.3459 15 10.2569V10C15 8.34315 13.6569 7 12 7V7C10.3431 7 9 8.34315 9 10V10" stroke="#222222" stroke-width="1.2" />
                            </svg>

                            <p>Help</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </>
    )
}
