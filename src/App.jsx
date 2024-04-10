import './App.css'
import Home from './pages/home';
import Header from './pages/header';
import MainContent from './pages/mainContent';
import SecondSection from './pages/secondSection';
import ThirdSection from './pages/thirdSection';

function App() {

  return (
    <>
      <Home>
        <Header/>
        <MainContent/>
      </Home>
      < SecondSection/>
      < ThirdSection/>
    </>
  )
}

export default App
