import * as React from "react";
import  { SelectChangeEvent } from "@mui/material/Select";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import IconButton from '@mui/material/IconButton';
import { Box } from "@mui/material";


export default function BasicSelect() {
  const [myArray, setMyArray] = React.useState<string[]>([]);
  const [elements, setElements] = React.useState("");

  React.useEffect(() => {
    console.log(myArray);
  }, [myArray]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setElements(event.target.value as string);
  };

  if (elements) {
    if (!myArray.includes(elements)) {
      setMyArray([...myArray, elements]);
    }
  }


  const handleDelete = (value: string) => {
    console.log("value",value)

    const updatedArray = myArray.filter(item => {
        
        if(item != value){
            return true
        }
        return false

    
    
    });
    setElements("")
    setMyArray(updatedArray);
  };

  return (
    <div className='flex space-x-10'>
      <Box sx={{ minWidth: 120, maxWidth: 120 }}>
       <div>

            <label>Impacted Network Elements
              <br/>
              <select
        
                  id="impacted-network-elements"
                  value={elements}
                  onChange={handleChange}
                  className="border-2 rounded-lg border-black w-56 h-10"
              >

                  <option value="MSCO1">MSCO1</option>
                  <option value="MSCO2">MSCO2</option>
                  <option value="MSCO3">MSCO3</option>
              </select>
            </label>
            
        </div>

      </Box>
      <div className="flex  relative">
            {myArray.length > 0 &&
                myArray.map((elements,index) => (
               <div key={index} className="bg-purple-700 border-2 w-20 rounded-lg  h-10 flex justify-center items-center text-white">
                    <IconButton onClick={() => handleDelete(elements)}>
                    <HighlightOffOutlinedIcon className="w-5 text-white mr-2" /> 
                         </IconButton>
                        {elements}
                    
                </div>
          ))}
      </div>
    
    </div>
  );
}
