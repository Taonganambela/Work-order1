import "./App.css";
import BasicSelect from "./components/Exa";
import Exa from "./components/Exa";
import WorkOrder from "./components/WorkOrder";
import Multiple from "./components/Multiple";
import DatePicker from "./components/DatePicker";
import Test from './Test'
import FormStep1 from "./components/FormStep1";

function App() {
  return (
    <div>
      <div className="w-25% text-left">
        {/* <FormStep1/> */}
      </div>
    
      <div className="w-3/4 ">
        <WorkOrder />
      </div>

    </div>
    
  );
}

export default App;
