import Image from "next/image";
import { SocialMedia } from "./data";

export default function Footer () {
  return (
    <footer className="container flex justify-between p-10">
      <p>© 2024 MOX MOVIES. All rights reserved</p>
      <div className="flex gap-4 items-center">
        {SocialMedia.map((media) => (
          <Image
            key={media.id}
            src={`/images/icons/${media.name}.png`}
            width={25}
            height={25}
            alt={media.name}
            className="opacity-50 hover:opacity-80 transition delay-90 cursor-pointer"
          />
        ))}
      </div>
    </footer>
  );
};
