import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-white">
        <section className="py-12 px-10 bg-home-hero bg-cover bg-center relative isolate after:absolute after:inset-0 after:bg-black after:opacity-70 after:z-[-1]">
          <div>
            <h1 className="text-[2rem] font-bold text-white">The Chop House</h1>
            <h2 className="text-sm text-white py-2">
              Premium cuts delivered to your door.
            </h2>
          </div>

          <div
            id="order-button"
            className="w-1/2 mx-auto text-center bg-red-300 shadow-lg rounded-md mt-8 text-black py-2 cursor-pointer hover:bg-red-600 transition-color duration-200"
          >
            <a href="/store" className="font-semibold">
              Order Now
            </a>
          </div>
        </section>

        <section className="bg-black">
          <div className="px-10 pt-12 pb-4">
            <h3 className="text-[1.8rem] font-bold py-2">Our History</h3>
          </div>

          <div className="px-10">
            <div>
              <p className="py-3">
                Between 1909 and 1910, Chester, MT saw its population grow 54
                percent thanks to the Enlarged Homestead Act. Among its new
                citizens were{" "}
                <strong>
                  four men: Davis Lawson, Greg Poulter, Lewis McGrath, and
                  Clarence Williams.
                </strong>{" "}
                With nothing but a few dollars and a pair of rifles between them
                by the time they arrived, the pioneers traded their wares for a
                couple of steers.
              </p>
            </div>

            <div className="py-3 pb-16">
              <p>
                Almost 150 years later, The Chop House boasts the largest ranch
                in Montana, with nearly a thousand head of cattle. In 1911, our
                founders, their wives and their children prided themselves on
                hard work and bringing quality meat to their neighbors. Our
                greatest joy is still bringing the best beef in America straight
                to your door.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
