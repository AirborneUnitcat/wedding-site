import type { Route } from "./+types/home";
import { Countdown } from "~/components/Countdown";
import { GiftFund } from "~/components/GiftFund";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Wedding" },
    { name: "description", content: "We're getting married!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-dvh bg-white dark:bg-gray-950">
      <Countdown />
      <GiftFund />
    </main>
  );
}
