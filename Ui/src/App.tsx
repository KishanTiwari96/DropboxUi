import './App.css'
import Collaboration from './components/Collaboration'
import Content from './components/Content management'
import Permissions from './components/Permissions'
import Reveal from './components/Reveal'
import Security from './components/Security'

function App() {

  return (
    <>
      <Reveal>
        <Permissions />
      </Reveal>
      <Reveal>
        <Content />
      </Reveal>
      <Reveal>
        <Collaboration />
      </Reveal>
      <Reveal>
        <Security />
      </Reveal>
    </>
  )
}

export default App
