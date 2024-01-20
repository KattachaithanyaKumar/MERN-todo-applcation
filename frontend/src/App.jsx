import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");

  const getAlldata = () => {
    axios
      .get("http://localhost:3000/api/item")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAlldata();
  }, []);

  const createItem = () => {
    axios
      .post("http://localhost:3000/api/item", {
        content: input,
      })
      .then((res) => {
        console.log(res.data);
        getAlldata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const complete = (id) => {
    axios
      .put(`http://localhost:3000/api/item/${id}`)
      .then((res) => {
        console.log(res.data);
        getAlldata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:3000/api/item/${id}`)
      .then((res) => {
        console.log(res.data);
        getAlldata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="box">
      <div className="input">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={createItem}>Add Item</button>
      </div>
      <div className="items">
        {data?.map((item, index) => (
          <div className="item" key={index}>
            {item.completed ? (
              <p>
                <del>{item.content}</del>
              </p>
            ) : (
              <>{item.content}</>
            )}

            <div className="actions">
              <button onClick={() => complete(item._id)}>complete</button>
              <button onClick={() => deleteItem(item._id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
