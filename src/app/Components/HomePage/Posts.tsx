import Image from "next/image";

export default function Posts({ posts }: PostsProps) {
    return (
        <>
            {posts.map((el) => (
                <div className="post" key={el.id}>
                    <div className="post_bio">
                        <svg className="post_bio_icon" width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="#7E869E" fill-opacity="0.25" />
                            <circle cx="12" cy="10" r="4" fill="#222222" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2209 18.2462C18.2791 18.3426 18.2613 18.466 18.1795 18.5432C16.5674 20.0662 14.3928 21 12 21C9.60728 21 7.43264 20.0663 5.82057 18.5433C5.73877 18.466 5.72101 18.3427 5.77918 18.2463C6.94337 16.318 9.29215 15 12.0001 15C14.7079 15 17.0567 16.3179 18.2209 18.2462Z" fill="#222222" />
                        </svg>
                        <p>Zumgali Daulet</p>
                    </div>
                    <div className="divider_1"></div>
                    <div className="post_title">
                        <p>{el.title}</p>
                    </div>
                    <div className="post_img_con">
                        <Image
                            className="post_img"
                            src={el.img}
                            alt="img"
                            layout="responsive"
                            width={500}
                            height={300}
                        />
                    </div>
                    <div className="post_action">
                        <div className="post_icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#222222" />
                            </svg>
                            <p>Like</p>
                        </div>
                        <div className="post_icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.17157 6.17157C4 7.34315 4 9.22876 4 13V17V18.5858C4 19.4767 5.07714 19.9229 5.70711 19.2929L7.85355 17.1464C7.92581 17.0742 7.96194 17.0381 8.00788 17.019C8.05383 17 8.10492 17 8.20711 17H14C15.8638 17 16.7956 17 17.5307 16.6955C18.5108 16.2895 19.2895 15.5108 19.6955 14.5307C20 13.7956 20 12.8638 20 11C20 9.13623 20 8.20435 19.6955 7.46927C19.2895 6.48915 18.5108 5.71046 17.5307 5.30448C16.7956 5 15.8638 5 14 5H12C8.22876 5 6.34315 5 5.17157 6.17157Z" fill="#7E869E" fill-opacity="0.25" />
                                <path d="M8.5 9.5L15.5 9.5" stroke="#222222" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.5 12.5L13.5 12.5" stroke="#222222" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p> Comment</p>
                        </div>
                        <div className="post_icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17.7639C20 19.2507 18.4354 20.2177 17.1056 19.5528L12.8944 17.4472C12.3314 17.1657 11.6686 17.1657 11.1056 17.4472L6.89443 19.5528C5.56462 20.2177 4 19.2507 4 17.7639V5Z" fill="#2A4157" fill-opacity="0.24" />
                                <rect x="6" y="5" width="12" height="2" rx="1" fill="#222222" />
                            </svg>
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
