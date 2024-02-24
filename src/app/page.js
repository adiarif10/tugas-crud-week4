import { CreateTodo } from "@/components/CreateTodo";
import { Footer } from "@/components/Footer";
import { TodoList } from "@/components/TodoList";

export const dynamic = "force-dynamic";
// get data ke nextjs
// untuk sekarang gunakan fully dynamic
async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/wDaBAgotnELV");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();
  // lakukan mapping
  return (
    <main className="max-w-xl m-auto space-y-12">
      <CreateTodo />
      <TodoList data={data} />
      <Footer />
    </main>
  );
}
