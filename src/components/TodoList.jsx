import React from "react";
import { TodosContent } from "./TodosContent";

export const TodoList = ({ data }) => {
  return (
    <main className="space-y-4">
      {data.map((item) => {
        return <TodosContent key={item._id} item={item} />;
      })}
    </main>
  );
};
