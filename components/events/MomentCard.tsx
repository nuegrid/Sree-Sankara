type Props = {
  image: string;
  alt: string;
};

export default function MomentCard({ image, alt }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="aspect-[16/10] w-full object-cover"
        draggable={false}
      />
    </div>
  );
}
