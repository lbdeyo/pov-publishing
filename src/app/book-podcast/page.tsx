export default function BookPodcast() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <h1 className="max-w-5xl">Persistence of Vision Podcast</h1>
          <p className="max-w-4xl">
            Join us for in-depth conversations with authors about their work and
            creative process.
          </p>
        </div>

        {/* Podcast episodes grid will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Episode cards will go here */}
        </div>
      </div>
    </div>
  );
}
