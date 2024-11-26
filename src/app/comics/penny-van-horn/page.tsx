import Image from "next/image";
import ScrollSpy from "../../components/ScrollSpy";

const sections = [
  {id: "#best-case-scenario", title: "Best Case Scenario"},
  {id: "#disturbing-talisman", title: "Disturbing Talisman"},
  {id: "#find-the-hidden-picture", title: "Find the Hidden Picture"},
  {id: "#fun-at-the-beach", title: "Fun at the Beach"},
  {id: "#homemade-touches", title: "Homemade Touches"},
  {id: "#jack-and-the-beanstalk", title: "Jack and the Beanstalk"},
  {id: "#how-nature-guides-us", title: "How Nature Guides Us"},
  {id: "#oddball-memorabilia", title: "Oddball Memorabilia"},
  {id: "#recipe-for-dryer-bugs", title: "Recipe for Dryer Bugs"},

  // Add all your sections here
];
export default function PennyVanHorn() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <ScrollSpy sections={sections} />

      <h1 className="mb-8">Penny Van Horn Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <section id="#best-case-scenario" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-best-case.jpg"
            alt="best case"
            width={800}
            height={600}
          />
        </section>
        <section id="#disturbing-talisman" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-disturbing-talisman.jpg"
            alt="disturbing talisman"
            width={800}
            height={600}
          />
        </section>
        <section id="#find-the-hidden-picture" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-find.jpg"
            alt="find"
            width={800}
            height={600}
          />
        </section>
        <section id="#fun-at-the-beach" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-fun-beach.jpg"
            alt="fun beach"
            width={800}
            height={600}
          />
        </section>
        <section id="#homemade-touches" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-homemade.jpg"
            alt="homemade"
            width={800}
            height={600}
          />
        </section>
        <section id="#jack-and-the-beanstalk" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-jack.jpg"
            alt="jack"
            width={800}
            height={600}
          />
        </section>
        <section id="#how-nature-guides-us" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-nature-guides.jpg"
            alt="nature guides"
            width={800}
            height={600}
          />
        </section>
        <section id="#oddball-memorabilia" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-oddball.jpg"
            alt="oddball"
            width={800}
            height={600}
          />
        </section>
        <section id="#recipe-for-dryer-bugs" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/penny-recipe.jpg"
            alt="recipe"
            width={800}
            height={600}
          />
        </section>
      </div>
    </div>
  );
}
