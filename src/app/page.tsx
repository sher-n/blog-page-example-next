import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center p-12 ">
      <div className=" w-4/5    py-10 text-4xl	">Sher Forum</div>
      <div className=" w-4/5   text-xl">
        Your current timezone is: Asia/Bangkok
      </div>
      <div className="w-4/5  flex-col my-2">
        <Card />
      </div>
    </main>
  );
}
