import Image from "next/image";
import ScrollSpy from "../../components/ScrollSpy";

const sections = [
  {id: "page-1", title: "Page 1"},
  {id: "page-2", title: "Page 2"},
  {id: "page-3", title: "Page 3"},
  {id: "page-4", title: "Page 4"},
  {id: "page-5", title: "Page 5"},
  {id: "page-6", title: "Page 6"},
  {id: "page-7", title: "Page 7"},
  {id: "page-8", title: "Page 8"},
  {id: "page-9", title: "Page 9"},
  // Add all your sections here
];
export default function WaltHolcombe() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <ScrollSpy sections={sections} />
      <h1 className="mb-8">Walt Holcombe Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <section id="page-1" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-1.jpg"
            alt="bananas- 1"
            width={800}
            height={600}
          />
        </section>

        <section id="page-2" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-2.jpg"
            alt="bananas- 2"
            width={800}
            height={600}
          />
        </section>

        <section id="page-3" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-3.jpg"
            alt="bananas- 3"
            width={800}
            height={600}
          />
        </section>

        <section id="page-4" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-4.jpg"
            alt="bananas- 4"
            width={800}
            height={600}
          />
        </section>

        <section id="page-5" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-5.jpg"
            alt="bananas- 5"
            width={800}
            height={600}
          />
        </section>

        <section id="page-6" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-6.jpg"
            alt="bananas- 6"
            width={800}
            height={600}
          />
        </section>

        <section id="page-7" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-7.jpg"
            alt="bananas- 7"
            width={800}
            height={600}
          />
        </section>

        <section id="page-8" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-8.jpg"
            alt="bananas- 8"
            width={800}
            height={600}
          />
        </section>

        <section id="page-9" className="scroll-mt-24">
          <Image
            src="/img/os-img/bananas-9.jpg"
            alt="bananas- 9"
            width={800}
            height={600}
          />
        </section>
      </div>
    </div>
  );
}
