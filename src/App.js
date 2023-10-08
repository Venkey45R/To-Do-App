import { useState } from "react";

function App() {
  const [todos,setTodos] = useState([]);
  const [inputValue,setInputValue] = useState('')
  const handleInputChange = (event)=>{
    setInputValue(event.target.value);
  }
  const handleAddToDos = ()=>{
    if (inputValue.trim() !== ''){
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  else{
  alert('Enter some task to proceed')
  }
};
  const handledeleteToDos = (index) =>{
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);

  };
  return (
    <div className="w-full bg-white h-screen font-serif">
      <div className='mx-auto max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-xl'>
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-indigo-700 py-10 ml-6">TO DO APP USING REACT</h1>
        <div className="flex">
          <input className="border border-gray-400 mr-2 px-3 py-2 sm:py-3 lg:py-3 xl:py-4 flex-grow text-black rounded-lg" type="text" placeholder="Enter a task" value={inputValue} onChange={handleInputChange}/>
          <button className="bg-indigo-500 hover:bg-indigo-700 px-4 py-2 text-white font-bold rounded-md" onClick={handleAddToDos}>Add Task</button>
        </div>
        <ul className="list-disk list-inside my-4">
    {todos.map((todo, index) => (
      <li key={index} className="flex justify-between items-center mb-5 bg-gray-100 text-gray-800 pl-6 rounded-lg text-lg">
        {todo}
        <button className="bg-red-500 text-white font-bold py-1 px-2 rounded-md hover:bg-red-700" onClick={() => handledeleteToDos(index)}><i className="fa-solid fa-trash"></i></button>
      </li>
    ))}
  </ul>
      </div>
    </div>
  );
}

export default App;
