import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="text-green-700">Thank you for your payment.</h1>
      <div className="w-1/2 mx-auto text-center bg-red-300 shadow-lg rounded-md mt-8 text-black py-2 cursor-pointer hover:bg-red-600 transition-color duration-200">
        <Link href="/">Back to HomePage</Link>
      </div>
    </>
  );
};

export default page;
