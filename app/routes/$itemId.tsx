
import { json, useLoaderData } from "@remix-run/react"

import data from "~/data.json"

export function loader({params}: {params: {itemId: string}}) {
  const item = data.find(item => item.id === params.itemId)
  return json(item)
}

export default function Item() {
  const item = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <nav>
        <li className="mb-4"><a href="/">Back</a></li>
      </nav>
      <div className="grid gap-4 grid-cols-2">
        <div className="">
          <img src={`./${item.coverPhotofileName}`} alt={item.title} />
          {item.images.map(image => <img key={image.fileName} src={`./${image.fileName}`} alt={image.fileName} />)}
        </div>
        <div className="">
          <h1 className="leading text-6xl font-bold text-red-700">{item.title}</h1>
          <p className="mt-4 text-red-700">{item.description}</p>
          <p className="mt-4 text-2xl font-bold text-red-700">{item.price}</p>

        </div>
      </div>
    </div>
  );
}