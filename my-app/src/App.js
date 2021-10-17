import './App.css';
import {Counter} from './Counter';

function App() {
  return (
    <div>
      <Counter name={"first"} start={0} end={10}/>
        <Counter name={"second"} start={10} end={20}/>
    </div>
  );
}

export default App;
