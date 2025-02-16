import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";

import data from "~/data.json"

import Item from "~/components/item"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export function loader() {
  return json(data)
}


export default function Index() {
  const items = useLoaderData<typeof loader>()
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col gap-8 items-center">
        <header className="flex items-center">
          <h1 className="leading text-6xl font-bold text-red-700">
            A NEVERENDING YARD SALE
          </h1>
        </header>
        <nav className="flex items-center">
            <li key="about"><a href="about">About</a></li>
        </nav>
        <div className="flex flex-wrap justify-center gap-4">
          {items.map(item => 
            <Item key={item.id} fileName={item.coverPhotofileName} title={item.title} id={item.id}/>
          )}
        </div>
      </div>
    </div>
  );
}