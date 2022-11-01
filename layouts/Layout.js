import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

export default function Layout(props) {
  return (
    <>
      <header className="sticky top-0 z-50">
        <TopBar />
      </header>
      <aside>
        <NavBar />
      </aside>
      <main className="pl-12">{props.children}</main>
      <footer></footer>
    </>
  );
}
