import { Header } from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col w-full ">
      <Header />
      <main>
        <div className="flex flex-col  pt-2 justify-center items-center">
          <h1 className="text-2xl font-bold">Welcome to PassZju</h1>
          <p className="text-lg ">Your secure password manager.</p>
        </div>
      </main>
    </div>
  );
}
