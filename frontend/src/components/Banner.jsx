import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-10">
{/* Left Section (Text) */}
  <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-0">
    <div className="space-y-12">
      <h1 className="text-4xl font-bold">
        Hello, welcome here to learn something <span className="text-pink-500">new every day!!!</span>
      </h1>
      <p className="text-xl">
      Step into the world of books and let your imagination take flight. From timeless classics to the latest must-reads, we're here to bring stories closer to you. Browse through our growing collection and find your next favorite book.
      Happy reading!
      </p>
      
    </div>

  </div>

  {/* Right Section (Image) */}
  <div className="w-full md:w-1/2 md:order-2 flex justify-center">
    <img src={banner} className="w-full h-auto" alt="Banner" />
  </div>
</div>

    </>
  );
}

export default Banner;