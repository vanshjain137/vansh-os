import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

import { Dock, Navbar, Welcome } from "#components/index.js"
import { Contact, Finder, Image, Resume, Safari, Terminal, Text } from "#windows/index.js";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
    </main>
  )
}

export default App
