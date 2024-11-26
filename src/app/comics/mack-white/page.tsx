import Image from "next/image";

export default function MackWhite() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <h1 className="mb-8">Mack White Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <Image
            src="/img/os-img/bison-bill.jpg"
            alt="bison bill "
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
