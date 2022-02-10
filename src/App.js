import logo from './logo.svg';
import './App.css';
import firstImage from "./italiantown.jpg"
function App() {
  return (
    
    <div>

     <div style={{border:"solid 1px black",maxWidth:'50vw'}}>

<h1 className='title red'>wassim</h1>

<div className='photo'>
<img  style={{width:250,heigth:250,margin:"30px"}}src={firstImage} />

<br/>

<img style={{width:250,heigth:250,margin:"30px"}}src="/tianjin.jpg" />

</div>
</div>


  <video width="320" height="240" controls>
  <source src="myVideo.mp4" type="video/mp4" />
</video>
</div>



  );
}

export default App;
