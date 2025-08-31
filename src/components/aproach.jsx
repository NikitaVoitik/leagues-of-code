import Image from "next/image";

export default function Approach() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-10 pt-0">
      <div className="gap-10 flex flex-col h-fit items-center font-sans">
        <h1 className="text-5xl font-bold text-black text-center">
          Inspiring the tech<br/>
          leaders of tomorrow
        </h1>
        <p className="text-xl text-[#626262] text-center w-[60svw]">
          Discover the art of programming, game development, algorithms, and math with our expert guidance. We are
          dedicated to nurturing young talents and inspiring future innovators.
        </p>
      </div>
      <div className="w-[60svw] h-[40svh]">
        <div className="w-full h-full grid grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Enjoyable and Interactive Learning
            </h2>
            <p className="text-xl text-[#626262]">
              Our unique one-on-one teaching style with our awesome instructors and platform provide your child with the
              best chance of successful learning.
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              src={"/1.png"}
              alt={"image"}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-[60svw] h-[40svh]">
        <div className="w-full h-full grid grid-cols-2 gap-6 items-center">
          <div className="relative w-full h-full">
            <Image
              src={"/2.png"}
              alt={"image"}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Customised Learning Path
            </h2>
            <p className="text-xl text-[#626262]">
              No matter the case, if the goals are set up by you (the parent) or the child, we take care of all the
              assessments and planning to help you achieve them.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}