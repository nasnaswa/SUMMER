import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-5 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold font-sans text-[#8d241d] text-center mb-4">Katalog Toko Kue Permata</h1>
      <p className="text-center text-black mb-8 font-sans font-semibold">
        Selamat datang di Toko Kue Permata! Kami menawarkan berbagai pilihan roti dan oleh-oleh khas Lampung.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/bakso.jpeg" alt="Roti Bakso" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans mb-2">Roti Bakso</h2>
          <p className="text-[#8d241d] font-semibold">Rp11.000</p>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/donat.jpeg" alt="Donat" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans  mb-2">Donat</h2>
          <p className="text-[#8d241d] font-semibold">Rp5.000</p>
        </div >
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/bombo.jpeg" alt="Bombolini" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans  mb-2">Bombolini</h2>
          <p className="text-[#8d241d] font-semibold">Rp30.000</p>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/kp-original.png" alt="Keripik Pisang Original" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans  mb-2">Keripik Pisang Original</h2>
          <p className="text-[#8d241d] font-semibold">Rp25.000</p>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/kp-cokelat.png" alt="Keripik Pisang Cokelat" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans  mb-2">Keripik Pisang Cokelat</h2>
          <p className="text-[#8d241d] font-semibold">Rp35.000</p>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-md p-4 text-center font-sans">
          <Image src="/kp-keju.png" alt="Keripik Pisang Keju" width={200} height={200} className="mx-auto mb-3" />
          <h2 className="text-xl font-semibold font-sans  mb-2">Keripik Pisang Keju</h2>
          <p className="text-[#8d241d] font-semibold">Rp35.000</p>
        </div>
      </div>
    </div>
  );
}
