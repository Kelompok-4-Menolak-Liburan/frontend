import Image from "next/image";

const Loading = () => {
  return (
    <main className="flex h-screen flex-auto flex-col items-center justify-center gap-8">
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="Logo"
        className="aspect-square w-[150px] lg:w-[200px] 2xl:w-[250px]"
      />
      <h1 className="font-poppins text-4xl font-bold text-[#C5c5c5] lg:text-6xl 2xl:text-[80px]">
        SeTiket
      </h1>
    </main>
  );
};

export default Loading;
