import { UnsplashImages } from "@/models/unsplash-images";
import Image from "next/image";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Static Fetching - NextJS 13.4 Image Gallery",
};

export default async function page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImages = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  console.log(image);
  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This Picture is fetched from Unspalsh.com. <strong>It is Static</strong>{" "}
        so it will remain the same no matter how many times you reload it.
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
        alt={image.description}
      />
    </div>
  );
}
