export default function Home() {
  return (
    <>
      <div className="profile_block">
        <div className="profile_img">
          <svg className="profile_icon" width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="#7E869E" fill-opacity="0.25" />
            <circle cx="12" cy="10" r="4" fill="#222222" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5674 20.0662 14.3928 21 12 21C9.60728 21 7.43264 20.0663 5.82057 18.5433C5.73877 18.466 5.72101 18.3427 5.77918 18.2463C6.94337 16.318 9.29215 15 12.0001 15C14.7079 15 17.0567 16.3179 18.2209 18.2462Z" fill="#222222" />
          </svg>
        </div>
        <div className="profile_bio">
          <p>Zumgali Daulet</p>
          <p>Frontend Developer</p>
        </div>
        <div className="saved_block">
          <svg className="saved_img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17.7639C20 19.2507 18.4354 20.2177 17.1056 19.5528L12.8944 17.4472C12.3314 17.1657 11.6686 17.1657 11.1056 17.4472L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5Z" fill="#2A4157" fill-opacity="0.24" />
            <rect x="6" y="5" width="12" height="2" rx="1" fill="#222222" />
          </svg>
          <p>Saved items</p>
        </div>
      </div>
      <main>
      </main>
    </>
  );
}

