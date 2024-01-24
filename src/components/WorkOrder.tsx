import React, { useEffect } from "react";
import { useState } from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import Multiple from "../components/Multiple";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import DatePicker from "./DatePicker";

// #2bb359-green
// #9333ea-purple

const WorkOrder = () => {
  const [myArray, setMyArray] = React.useState<string[]>([]);
  const [elements, setElements] = React.useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No File");

  const handleFileChange = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  React.useEffect(() => {
    console.log(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "  No File Selected");
  }, [selectedFile]);

  const [formData, setFormData] = useState({
    elements: "",
    level: "",
    duration: "",
    nature: "",
    date: "",
    time: "",
    section: "",
    test: "",
    manager: "",
    uploadDoc: "",
  });

  React.useEffect(() => {
    console.log(myArray);
  }, [myArray]);

  if (elements) {
    if (!myArray.includes(elements)) {
      setMyArray([...myArray, elements]);
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="p-4">
      <div>
        <div className="border-2 border-[#9333ea] mt-4 p-2 rounded-lg w-64">
          <h4 className="text-center">Work Order Request</h4>
        </div>

        <div className="border-2 border-[#2bb359]  w-full mt-4 rounded-lg p-3">
          <div className="">
            <div>
              {" "}
              <Multiple />{" "}
            </div>

            <div className="w-75% flex mt-4">
              <div className="inline-block mr-16 ">
                <InputLabel>Impact Level</InputLabel>

                <Select
                  className="w-48"
                  name="level"
                  value={formData.level}
                  onChange={(e) => {
                    const newObj = { ...formData, level: e.target.value };
                    setFormData(newObj);
                  }}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="critical">Critical</MenuItem>
                </Select>
              </div>

              <div className="inline-block mr-16">
                <InputLabel>Impact Duration</InputLabel>

                <Select
                  className=" w-48"
                  name="duration"
                  value={formData.duration}
                  onChange={(e) => {
                    const newObj = { ...formData, duration: e.target.value };
                    setFormData(newObj);
                  }}
                >
                  <MenuItem value="2 Hrs">2 Hr(s)</MenuItem>
                  <MenuItem value="4 Hrs">4 Hr(s)</MenuItem>
                  <MenuItem value="6 Hrs">6 Hr(s)</MenuItem>
                  <MenuItem value="8 Hrs">8 Hr(s)</MenuItem>
                  <MenuItem value="10 Hrs">10 Hr(s)</MenuItem>
                  <MenuItem value="12 Hrs">12 Hr(s)</MenuItem>
                  <MenuItem value="14 Hrs">14 Hr(s)</MenuItem>
                  <MenuItem value="20 Hrs">20 Hr(s)</MenuItem>
                </Select>
              </div>

              <div className="inline-block mr-16">
                <InputLabel>Nature of work</InputLabel>

                <TextField
                  type="Text"
                  name="nature"
                  className="w-48"
                  value={formData.nature}
                  onChange={(e) => {
                    const newObj = { ...formData, nature: e.target.value };
                    setFormData(newObj);
                  }}
                />
              </div>

              <div className="inline-block">
                <InputLabel>Execution Date</InputLabel>
                <DatePicker title={""} dateType={""} />
              </div>
            </div>

            <div className="w-full flex mt-3">
              <div className="inline-block  mr-14">
                <InputLabel>Execution time</InputLabel>

                <TextField
                  type="time"
                  className="border-2 rounded-lg border-black w-48 "
                  value={formData.time}
                  onChange={(e) => {
                    const newObj = { ...formData, time: e.target.value };
                    setFormData(newObj);
                  }}
                />
              </div>

              <div className="inline-block ">
                <InputLabel>Execution section</InputLabel>
                <Select
                  className="w-80 "
                  name="section"
                  value={formData.section}
                  onChange={(e) => {
                    const newObj = { ...formData, section: e.target.value };
                    setFormData(newObj);
                  }}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="critical">Critical</MenuItem>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <InputLabel>Test</InputLabel>

              <TextField
                type="text"
                name="test"
                className=" w-full"
                // sx={{hieght:"10"}}
                value={formData.test}
                onChange={(e) => {
                  const newObj = { ...formData, test: e.target.value };
                  setFormData(newObj);
                }}
              />
            </div>

            <div className="mt-4">
              <InputLabel>Select Manager</InputLabel>

              <Select
                className=" w-full "
                name="manager"
                value={formData.manager}
                onChange={(e) => {
                  const newObj = { ...formData, manager: e.target.value };
                  setFormData(newObj);
                }}
              >
                <MenuItem value="Micheal">Micheal</MenuItem>
                <MenuItem value="wilson">Wilson</MenuItem>
                <MenuItem value="philip">Philip</MenuItem>
                <MenuItem value="mango">Mango</MenuItem>
              </Select>
            </div>

            <div className="mt-3">
              <div>
                {/* <label className="inline-block mb-2 mr-4">
                  Attach Document:{" "}
                </label> */}
                <label
                  className="inline-block py-[.32rem] px-4 bg-[#9333ea] hover:bg-[#9333ba] rounded "
                  htmlFor="file_input"
                >
                  <p className="text-white">
                    <FileUploadOutlinedIcon className="inline-block" /> Upload
                    File
                  </p>
                </label>
                <label className="p-4 font-bold">{fileName}</label>
                <input
                  id="file_input"
                  className="hidden"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-right">
          <button
            className=" mt-2 border-2 bg-[#9333ea] text-white rounded-lg w-28 h-10 "
            type="submit"
            value={formData.submit}
            onChange={(e) => {
              const newObj = { ...formData, submit: e.target.value };
              setFormData(newObj);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkOrder;
