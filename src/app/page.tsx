import Post_Block from "./Components/HomePage/Post_Block";
import Profile_Home from "./Components/HomePage/Profile_Home";
import Aside_Page from "./Components/HomePage/Aside_Page";

export default function Home() {
  return (
    <>
      <div className="home_page">
        <div>
          <Profile_Home />
        </div>
        <main>
          <Post_Block />
        </main>
        <aside>
          <Aside_Page />
        </aside>
      </div>
    </>
  );
}

