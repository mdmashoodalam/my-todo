import React from 'react';
import TodoList from './components/TodoList';
import Footer from './components/footer';



function App() {
  return (
    <div id="particles" className="gradient-bg min-h-screen flex justify-center items-center">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
