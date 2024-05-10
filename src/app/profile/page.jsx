import Image from "next/image";

const Profile = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          width="500"
          height="500"
          alt="hero"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Sweetheart Chocolate Cream Rose Cake 1.5 Kg
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in
            eaque, quia fugit numquam est? Beatae accusamus sed praesentium sit
            expedita necessitatibus iste, in recusandae, modi quae repellendus
            facilis? Consectetur?
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profile;
