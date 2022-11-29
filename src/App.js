import './App.css';
import Button from './Button.js';
import Input from './Input.js';
import Time from './Time.js';
import ImagePreview from './ImagePreview';
import Counter from './Counter/Counter';
import NavigationTab from './NavigationTab/NavigationTab';

function App() {
  return <>
    <div className=''>
      <h1>Hello hello world</h1> 
      <p>Would you like to tell me where you are from?
         <br/><b>
          Please put your country in the belowed box
         </b>
      </p>
    </div>
    
    <div>
      <Input/>
    </div>
    
    <div>
      <p>Please upload a photo represents your country.</p>
      <ImagePreview/>
    </div>

    <div className=''>
      <h1>About you</h1> 
      <p>Here are some questions we would like to know about you:
         <br/><b>
          Please finish the following questions and submit
         </b>
      </p>
      <NavigationTab/>
      <ul>
        <li><p>How many people are there in your family?</p> <Counter/> </li>
        <li><p>second</p></li>
        <li><p>third</p></li>
        <li><p>fourth</p></li>
        <li><p>fifth</p></li>
      </ul>
    </div>
  
    <div>
      <Button handleClick={()=>{
        window.alert("Please double check");
      }}>Finish</Button>
    </div>

    <div>
      <Time/>
    </div>

  </>

}

export default App;
