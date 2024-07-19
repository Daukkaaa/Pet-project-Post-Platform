import Publication_Block from "@/app/addPost/Publication_Block";
import Profile_Publication from "@/app/addPost/Profile_Punlication";

export default function Home() {
    return (
        <>
            <div className="home_page">
                <div>
                    <Profile_Publication />
                </div>
                <main>
                    <Publication_Block />
                </main>
            </div>
        </>
    );
}
