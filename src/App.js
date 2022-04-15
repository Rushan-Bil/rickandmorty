import { Route, Routes } from 'react-router-dom';
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import AboutMe from "./pages/AboutMe/AboutMe";
// import CharactersPage from './pages/Characters/CharactersPage/CharactersPage';
import CharactersList from './pages/Characters/CharactersList/CharactersList';

function App() {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
