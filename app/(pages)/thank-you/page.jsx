import Thanks from "./thank-you";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="container flex w-full flex-col gap-y-10 py-16">
        <Thanks />

      </div>
    </div>
  );
}
