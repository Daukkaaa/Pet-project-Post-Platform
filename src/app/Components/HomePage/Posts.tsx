import Image from "next/image";

export default function Posts() {
    const posts = [
        {
            id: 1,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: 'https://velog.velcdn.com/images/gygy/post/b36ba98d-c333-438e-b134-b7acddac5b32/image.png'
        },
        {
            id: 2,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: 'https://velog.velcdn.com/images/gygy/post/b36ba98d-c333-438e-b134-b7acddac5b32/image.png'
        },
        {
            id: 3,
            title: "Ever feel like you are drowning in urgent tasks that don't actually move you forward?",
            img: 'https://velog.velcdn.com/images/gygy/post/b36ba98d-c333-438e-b134-b7acddac5b32/image.png'
        },
    ]

    return (
        <>
            {posts.map((el) => (
                <div className="posts" key={el.id}>
                    <p>{el.title}</p>
                    <Image
                        src={el.img}
                        alt="img"
                        width={350}
                        height={200}
                    />
                </div>
            ))}
        </>
    )
}
