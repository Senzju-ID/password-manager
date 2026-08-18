import { Header } from "@/components";
export default function Page() {
  return (
    <>
        <Header />
        <main className="flex-1 container mx-auto items-center">
          <h1 className="text-2xl font-bold">Welcome to PassZju</h1>
          <p className="text-lg">Your secure password manager.</p>
        </main>
    </>
  );
}
