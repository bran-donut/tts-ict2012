import TopBar from "../components/TopBar";

export default function Layout(props) {
  return (
    <>
      <header>
        <TopBar />
      </header>
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
}
