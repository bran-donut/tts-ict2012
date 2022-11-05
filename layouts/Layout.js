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
      <main className="pl-16">{props.children}</main>
      <footer className="relative">
        <Footer isLogin={false} />
      </footer>
    </>
  );
}

export function ContainerWrapper({ children }) {
  return (
    <div className="bg-gray-300 px-28">
      <div className="py-4 px-8 bg-tts-background overflow-y-auto max-h-screen">
        {children}
      </div>
    </div>
  )
}