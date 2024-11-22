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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Book cards will go here */}
        </div>
      </div>
    </div>
  );
}
