import lhtlWeek3one from "../static/lhtlWeek3.png";
import lhtlWeek3two from "../static/lhtlWeek3two.jpg";
const LhtlWeek3 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="WHO-Brain damaging habits"
          src={lhtlWeek3one}
        ></img>
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="Corona stay away with 1 peg"
          src={lhtlWeek3two}
        ></img>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Carefully Look at these images
          </h1>
          <p className="mb-8 leading-relaxed">
                      At first sight you might believe in this images, but what if I tell you that these images are fake? they are spoofed?
                      Yes both of these images are FAKE, and one can only realise this if the person thinks carefully on what is being told to him
          </p>
        </div>
      </div>
    </section>
  );
};

export default LhtlWeek3;
