import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <>
      <header className="sticky top-0 z-50">
        <TopBar notificationCount={3} />
      </header>
      <aside>
        <NavBar />
      </aside>
      <main className="pl-12">{props.children}</main>
      <footer className="relative">
        <Footer isLogin={false} />
      </footer>
    </>
  );
}