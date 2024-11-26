import Image from "next/image";

export default function ShannonWheeler() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <h1 className="mb-8">Shannon Wheeler Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <Image
            src="/img/os-img/too-much-coffee-10-years.jpg"
            alt="ten years"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/too-much-coffee-anticipation.jpg"
            alt="anticipation"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/too-much-coffee-cat.jpg"
            alt="cat"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/too-much-coffee-sendit.jpg"
            alt="send it"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/too-much-coffee-username.jpg"
            alt="username"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
