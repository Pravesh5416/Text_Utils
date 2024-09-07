import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  let heading = "नीचे विश्लेषण करने के लिए पाठ दर्ज करें :";

  const [alert, setAlert] = useState(null); // setting alert state

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not

  const theme = [
    {
      themeName: "रोशनी",
      themeType: "light",
      themeFunction: () => {
        document.body.style.backgroundColor = "white";
        setMode("light");
        showAlert("लाइट मोड सक्षम किया गया है", "success");
      },
    },
    {
      themeName: "अँधेरा",
      themeType: "dark",
      themeFunction: () => {
        document.body.style.backgroundColor = "#042743";
        setMode("dark");
        showAlert("डार्क मोड सक्षम कर दिया गया है", "success");
      },
    },
    {
      themeName: "हरा",
      themeType: "success",
      themeFunction: () => {
        document.body.style.backgroundColor = "green";
        setMode("dark");
        showAlert("थीम हरे रंग पर सेट है", "success");
      },
    },
    {
      themeName: "लाल",
      themeType: "danger",
      themeFunction: () => {
        document.body.style.backgroundColor = "red";
        setMode("dark");
        showAlert("थीम लाल रंग पर सेट है", "success");
      },
    },
    {
      themeName: "स्लेटी",
      themeType: "secondary",
      themeFunction: () => {
        document.body.style.backgroundColor = "grey";

        setMode("dark");
        showAlert("थीम स्लेटी पर सेट है", "success");
      },
    },
  ];

  const [text, setText] = useState("");

  const button = [
    {
      buttonName: "बड़े अक्षर",
      behaviour: () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("अपर केस में परिवर्तित", "success");
      },
    },
    {
      buttonName: "छोटे अक्षर",
      behaviour: () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("लोअरकेस में परिवर्तित", "success");
      },
    },
    {
      buttonName: "स्पष्ट करें",
      behaviour: () => {
        let newText = "";
        setText(newText);
        showAlert("पाठ साफ़ हो गया है", "success");
      },
    },
    {
      buttonName: "पाठ कॉपी करें",
      behaviour: () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        showAlert("पाठ क्लिपबोर्ड पर कॉपी किया गया", "success");
      },
    },
    {
      buttonName: "अतिरिक्त स्थान हटाएं",
      behaviour: () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showAlert("पाठ से अतिरिक्त रिक्त स्थान हटा दिए गए हैं", "success");
      },
    },
    {
      buttonName: "मूल बनाना",
      behaviour: () => {
        let newText = text
          .split(" ")
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ");
        setText(newText);
        showAlert("पाठ को बड़े अक्षरों में लिखा गया है", "success");
      },
    },
  ];

  // custom theme button

  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} theme={theme} title={"प्रवेश"} />

      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route
              exact path="/"
              element={ */}
        <TextForm
          heading={heading}
          text={text} // Pass text state
          setText={setText} // Pass setText function
          button={button} // Pass button array
          mode={mode}
          theme={theme}
        />
        {/* }
            /> */}

        {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
