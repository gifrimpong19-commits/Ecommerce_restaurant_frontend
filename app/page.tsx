export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              The Fries HUB
            </h1>

            <p className="mt-6 text-xl md:text-2xl">
              Cape Coast's Home of Delicious, Crispy, and Fully Customizable
              Fries.
            </p>

            <p className="mt-4 text-lg text-yellow-100">
              Enjoy freshly prepared fries, loaded toppings, grilled meats, and
              your favorite sides. Whether dining in or ordering from home, we
              deliver flavor right to your doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Order Now
              </button>

              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              About The Fries HUB
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The Fries HUB is a modern restaurant located in Cape Coast,
              Ghana, dedicated to serving delicious and satisfying fries to
              customers. We believe everyone deserves a meal tailored to their
              taste, which is why we offer customizable menu options that allow
              customers to choose their preferred toppings, meats, sauces, and
              side dishes.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Whether you're craving loaded fries, grilled chicken, fish,
              sausage, or gizzard, we've got something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🍟</div>

              <h3 className="text-2xl font-semibold">
                Delicious Fries
              </h3>

              <p className="mt-4 text-gray-600">
                Freshly prepared crispy fries made from quality potatoes and
                served with rich flavors that keep customers coming back.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🍗</div>

              <h3 className="text-2xl font-semibold">
                Customize Your Meal
              </h3>

              <p className="mt-4 text-gray-600">
                Build your perfect meal by choosing your preferred meats,
                toppings, sauces, and sides based on your taste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🚚</div>

              <h3 className="text-2xl font-semibold">
                Fast Delivery
              </h3>

              <p className="mt-4 text-gray-600">
                Place your order online and receive your meal quickly at your
                doorstep, fresh and ready to enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Popular Menu Items
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "Loaded Fries",
              "Chicken & Fries",
              "Fish & Fries",
              "Sausage & Fries",
              "Gizzard & Fries",
              "Special Fries Combo",
              "Grilled Chicken",
              "Family Combo Pack",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Fast & Reliable Delivery
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Too busy to visit us? No problem. Our efficient delivery service
            ensures your favorite meals reach you quickly and safely. Order
            online and enjoy restaurant-quality food from the comfort of your
            home, office, or campus.
          </p>

          <button className="mt-8 bg-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600">
            Start Ordering
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            What Customers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600">
                "The loaded fries are amazing. The delivery was super fast and
                the food arrived hot."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600">
                "I love how I can customize my order exactly the way I want it."
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <p className="text-gray-600">
                "One of the best food spots in Cape Coast. Highly recommended."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-orange-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Enjoy Delicious Fries?
          </h2>

          <p className="mt-4 text-lg">
            Visit us in Cape Coast or place your order today.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold">
              Order Now
            </button>

            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}