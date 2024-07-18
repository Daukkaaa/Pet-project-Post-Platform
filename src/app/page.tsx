import Main_Home from "./Components/HomePage/Main_Home";
import Profile_Home from "./Components/HomePage/Profile_Home";

export default function Home() {
  return (
    <>
      <div className="home_page">
        <Profile_Home />
        <main>
          <Main_Home />
        </main>
        <aside>
        </aside>
      </div>
    </>
  );
}

