import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import requests from './requests'
import Banner from './components/Banner';


function App() {
  console.log(requests.fetchTrending);
  return (
    <div >
      <h1 style={{color:"red"}}>Netflix</h1>
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="NetflixOriginals" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="ActionMovies" fetchurl={requests.fetchActionMovies}/>
      <Row title="ComedyMovies"fetchurl={requests.fetchComedyMovies}/>
      <Row title="HorrorMovies"fetchurl={requests.fetchHorrorMovies}/>
      <Row title="RomanceMovies"fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"fetchurl={requests.fetchDocumentaries}/>
    

     
    </div>
  );
}

export default App;




