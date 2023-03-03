import logo from './logo.svg';
import './App.css';
import QRCodeScanner from "./components/QRCodeScanner/QRCodeScanner";

function App() {

  const onNewScanResult = (decodedText, decodedResult) => {
    console.log('decodedText', decodedText)
  }
  return (
    <div className="App">
      <QRCodeScanner
          fps={10}
          // qrbox={{width: 250, height: 250} }
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  );
}

export default App;
