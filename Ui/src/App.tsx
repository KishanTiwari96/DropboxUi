import './App.css'
import Collaboration from './components/Collaboration'
import Content from './components/Content management'
import Permissions from './components/Permissions'
import Security from './components/Security'

function App() {

  return (
    <>
    <Permissions />
    <Content />
    <Collaboration />
    <Security />
    </>
  )
}

export default App
