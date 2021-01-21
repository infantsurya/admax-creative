// import logo from './logo.svg';
import './App.css';
import AdCreativePage from './components/AdCreativePage'
import data from './data/brandAwareness';

function App() {
  const objective = 'brand_awareness';
  var key = null;

  data.map((option,index) => {
    if(option.objective == objective)
    {
      console.log()
      key = index;
    }
  });
  return (
    <div className="App">
      <AdCreativePage data={data[key]}/> 
      {/* {console.log(reach)} */}
    </div>
  );
}

export default App;
