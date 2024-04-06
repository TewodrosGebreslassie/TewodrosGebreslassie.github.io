// CourseGoal.tsx
import React, { ReactNode } from 'react';

type CourseGoalProps = {
  title: string;
  description: string;
  children?: ReactNode;
}

export function CourseGoal({ title, description, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children && <p>{children}</p>}
      </div>
      <button>Delete</button>
    </article>
  );
}
