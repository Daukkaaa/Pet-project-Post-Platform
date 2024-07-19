import Image from "next/image"
import Link from "next/link"

export default function Aside_Page() {
    return (
        <>
            <Link href="https://kaspi.kz/"><Image
                className="aside_img"
                src="/screenshot_04.png"
                alt="advirtising img"
                width={300}
                height={500}
            /></Link>
        </>
    )
}
