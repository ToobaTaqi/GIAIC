const Home = () => {
  return (
    <div>
      <img
        src="https://img-global.cpcdn.com/recipes/2975b8ccf0153b89/1200x630cq70/photo.jpg"
        alt="banner"
        className="banner object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
      />
      <div className="text-center border-2 border-gray-600 rounded m-5 p-9 bg-red-600">
        <h3>Get Pizzas at Your Door steps </h3>
        <p className="text-white">
          Enjoy our multi flavoured Pizzas with Exclusive Drinks
        </p>
      </div>
    </div>
  );
};

export default Home;
