import React, { useState, useRef } from "react";
import TimePicker from "react-time-picker";
const Formp = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const today = new Date().toLocaleDateString();
  const d = new Date();
  const hr = d.getHours();
  const min = d.getMinutes();
  const [value, onChange] = useState(`${hr}:${min}`);
  const [value1, setChange] = useState(`${hr}:${min}`);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Pname, setPname] = useState("");
  const [visitType, setVisitType] = useState(" ");
  const [imgsrc,setImgsrc]= useState()

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setImgsrc(e.target.result)
      };
      reader.readAsDataURL(file); 
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    // Put the object into storage
    const objectData = {
      Name: name,
      Email: email,
      Person: Pname,
      Type: visitType,
      Tentry: value,
      Texit: value1,
      Date: today,
      imgsrc : imgsrc
    };
    SaveDataToLocalStorage(objectData);
    ResetValue();
  };
  const ResetValue = () => {
    setName("");
    setPname("");
    setEmail("");
    setVisitType(" ");
    onChange(`${hr}:${min}`);
    setChange(`${hr}:${min}`);
    setImgsrc()
    
  };
  const SaveDataToLocalStorage = (data) => {
    let Lists = [];
    Lists = JSON.parse(localStorage.getItem("Logs")) || [];
    Lists.push(data);
    localStorage.setItem("Logs", JSON.stringify(Lists));
    console.log(Lists);
  };
  return (
    <div className="container my-2">
      <form className="row g-3" onSubmit={onFormSubmit}>
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-12">
          <label for="file" className="form-label">
            Selfie
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <div
            style={{
              height: "60px",
              width: "60px",
              border: "1px dashed black",
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
            ref= {uploadedImage}
              src={imgsrc}
              style={{
                width: "100%",
                height: "100%",
                position: "acsolute",
              }}
            />
          </div>
          {/* <input
            type="file" accept="image/*" capture="user" id="file" onChange={handleImageUpload ref={imageUploader} }
          /> */}
        </div>

        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Person to visit
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={Pname}
            onChange={(e) => {
              setPname(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-2">
          <label for="inputState" className="form-label">
            Type of visit
          </label>
          <select
            id="inputState"
            className="form-select"
            value={visitType}
            onChange={(e) => setVisitType(e.target.value)}
            required
          >
            <option value="">Choose...</option>
            <option value="Meeting">Meeting</option>
            <option value="Delivery">Delivery</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label for="inputTime" className="form-label">
              Time of entry
            </label>
            <TimePicker
              className="form-label mx-2"
              id="inputTime"
              onChange={onChange}
              value={value}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label for="inputTime" className="form-label">
                Date of visit
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTime"
                value={today}
                disabled
              />
            </div>
          </div>

          <div className="col-md-4">
            <label for="inputDate" className="form-label">
              Time of exit
            </label>
            <TimePicker
              className="form-label mx-2"
              id="inputDate"
              onChange={setChange}
              value={value1}
            />
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formp;
