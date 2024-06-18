export default async function StepsCard({
  name,
  src,
  width,
  height,
  alt,
  key,
  text,
}: {
  name: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  text: string;
  key?: string | number;
}) {
  return (
    <div key={key} className="">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mb-[14px]"
      />
      <div className="flex flex-col gap-1">
        <h4 className="small-normal">{name}</h4>
        <p className="small-light">{text}</p>
      </div>
    </div>
  );
}
