import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-black via-emerald-950 to-lime-500 p-0">
      <NavBar/>
      <div className="flex-1 overflow-auto">
        <div className="md:px-12 lg:24">
          {children}
        </div>
        <Footer/>
      </div>
    </div>
  );
}