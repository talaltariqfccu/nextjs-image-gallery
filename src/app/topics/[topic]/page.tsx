import { UnsplashImages } from "@/models/unsplash-images";
import { Alert } from "@/components/bootstrap";
import Image from "next/image";

interface pageProps {
  params: { topic: string };
}

export function generateStaticParams() {
  return ["health", `coding`].map((topic) => {
    return { topic };
  });
}

// export const revalidate = 0;

export default async function page({ params: { topic } }: pageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=10&query=${topic}&client_id=` +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const images: UnsplashImages[] = await response.json();

  console.log(images);
  return (
    <div className="d-flex flex-column align-items-center">
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          key={image.urls.raw}
          alt={image.description}
        />
      ))}
    </div>
  );
}
