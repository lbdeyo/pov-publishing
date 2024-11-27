import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-16 pt-4 md:pt-8 max-w-6xl">
      {/* First section - full width */}
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16 mb-8">
        <div>
          <h1 className="max-w-5xl">
            Welcome to Persistence of Vision Publishing
          </h1>
          <p className="max-w-4xl">
            Great conversations are one of life's dopest pleasures. At
            Persistence of Vision Publishing, our mission is to inspire more of
            these meaningful exchanges by publishing daring and innovative work
            across media.
          </p>
        </div>
      </div>

      {/* Subsequent sections - two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div>
          <h2>Our Books</h2>
          <p>
            Discover our collection of thought-provoking titles that spark
            meaningful conversations.
          </p>
          <Link
            href="/catalog"
            className="grid grid-cols-3 gap-2 md:gap-4 mt-3">
            <Image
              src="/img/cover-images/clash-cover.jpg"
              alt="Clash of the Christmas Clones"
              width={200}
              height={300}
              className="w-full h-auto object-contain"
            />
            <Image
              src="/img/cover-images/gdf-cover-mark-III-roughened.webp"
              alt="Book 2"
              width={200}
              height={300}
              className="w-full h-auto object-contain"
            />
            <Image
              src="/img/cover-images/wsm-cover.webp"
              alt="Book 3"
              width={200}
              height={300}
              className="w-full h-auto object-contain"
            />
          </Link>
        </div>
        <div>
          <h2>Our Podcasts</h2>
          <p>
            Join us for in-depth discussions about literature, history, and the
            creative process.
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-3 md:h-[195px] md:flex md:justify-start">
            <Link href="/podcasts/history-podcast">
              <Image
                src="/img/cover-images/aoy-podcast-logo-tag.jpg"
                alt="All Our Yesterdays Podcast"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
            </Link>
            <Link href="/podcasts/book-podcast">
              <Image
                src="/img/pov-podcast-bug.jpg"
                alt="Book 2"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
            </Link>
          </div>
        </div>
        <div>
          <h2>Music</h2>
          <p>Hip-hop and body rock.</p>
          <Link href="/catalog">
            <div className="grid grid-cols-2 gap-2 md:gap-4 mt-3 md:h-[195px] md:flex md:justify-start">
              <Image
                src="/img/cover-images/catfish-hunters-cover.png"
                alt="The Catfish Hunters"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
              <Image
                src="/img/cover-images/man-from-space-cover.png"
                alt="Book 2"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
            </div>
          </Link>
        </div>
        <div>
          <h2>Comics</h2>
          <p>Hell yes, we got comics.</p>
          <div className="grid grid-cols-2 gap-2 md:gap-4 mt-3 md:h-[195px] md:flex md:justify-start">
            <Link href="/comics/walt-holcombe">
              <Image
                src="/img/cover-images/walt-comic.jpg"
                alt="Walt Holcombe"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
            </Link>
            <Link href="/comics/penny-van-horn">
              <Image
                src="/img/cover-images/penny-comic.jpg"
                alt="Book 2"
                width={195}
                height={195}
                className="w-full h-auto md:h-full md:w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
