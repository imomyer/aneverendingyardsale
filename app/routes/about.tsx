export default function About() {
  return (
    <div className="p-4">
      <nav>
        <li className="mb-4"><a href="/">Back</a></li>
      </nav>
      <div className="grid gap-4 grid-cols-2">
        <div className="">
        {/* <img src={`./${item.coverPhotofileName}`} alt={item.title} /> */}
        </div>
        <div className="">
          <h1 className="leading text-6xl font-bold text-red-700">About</h1>
          {/* <p className="mt-4 text-red-700">{item.description}</p> */}

        </div>
      </div>
    </div>
  );
}