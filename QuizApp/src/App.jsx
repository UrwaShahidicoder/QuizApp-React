import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Router>
        <main className="w-full max-h-screen h-screen min-h-screen bg-neutral-50 text-neutral-600 flex flex-col bg-[url('https://cdn.pixabay.com/photo/2023/03/22/04/32/futuristic-7868625_1280.jpg')] bg-cover bg-no-repeat bg-center relative overflow-hidden">
          {/* overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* content */}
          <Home />

        </main>
      </Router>
    </>
  )
}

export default App