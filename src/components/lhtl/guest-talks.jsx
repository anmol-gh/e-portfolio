import TracyIrby from "../static/guestTalk1.png";
const GuestTalks = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={TracyIrby}>
          </img>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tracy Irby
            </h1>
            <p className="mb-8 leading-relaxed">

            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font border-t-2 border-blue-200">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          ></img>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Alberto
            </h1>
            <p className="mb-8 leading-relaxed"></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestTalks;
