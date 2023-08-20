import Image from "next/image";

const Loading = () => {
    return (
        <main className="flex flex-auto items-center justify-center flex-col h-screen gap-8">
            <Image src="/logo.png" width={250} height={250} alt="Logo" className="w-[150px] lg:w-[200px] 2xl:w-[250px] aspect-square" />
            <h1 className="font-poppins text-[#C5c5c5] text-4xl lg:text-6xl 2xl:text-[80px] font-bold">SeTiket</h1>
        </main>
    );
};

export default Loading;