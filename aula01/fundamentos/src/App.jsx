import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css"


function App() {

  return (
    <div className="containerApp">
      <Header titulo="Meu header" subtitulo="teste" />
      <Body/>
      <Footer copyright="Eric Mara"/>
    </div>
  )
}

export default App
