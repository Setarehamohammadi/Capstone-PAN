import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full leading-7 flex flex-col gap-4 overflow-y-auto pb-11 ">
      <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg max-w-[700px]">
        <h1 className="text-2xl font-bold text-[#1E0F62]">{`Welcome to the Trillium Drug Program Application Navigator Tool!`}</h1>
        <p className="text-md text-[#1E0F62]">{`This tool is designed to help you understand and navigate the application process for Ontario’s Trillium Drug Program (TDP). The TDP is a government program that provides financial support for prescription drug costs, especially for those with high medication expenses.`}</p>
        <h3 className="text-lg font-bold text-[#1E0F62]">{`What this tool offers:`}</h3>
        <ul className="list-disc pl-4 text-md text-[#1E0F62]">
          <li >
            {`The tool is able to `}
            <span className="font-bold">{`check your eligibility`}</span>
            {` to assess if you meet basic requirements for the TDP.`}
          </li>
          <li >
            {`The navigator tool also offers`}
            <span className="font-bold">{` guidance`}</span>
            {` by breaking down the application process into simple steps, ensuring you know what you do at every stage.`}
          </li>
        </ul>
        <h3 className="text-lg font-bold text-[#1E0F62]">{`Important Note`}</h3>
        <p className="text-md text-[#1E0F62]">
          {`This is `}
          <span className="font-bold">{`not`}</span>
          {` the official Trillium Drug Program application. This is a tool meant to be used `}
          <span className="font-bold">{`alongside the application process.`}</span>{" "}
          {`When you’re ready to apply, you’ll need to visit the official Ontario government website and complete the online official form.`}
        </p>
        <p className="text-md text-[#1E0F62]">{`By using this Navigator tool, you’re taking a big step toward gaining access to medication coverage. Let’s get started!`}</p>
      </div>

      <Link href="/disclaimer">
        <button className="bg-[#1E0F62] text-white text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg">{`Let's get started!`}</button>
      </Link>
    </main>
  );
}
