import Image from "next/image";

type Props = {
  imgUrl: string;
};

const Thumbnail = ({ imgUrl }: Props) => {
  return (
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      className="rounded-lg"
      layout="fill"
      objectFit="cover"
      src={imgUrl}
      alt="movie thumbnail"
    />
  );
};

export default Thumbnail;
