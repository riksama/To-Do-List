
import "./App.css";
import TextField from '@material-ui/core/TextField';
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import {db} from "./firebase_config.js"
import firebase from "firebase";
import TodoListItem from "./Todo";
function App() {

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);   // blank to run only on first launch

  const getTodos = () => {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress
      }))
      );
    });
  }

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      inprogress:"true",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");

  }

  return (
    <div className="App" >
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw"
      }}>    
      
        <h1>TO DO LIST</h1>
      <form>
      <TextField 
        id="standard-basic"
        label="To do"
        value = {todoInput}
        onChange={(e) => 
          setTodoInput(e.target.value)}
        style={{ width: "40vw", maxwWidth: "500px"}} />
        <Button type="submit" onClick={addTodo} variant="contained" style={{display: "none"}}>Enter</Button>
      </form>
    <div style={{ maxwWidth: "500px", width: "40vw", marginTop: "24px"}}>
      {todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
      ))}
     </div> 
    </div>
    </div>
  );
}

export default App;
