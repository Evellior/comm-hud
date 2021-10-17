import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import { MyResponsiveLine } from './components/DummyChart';

const videoSource = "https://www.w3schools.com/tags/movie.mp4";

function App() {
  return (
    <div className="App">
      <BackgroundVideo
        videoSource={videoSource}
        children={
          <MyResponsiveLine />
        }
      />
    </div>
  );
}

export default App;
