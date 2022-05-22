import React from "react";

import TodoApp from "./components/TodoApp";

const App:React.FC = (): JSX.Element => {

  return (
    <div className="w-screen h-screen bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
      <TodoApp />
    </div>
  )

}

export default App;
