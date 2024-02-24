"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const CreateTodo = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreateTodo() {
    setLoading(true);
    const res = await fetch("https://v1.appbackend.io/v1/rows/wDaBAgotnELV", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content, isdone: "false" }]),
    });
    const data = await res.json();
    console.log(data);
    router.refresh();
    setLoading(false);
    toast.success("Todo berhasil");
    setTitle("");
    setContent("");
  }
  return (
    <main>
      <h3 className="font-bold text-lg m-4">Create your notes</h3>
      <input
        className="m-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="m-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        disabled={loading}
        onClick={handleCreateTodo}
        className="btn btn-success"
      >
        Create
      </button>
    </main>
  );
};
