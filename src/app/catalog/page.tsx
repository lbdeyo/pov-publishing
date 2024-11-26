import Image from "next/image";

export default function Catalog() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <h1 className="max-w-5xl">Catalog</h1>
          <p className="max-w-4xl">
            Browse our collection of books and other media.
          </p>
        </div>

        {/* Books grid will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <a href="https://www.amazon.com/gp/product/1092341897/ref=dbs_a_def_rwt_bibl_vppi_i0">
              <Image
                className="mb-4"
                src="/img/cover-images/clash-cover-larger.webp"
                alt="Clash of the Christmas Clones cover"
                width={500} // You can adjust the width as needed
                height={750} // You can adjust the height as needed
              />
            </a>
            <h2>
              <em>Clash of the Christmas Clones</em>
            </h2>
            <h3>A holiday novella by Lance Fever Myers</h3>
            <p className="my-2 font-bold">
              <a href="https://www.amazon.com/gp/product/1092341897/ref=dbs_a_def_rwt_bibl_vppi_i0">
                Buy the paperback
              </a>
            </p>
            <p>
              A mysterious invention somewhere in a Nebraska basement is turned
              on and suddenly it's Christmas every day. So how do Santa and his
              crew of toymakers adjust to a 365x increase in their workload? A
              few of Santa's closest friends come up with plans to provide the
              big man with backup. One creates RoboSanta, while the other
              accidentally creates a giant monster called Hammerhead Santa.
              There's a love story, there are a lot of scenes of elves talking
              about jazz and postmodernism, and at the climax, there's an epic
              showdown between monster and machine.
            </p>
          </div>
          <div>
            <a href="https://www.amazon.com/God-Damn-Fool-L-B-Deyo/dp/1690616547/ref=sr_1_1?keywords=God+Damn+Goddamn&qid=1569183014&sr=8-1&fbclid=IwAR02tLTmLbPtUmgPkoYp2600RItc6L1xNawLwuXx-HOqqcUfnUEa9mHgRgI">
              <Image
                className="mb-4"
                src="/img/cover-images/gdf-cover-large.png"
                width={500} // You can adjust the width as needed
                height={750} // You can adjust the height as needed
                alt="God-Damn Fool cover"
              />
            </a>
            <h2>
              <em>The God-Damn Fool</em>
            </h2>
            <h3>a novel by L.B. Deyo</h3>
            <div className="flex">
              <p className="my-2 font-bold">
                <a href="https://www.amazon.com/God-Damn-Fool-L-B-Deyo/dp/1690616547/ref=sr_1_1?keywords=God+Damn+Goddamn&qid=1569183014&sr=8-1&fbclid=IwAR02tLTmLbPtUmgPkoYp2600RItc6L1xNawLwuXx-HOqqcUfnUEa9mHgRgI">
                  Buy the paperback
                </a>
              </p>

              <p className="ps-4 my-2 font-bold">
                <a href="https://www.amazon.com/God-Damn-Fool-L-B-Deyo-ebook/dp/B07XF8DJCR/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1569183014&sr=8-1">
                  Buy the e-book
                </a>
              </p>
            </div>

            <p>
              <em>The God-Damn Fool</em> tells the story Dr. John Harriman of
              Garrison Academy private boarding school. Budget cuts have gotten
              so severe that Harriman, a pretentious Latin instructor, is forced
              to become coach of the school's basketball team. Had the old man
              not already enough troubles, dealing with his gout, his Vietnam
              War wound, three failed marriages, bursitis, psoriasis, morbid
              obesity, the disrespect of his peers, the insolence of his
              over-bright students, the steady rise of politics in the academe,
              and his outlandishly aggressive dog? Now he must lead an
              undermanned team of incorrigibles in a sport he knows nothing
              about.
            </p>
          </div>
          <div>
            <a href="https://www.amazon.com/Why-So-Much-Lance-Myers/dp/1091146128/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">
              <Image
                className="mb-4"
                src="/img/cover-images/wsm-cover-large.jpg"
                width={500} // You can adjust the width as needed
                height={750} // You can adjust the height as needed
                alt="God-Damn Fool cover"
              />
            </a>
            <h2>
              <em>Why So Much?</em>
            </h2>
            <h3>a novel by Lance Fever Myers</h3>
            <div className="flex">
              <p className="my-2 font-bold">
                <a href="https://www.amazon.com/Why-So-Much-Lance-Myers/dp/1091146128/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">
                  Buy the paperback
                </a>
              </p>

              <p className="ps-4 my-2 font-bold">
                <a href="https://www.amazon.com/dp/B07Q3GSDHP?ref_=pe_3052080_276849420&fbclid=IwAR0IIEVK8t5uBRw2Gg0XebXbmIiCjwQfGvlEhUChoHLeVNnYtpENUhHfwD4">
                  Buy the e-book
                </a>
              </p>
            </div>

            <p>
              Debut author Lance Fever Myers paints the heartbreaking portrait
              of a teenage artist struggling to find her voice in a small
              refinery town off the Texas Gulf Coast. <em>Why So Much?</em> is
              an emotionally rich novel exploring sex, death, addiction,
              celebrity, and theme restaurants at the turn of the millennium.
              Think Vonnegut meets Jonathan Franzen.
            </p>
          </div>
          <div>
            <a
              href="https://laughingboy1.bandcamp.com/album/i-am-the-man-from-space"
              aria-label="I Am the Man From Space album on Bandcamp">
              <Image
                className="mb-4"
                src="/img/cover-images/man-from-space-cover.png"
                width={500} // You can adjust the width as needed
                height={750} // You can adjust the height as needed
                alt="Man from Space cover"
              />
            </a>
            <h2>
              <em>I Am the Man From Space</em>
            </h2>
            <h3>A hip-hop album from Laughing Boy </h3>
            <div className="flex">
              <p className="my-2 font-bold">
                <a href="https://music.apple.com/us/album/i-am-the-man-from-space/1612548255">
                  Apple Music
                </a>
              </p>
              <p className="my-2 font-bold ps-4 ">
                <a href="https://laughingboy1.bandcamp.com/album/i-am-the-man-from-space">
                  Bandcamp
                </a>
              </p>
            </div>

            <p>
              Featuring the hits "The Ancient Mariner," "The Man from Space,"
              "The Atomic Facts," and many more.
            </p>
            <p className="mt-4">
              Also check out Laughing Boy's
              <a href="https://laughingboy1.bandcamp.com/album/war">
                &nbsp;War ep.
              </a>
            </p>
          </div>
          <div>
            <a
              href="https://open.spotify.com/album/09mUSlwj9AMgTLBlvB8voU?si=zS6TqGyrQWWaRoPHWFBvHg"
              aria-label="you done electrocuted me">
              <Image
                className="mb-4"
                src="/img/cover-images/catfish-hunters-cover.png"
                width={500} // You can adjust the width as needed
                height={750} // You can adjust the height as needed
                alt="Catfish Hunters cover"
              />
            </a>
            <h2>
              <em>You Done Electrocuted Me</em>
            </h2>
            <h3>A rock album from The Catfish Hunters </h3>
            <div className="flex">
              <p className="my-2 font-bold">
                <a href="https://open.spotify.com/album/09mUSlwj9AMgTLBlvB8voU?si=zS6TqGyrQWWaRoPHWFBvHg">
                  Spotify
                </a>
              </p>
              <p className="my-2 font-bold ps-4 ">
                <a href="https://music.apple.com/us/album/you-done-electrocuted-me/1634318213">
                  Apple Music
                </a>
              </p>
            </div>

            <p>Songs of pain.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
