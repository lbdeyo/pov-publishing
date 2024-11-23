export default function Comics() {
  return (
    <div className="container mx-auto px-4 md:px-16 pt-4 md:pt-8 max-w-6xl">
      <div className="grid grid-cols-1 gap-y-8 md:gap-y-16">
        <div>
          <h1 className="max-w-5xl">Comics</h1>
          <p className="max-w-4xl">We publish comics online.</p>
        </div>

        {/* Contact form or information will go here */}
        <div className="max-w-4xl">{/* Contact content will go here */}</div>
      </div>
    </div>
  );
}
