import Menu from "./components/layout/Menu"
import AboutUs from "./components/layout/AboutUs"
import Hero from "./components/layout/Hero"
import GetStartedAndFooter from "./components/layout/GetStartedAndFooter"

export function App() {
  return (
    <div className="min-h-svh max-w-svw overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Menu />
      <GetStartedAndFooter />
    </div>
  )
}

export default App
