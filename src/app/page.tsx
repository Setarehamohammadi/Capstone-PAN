import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <main className="h-full flex flex-col">
        <div className="flex gap-4 items-center justify-center bg-[#1E0F62] h-[75px] sticky top-0">
          <Image src="/images/logo.png" alt="PAN" width={40} height={40} />
          <h1 className="text-[35px] font-bold">PAN</h1>
        </div>

        <div className="flex flex-col gap-4 bg-[#DBC4FF] h-full py-6 px-6 lg:px-52 overflow-y-auto">
          <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg">
            <h1 className="text-2xl font-bold text-[#1E0F62]">{`Welcome to the Trillium Drug Program Application Navigator Tool!`}</h1>
            <p className="text-sm text-[#1E0F62]">{`This tool is designed to help you understand and navigate the application process for Ontario’s Trillium Drug Program (TDP). The TDP is a government program that provides financial support for prescription drug costs, especially for those with high medication expenses.`}</p>
            <h3 className="text-lg font-bold text-[#1E0F62]">{`What this tool offers:`}</h3>
            <ul className="list-disc list-inside text-sm text-[#1E0F62]">
              <li>{`The tool is able to`}<span className="font-bold">{`check your eligibility`}</span>{` to assess if you meet basic requirements for the TDP.`}</li>
              <li>{`The navigator tool also offers`}<span className="font-bold">{`guidance`}</span>{` by breaking down the application process into simple steps, ensuring you know what you do at every stage.`}</li>
            </ul>
            <h3 className="text-lg font-bold text-[#1E0F62]">{`Important Note`}</h3>
            <p className="text-sm text-[#1E0F62]">{`This is`}<span className="font-bold">{`not`}</span>{` the official Trillium Drug Program application. This is a tool meant to be used`}<span className="font-bold">{`alongside the application process.`}</span>  {`When you’re ready to apply, you’ll need to visit the official Ontario government website and complete the online official form.`}</p>
            <p className="text-lg text-[#1E0F62]">{`By using this Navigator tool, you’re taking a big step toward gaining access to medication coverage. Let’s get started!`}</p>
          </div>

          <button className="bg-[#1E0F62] text-white text-[20px] font-bold px-4 py-2 rounded-2xl shadow-lg">{`Let's get started!`}</button>
        </div>

      </main>
    </div>
  );
}
