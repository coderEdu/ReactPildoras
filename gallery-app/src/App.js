/*  ####################    La misma galería de imágenes pero esta vez usando react y no vanilla js. #####################
    **********************************************************************************************************************

function GaleriaDeImagenes() {
  const [imagenes, setImagenes] = useState([
    { src: 'Img/paisaje1.jpg', alt: 'Imagen 1', caption: 'Pie de foto Imagen 1' },
    { src: 'Img/paisaje2.jpg', alt: 'Imagen 2', caption: 'Pie de foto Imagen 2' },
    { src: 'Img/paisaje3.jpg', alt: 'Imagen 3', caption: 'Pie de foto Imagen 3' },
    { src: 'Img/paisaje4.jpg', alt: 'Imagen 4', caption: 'Pie de foto Imagen 4' }
  ]);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const agregarImagen = () => {
    if (url && caption) {
      setImagenes([...imagenes, { src: url, alt: `Imagen ${imagenes.length + 1}`, caption }]);
      setUrl('');
      setCaption('');
    } else {
      alert('Por favor introduce imagen y pie');
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Galería de imágenes</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL de la imagen" />
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Pie de foto" />
        <button onClick={agregarImagen}>Agregar Imagen</button>
      </div>
      <div className="galeria" style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '0 auto', maxWidth: '80%' }}>
        {imagenes.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} width="300" height="250" />
            <p>{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
*/

//  ######################################   vids-(7-8)   ##############################################
//  ****************************************************************************************************
//
/*
function App() {
  // Definir el estado para almacenar el resultado de la suma.
  const [resultado, setResultado] = useState(null);
  const elemento = <h1 className='App-titleBgColor'>Hola Muchachos!!</h1>

  const ShowSuma = () => {
    const result = Suma(15,9);
    setResultado(result);
  }

  return (
      <div className="App">
        <header className="App-header">
          <button onClick={ShowSuma} style={{padding: "10px"}}>Click me</button>
          {elemento}{{Suma(5,7)}}{(resultado != null) && <h3>El resultado es: {resultado}</h3>}
        </header>
      </div>
  );
}

function Suma(a, b) {
  return a + b;
}
*/

//  ######################################   vid-(9) Reproductor de video   ##############################################
//  **********************************************************************************************************************
//
/*
function App() {
  const videoRef = useRef(null);

  const videoPlay = () => {
    videoRef.current.play();
  }

  const videoPause = () => {
    videoRef.current.pause();
  }

  return (
    <div className="App">
      <header className="App-header">
        <video ref={videoRef} width="600">
          <source src={video} type='video/mp4'></source>
        </video>
        <div className='SpaceBtwButtons'>
          <button onClick={videoPlay} className='BtnSkin'>Play</button>
          <button onClick={videoPause} className='BtnSkin'>Pause</button>
        </div>
      </header>
    </div>
  );
}*/

//  ######################################   vid-(10) Conversor Euro-Dolar   ##############################################
//  ***********************************************************************************************************************
//
import {useRef} from 'react';
import './App.css';
// import video from "./assets/Video.mp4";

function App() {
  const inputRef = useRef();
  const resulRef = useRef();
  
  const Converter = () => { 
    const entered_val = parseFloat(inputRef.current.value);
    let eurValue = 0;
    if (isNaN(entered_val)) {
      eurValue = 0;
    } else {
      eurValue = entered_val;
    }
    const d = eurValue * 1.08;
    resulRef.current.innerHTML = d.toFixed(2) + " $USD";
  }
    
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Conversor Euro-Dólar</h1>
        <input type='text' className='TxtEurDol' ref={inputRef}></input>
        <button className='BtnSkin' onClick={Converter}>Convertir</button>
        <h2 ref={resulRef}></h2>
      </header>
    </div>
  );  
}

export default App;