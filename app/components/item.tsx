export default function Item({ fileName, title, id }: { fileName: string, title: string, id: string }) {
  return (
    <div className="flex items-center justify-center size-[250px] bg-red-700 cursor-pointer">
      <a href={id}>
      <img src={fileName} alt={title} />
      </a>
    </div>
  );
}