import Image from "next/image";
import ScrollSpy from "../../components/ScrollSpy";

const sections = [
  {id: "#20", title: "Why So Much #20"},
  {id: "#28", title: "Why So Much #28"},
  {id: "#29", title: "Why So Much #29"},
  {id: "#42", title: "Why So Much #42"},
  {id: "#54", title: "Why So Much #54"},
  {id: "#61", title: "Why So Much #61"},
  {id: "#63", title: "Why So Much #63"},
  {id: "#72", title: "Why So Much #72"},
  {id: "#79", title: "Why So Much #79"},
  {id: "#87", title: "Why So Much #87"},
  {id: "#141", title: "Why So Much #141"},
  {id: "#145", title: "Why So Much #145"},
  {id: "#151", title: "Why So Much #151"},
  {id: "#153", title: "Why So Much #153"},
  {id: "#164", title: "Why So Much #164"},
  {id: "#175", title: "Why So Much #175"},
  {id: "#176", title: "Why So Much #176"},
  {id: "#178", title: "Why So Much #178"},

  // Add all your sections here
];
export default function LanceFeverMyers() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <ScrollSpy sections={sections} />
      <h1 className="mb-8">Lance Fever Myers Comics</h1>
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <section id="#20" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0020.jpg"
            alt="why so much 20"
            width={800}
            height={600}
          />
        </section>
        <section id="#28" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0028.jpg"
            alt="why so much 28"
            width={800}
            height={600}
          />
        </section>
        <section id="#29" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0029.jpg"
            alt="why so much 29"
            width={800}
            height={600}
          />
        </section>
        <section id="#42" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0042.jpg"
            alt="why so much 42"
            width={800}
            height={600}
          />
        </section>
        <section id="#54" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0054.jpg"
            alt="why so much 54"
            width={800}
            height={600}
          />
        </section>
        <section id="#61" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0061.jpg"
            alt="why so much 61"
            width={800}
            height={600}
          />
        </section>
        <section id="#63" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0063.jpg"
            alt="why so much 63"
            width={800}
            height={600}
          />
        </section>
        <section id="#72" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0072.jpg"
            alt="why so much 72"
            width={800}
            height={600}
          />
        </section>
        <section id="#79" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0079.jpg"
            alt="why so much 79"
            width={800}
            height={600}
          />
        </section>
        <section id="#87" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0087.jpg"
            alt="why so much 87"
            width={800}
            height={600}
          />
        </section>
        <section id="#141" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0141.jpg"
            alt="why so much 141"
            width={800}
            height={600}
          />
        </section>
        <section id="#145" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0145.jpg"
            alt="why so much 145"
            width={800}
            height={600}
          />
        </section>
        <section id="#151" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0151.jpg"
            alt="why so much 151"
            width={800}
            height={600}
          />
        </section>
        <section id="#153" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0153.jpg"
            alt="why so much 153"
            width={800}
            height={600}
          />
        </section>
        <section id="#164" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0164.jpg"
            alt="why so much 164"
            width={800}
            height={600}
          />
        </section>
        <section id="#175" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0175.jpg"
            alt="why so much 175"
            width={800}
            height={600}
          />
        </section>
        <section id="#176" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0176.jpg"
            alt="why so much 176"
            width={800}
            height={600}
          />
        </section>
        <section id="#178" className="scroll-mt-24 mb-16">
          <Image
            src="/img/os-img/WhySoMuchComix0178.jpg"
            alt="why so much 178"
            width={800}
            height={600}
          />
        </section>
      </div>
    </div>
  );
}
