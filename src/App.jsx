import { useState } from "react";
import Button from "./components/Button";
import PopUpCard from "./components/PopUpCard";

function App() {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");

  const handleDelete = () => {
    setText("Delete");
    setShow(false);
  };

  const handleEdit = () => {
    setText("Edit");
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="flex justify-center items-center h-screen gap-3">
          <Button title={"Delete"} setshow={handleDelete} />
          <Button title={"Edit"} setshow={handleEdit} />
        </div>
      )}
      {!show && <PopUpCard setshow={setShow} title={text} />}
    </>
  );
}
export default App;
