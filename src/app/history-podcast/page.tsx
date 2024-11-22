export default function HistoryPodcast() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <h1>All Our Yesterdays Podcast</h1>
          <p>Explore fascinating historical narratives and discussions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <iframe
              title="1. The Big Bang"
              height="150"
              width="100%"
              style={{
                border: "none",
                minWidth: "min(100%, 430px)",
                height: "150px",
              }}
              data-name="pb-iframe-player"
              src="https://www.podbean.com/player-v2/?from=embed&i=6kz97-161836a-pb&share=1&download=1&fonts=Arial&skin=1&font-color=&rtl=0&logo_link=&btn-skin=7&size=150"
              loading="lazy"
            />
            <h2 className="mt-3 mb-1">1. The Big Bang</h2>
            <p>And away we go, with the beginning of everything.</p>
          </div>
          <div>
            <iframe
              title="1. The Big Bang"
              height="150"
              width="100%"
              style={{
                border: "none",
                minWidth: "min(100%, 430px)",
                height: "150px",
              }}
              data-name="pb-iframe-player"
              src="https://www.podbean.com/player-v2/?from=embed&i=6kz97-161836a-pb&share=1&download=1&fonts=Arial&skin=1&font-color=&rtl=0&logo_link=&btn-skin=7&size=150"
              loading="lazy"
            />
            <h2 className="mt-3 mb-1">2. Lives of a Quark​</h2>
            <p>
              In the second episode, Lance and L.B. follow a single quark
              through its 9 billion year journey into the expanding universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
