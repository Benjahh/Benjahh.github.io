import { Home } from "@/pages/home";
import { Footer } from "./components/utils/Footer";

function App() {
  return (
    <main className="relative bg-noise overflow-hidden  flex flex-col items-center justify-center  text-white h-full w-auto">
      <Home />
      <Footer />
    </main>
  );
}

export default App;
