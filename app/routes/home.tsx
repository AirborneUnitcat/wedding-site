import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { Story } from "~/components/Story";
import { BigDay } from "~/components/BigDay";
import { FoodMenu } from "~/components/FoodMenu";
import { GiftFund } from "~/components/GiftFund";
import { Rsvp } from "~/components/Rsvp";
import { Gallery } from "~/components/Gallery";
import { Guestbook } from "~/components/Guestbook";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Amy & Morgan | Wedding" },
    {
      name: "description",
      content:
        "Join us as we celebrate our wedding on December 5th, 2027 at West Tower, Ormskirk.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <BigDay />
      <FoodMenu />
      <GiftFund />
      <Rsvp />
      <Gallery />
      <Guestbook />
      <Footer />
    </>
  );
}