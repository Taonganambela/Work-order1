import * as React from "react";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import IconButton from '@mui/material/IconButton';
import { InputLabel, MenuItem, Select } from "@mui/material";



export default function Multiple() {
  const [myArray, setMyArray] = React.useState<string[]>([]);
  const [element, setElement] = React.useState("");

  React.useEffect(() => {
    console.log(myArray);
  }, [myArray]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!myArray.includes(event.target.value)) {
      setMyArray([...myArray, event.target.value]);
    }
  };

  if (element) {
    if (!myArray.includes(element)) {
      setMyArray([...myArray, element]);
    }
  }


  const handleDelete = (value: string) => {
    const updatedArray = myArray.filter(item => item !== value);
    setMyArray(updatedArray);
};

  return (
    <div className='flex space-x-10 '>
     
       <div>
          <div className="" >
              <InputLabel>Impacted Network Elements</InputLabel>
                

                <Select
                    // labelId="ine"
                    id="demo-simple-select"
                    onChange={handleChange}
                    className=" w-80"
                >
                  
                    <MenuItem  value={'MCO1'}>MCO1</MenuItem>
                    <MenuItem value={'MCO2'}>MCO2</MenuItem>
                    <MenuItem value={'MCO3'}>MCO3</MenuItem>
                    <MenuItem value={'MCO4'}>MCO4</MenuItem>
                </Select>
                
              
          </div>
        </div>

      <div className="flex  relative">
            {myArray.length > 0 &&
                myArray.map((element) => (
               <div className="bg-purple-700 border-2  rounded-lg text-xs flex justify-center items-center text-white h-8 mt-8 w-28 ml-4">
                    <IconButton onClick={() => handleDelete(element)}>
                    <HighlightOffOutlinedIcon className="w-2 text-white t" /> 
                         </IconButton>
                        {element}
                    
                </div>
          ))}
      </div>
      
    </div>
  );
}