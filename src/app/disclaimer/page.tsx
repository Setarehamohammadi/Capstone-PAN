"use client";

import { useState } from "react";
import Link from "next/link";

export default function Disclaimer() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main className="h-full flex flex-col gap-4 leading-7">
      <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg max-w-[700px]">
        <h1 className="text-2xl font-bold text-[#1E0F62]">{`Disclaimer`}</h1>
        <p className="text-md text-[#1E0F62]">{`Before using this navigator tool, please review each of the following statements carefully.`}</p>
        <h3 className="text-lg font-bold text-[#1E0F62]">{`Note, in the following statements, “users” refers to you, the user of this tool.`}</h3>
        <ul className="list-disc  list-inside text-md text-[#1E0F62]">
          <li>
            {`This tool is a guide to assist with the Trillium Drug Program (TDP) application process but is `}
            <span className="font-bold">{`not a replacement`}</span>
            {` for the official application or government resources.`}
          </li>
          <li>
            {`The information provided in this tool is accurate as of January 2025. Users should verify any updates or changes to TDP policies or eligibility criteria.`}
          </li>
          <li>
            {`Using this tool does not guarantee eligibility or approval for the TDP. Final decisions rest with the Ontario government.`}
          </li>
         <li>
            {`This navigator tool does not require users to input health-related or personal information. Users are strongly advised to only share sensitive information on websites verified as being directly offered by the government of Ontario.`}
          </li>
          <li>
            {`Users are responsible for reviewing and understanding the TDP guidelines on the official Ontario government website.`}
          </li>
          <li>
            {`The tool’s functionality may depend on device compatibility and internet access. Users are encouraged to share any performance issues or suggestions via the feedback form at the end of the tool.`}
          </li>
          <li>
            {`The use of this tool is entirely voluntary. Users may discontinue use at any time without any implications.`}
          </li>
          <li>
            {`The creators of this tool are not liable for any errors in the TDP application process resulting from reliance on this tool.`}
          </li>
          <li>
            {`This tool is independently created and is not officially affiliated with or endorsed by the Ontario Ministry of Health.`}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg max-w-[700px]">
        <div className="flex gap-4">
          <input
            className="w-5 h-5"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label className="text-md text-[#1E0F62] leading-none">{`By proceeding, you acknowledge that you have read, understood, and agreed to all of the statements below.`}</label>
        </div>
      </div>

      <div className="flex  gap-4  max-w-[700px]">
        <Link className="w-full" href="/">
          <button className="bg-[#1E0F62] text-white lg:text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg">{`Take me Back`}</button>
        </Link>
        <Link className="w-full" href="/accessing-form">
          <button
            disabled={!isChecked}
            className="bg-[#1E0F62] text-white lg:text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg hover:bg-[#1E0F62]/80 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {`Continue`}
          </button>
        </Link>
      </div>
    </main>
  );
}
