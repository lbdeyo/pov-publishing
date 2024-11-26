import Image from "next/image";

export default function WaltHolcombe() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <h1 className="mb-8">Walt Holcombe Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <Image
            src="/img/os-img/bananas1.jpg"
            alt="bananas 1"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas2.jpg"
            alt="bananas 2"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas3.jpg"
            alt="bananas 3"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas4.jpg"
            alt="bananas 4"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas5.jpg"
            alt="bananas 5"
            width={800}
            height={600}
          />
        </div>

        <div>
          <Image
            src="/img/os-img/bananas6.jpg"
            alt="bananas 6"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas7.jpg"
            alt="bananas 7"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas8.jpg"
            alt="bananas 8"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/bananas9.jpg"
            alt="bananas 9"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
