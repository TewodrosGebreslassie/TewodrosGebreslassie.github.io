// App.tsx
import React, { useState } from 'react';
import './App.css';
import image from './imag/image.png';
import Header from './components/header';
import CourseGoalList from './components/courseGoalList';
import Calculater from './calculater/Calculater';

interface Goal {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = () => {
    const newGoal: Goal = {
      id: Math.random(),
      title: 'Learn React',
      description: 'Learn React with TypeScript'
    };
    setGoals(prevGoals => [...prevGoals, newGoal]);
  };

  return (
    <main>
      <Header image={{ src: image, alt: 'react logo' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} />
      <Calculater/>
    </main>
  );
}

export default App;
