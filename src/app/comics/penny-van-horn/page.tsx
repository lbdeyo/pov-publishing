import Image from "next/image";

export default function PennyVanHorn() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <h1 className="mb-8">Penny Van Horn Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <Image
            src="/img/os-img/penny-best-case.jpg"
            alt="best case"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-disturbing-talisman.jpg"
            alt="disturbing talisman"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-find.jpg"
            alt="find"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-fun-beach.jpg"
            alt="fun beach"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-homemade.jpg"
            alt="homemade"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-jack.jpg"
            alt="jack"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-nature-guides.jpg"
            alt="nature guides"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-oddball.jpg"
            alt="oddball"
            width={800}
            height={600}
          />
        </div>
        <div>
          <Image
            src="/img/os-img/penny-recipe.jpg"
            alt="recipe"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
