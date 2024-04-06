// CourseGoalList.tsx
import React from 'react';
import { CourseGoal } from "./courseGoal";

type CourseGoalListProps = {
  goals: {
    title: string;
    description: string;
    id: number;
  }[];
}

export default function CourseGoalList({ goals }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} description={goal.description}>
            <p>This is inside the children</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
