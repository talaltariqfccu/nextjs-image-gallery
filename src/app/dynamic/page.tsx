import { UnsplashImages } from "@/models/unsplash-images";
import Image from "next/image";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Dynamic Fetching - NextJS 13.4 Image Gallery",
};
export const revalidate = 0;

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
        This Picture is fetched from Unspalsh.com.{" "}
        <strong>It is Dynamic</strong> so it will change after every reload. It
        means it will fetch a new picture on every reload.
      </Alert>
      <Image
        alt={image.description}
        src={image.urls.raw}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
      />
    </div>
  );
}
