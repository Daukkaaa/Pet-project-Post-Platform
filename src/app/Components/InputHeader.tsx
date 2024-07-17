import styles from "./Header.module.css";

export default function InputHeader() {
    return (
        <>
            <div className={styles.input_header}>
                <div className={styles.search_icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="6" stroke="#222222" />
                        <path d="M20 20L17 17" stroke="#222222" stroke-linecap="round" />
                    </svg>
                </div>
                <input className={styles.input}
                    type="text"
                    placeholder="Search"
                />
            </div>
        </>
    )
}
