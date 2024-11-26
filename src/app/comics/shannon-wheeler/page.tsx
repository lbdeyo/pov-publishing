import Image from "next/image";
import ScrollSpy from "../../components/ScrollSpy";

const sections = [
  {id: "10-years", title: "10 Years"},
  {id: "anticipation", title: "Anticipation"},
  {id: "cat", title: "Cat"},
  {id: "sendit", title: "Send It"},
  {id: "username", title: "Username"},
  // Add all your sections here
];
export default function ShannonWheeler() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <ScrollSpy sections={sections} />
      <h1 className="mb-8">Shannon Wheeler Comics</h1>
      <section id="10-years" className="scroll-mt-24 mb-16">
        <Image
          src="/img/os-img/too-much-coffee-10-years.jpg"
          alt="ten years"
          width={800}
          height={600}
        />

        <section id="anticipation" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/too-much-coffee-anticipation.jpg"
            alt="anticipation"
            width={800}
            height={600}
          />
        </section>
        <section id="cat" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/too-much-coffee-cat.jpg"
            alt="cat"
            width={800}
            height={600}
          />
        </section>
        <section id="sendit" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/too-much-coffee-sendit.jpg"
            alt="send it"
            width={800}
            height={600}
          />
        </section>
        <section id="username" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/too-much-coffee-username.jpg"
            alt="username"
            width={800}
            height={600}
          />
        </section>
      </section>
    </div>
  );
}
