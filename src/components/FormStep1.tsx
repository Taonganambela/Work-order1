// import React, { useState } from 'react';

// const FormStep1 = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event: { target: { files: any[]; }; }) => {
   
//     const file = event.target.files[0];
    
    
//     setSelectedFile(file);
//   };

//   React.useEffect(()=>{
//     console.log(selectedFile)
//   },[selectedFile])

//   // const handleUpload = () => {
   
//   //   if (selectedFile) {
//   //     console.log('Selected File:', selectedFile);
//   //   } else {
//   //     console.log('No file selected.');
//   //   }
//   // };

//   return (
//     <div>
//       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
//       <input id="file_input" type="file" onChange={handleFileChange} startIcon={<FileUploadOutlinedIcon />}/>
      
//     </div>
//   );
// };

// export default FormStep1;

