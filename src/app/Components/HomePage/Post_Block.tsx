import Posts from "./Posts";

export default function Post_Block() {
    const posts = [
        {
            id: 1,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: '/hero.webp'
        },
        {
            id: 1,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: '/hero.webp'
        },
        {
            id: 1,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: '/hero.webp'
        },
    ]

    return (
        <>
            <div className="post_block">
                <Posts posts={posts} />
            </div >
        </>
    )
}

