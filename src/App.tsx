import { useRef, useState } from 'react';
import './App.css';
import { Colors } from './enums/enum';
import { IPassStren } from './inerface/passStren.inerface';
import { regexHard, regexMedium } from './regex/regex';

function App() {
const passValue  = useRef<HTMLInputElement>(null)
const [passStren, setPassStren] = useState<IPassStren>({
  firstBlock: Colors.GRAY,
  secondBlock: Colors.GRAY,
  thirdBlock: Colors.GRAY,
})  

const checkStren = () : void => {
  if (passValue.current === null) {
    return
  }

  const { value } = passValue.current

  if(!value.length){
     setPassStren({
      firstBlock: Colors.GRAY,
      secondBlock: Colors.GRAY,
      thirdBlock: Colors.GRAY,
    })
    
    return
  }

  if (value.length < 8) {
    setPassStren({
      firstBlock: Colors.RED,
      secondBlock: Colors.RED,
      thirdBlock: Colors.RED,
    })

    return
  }

  if(regexHard.test(value)){
    setPassStren({
      firstBlock: Colors.GREEN,
      secondBlock: Colors.GREEN,
      thirdBlock: Colors.GREEN,
    })

    return 
  }

  if(regexMedium.test(value)){
    setPassStren({
      firstBlock: Colors.YELLOW,
      secondBlock: Colors.YELLOW,
      thirdBlock: Colors.GRAY,
    })

    return
  }

  setPassStren({
    firstBlock: Colors.RED,
    secondBlock: Colors.GRAY,
    thirdBlock: Colors.GRAY,
  })
}

  return (
    <div className="App">
      <form>
        <input type="text"
          ref={passValue}
          onChange={checkStren}
        />
      </form>
      <div className='section-container'>
        <section style={{backgroundColor: passStren.firstBlock}}></section>
        <section style={{backgroundColor: passStren.secondBlock}}></section>
        <section style={{backgroundColor: passStren.thirdBlock}}></section>
      </div>
    </div>
  );
}

export default App;
