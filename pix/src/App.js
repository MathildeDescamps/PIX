import './style/App.css';
import Logo from './components/Logo';
import Svg from './components/Svg';

function App() {
  return (
    <div className="react-app">
      {/* <svg id="pix-svg" data-name="pix-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1024">
        <path d="M115.36,283.84V740.48H267.2V573.9h76.89S462,575.18,475.33,448.19s-82-153.11-82-153.11-16.71-9.11-51-11.24S115.36,283.84,115.36,283.84Z"/>
        <rect x="516.8" y="284" width="151.52" height="151.52"/>
        <rect x="710.24" y="284" width="151.52" height="151.52"/>
        <rect x="861.76" y="435.51" width="151.52" height="151.52"/>
        <rect x="1013.28" y="587.03" width="151.52" height="151.52"/>
        <rect x="1013.28" y="284" width="151.52" height="151.52"/>
        <rect x="710.24" y="587.03" width="151.52" height="151.52"/>
        <rect x="516.8" y="477.29" width="151.52" height="263.17"/>
      </svg> */}
      <Svg />
      <div id="logo-wrapper">
        <Logo />
      </div>
    </div>
  );
}

export default App;
