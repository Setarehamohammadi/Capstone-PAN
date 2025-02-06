import Image from "next/image";
import Link from "next/link";

export default function AccessingForm() {
  return (
    <main className="h-full flex flex-col gap-4">
      <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg max-w-[700px]">
        <h1 className="text-2xl font-bold text-[#1E0F62]">{`Accessing the Official Trillium Drug Program Application Form`}</h1>
        <p className="text-sm text-[#1E0F62]">{`To complete your application, you must open the official Trillium Drug Program (TDP) form on the Ontario government website. Follow these steps to access it:`}</p>
        <h3 className="text-lg font-bold text-[#1E0F62]">{`Step 1: Search for Page`}</h3>

        <div className="flex flex-col gap-4 items-center">
          <div className="flex justify-center items-center lg:w-[450px]">
            <Image
              src="/images/google_search.png"
              alt="Step 1"
              width={700}
              height={700}
            />
          </div>

          <div className="flex flex-col gap-4 items-center lg:w-[450px]">
            <Image
              src="/images/google_search_2.png"
              alt="Step 1"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-4  lg:w-[450px]">
            <p className="text-sm text-[#1E0F62]">
              {`In your web browser, search for “Ontario government Trillium Drug Program” to find the official Ontario government website, click the option titled `}
              <span className="font-bold">{`“Get help with high prescription drug costs”`}</span>
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#1E0F62]">{`Step 2: Navigate to the Page`}</h3>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-4 items-center lg:w-[450px]">
            <Image
              src="/images/navigate_page.png"
              alt="Step 2"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-[450px]">
            <p className="text-sm text-[#1E0F62]">
              {`Next, click on Section 5, titled `}
              <span className="font-bold">{`“How to Apply”`}</span>
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#1E0F62]">{`Step 3: Select the Online Application`}</h3>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-4 items-center lg:w-[450px]">
            <Image
              src="/images/select_application.png"
              alt="Step 3"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-[450px]">
            <p className="text-sm text-[#1E0F62]">
              {`Under the “How to Apply” section, press the `}
              <span className="font-bold">{`“Apply online”`}</span>
              {` button to be directed to the application portal`}
            </p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-[#1E0F62]">{`Step 4: Choose Trillium Drug Program`}</h3>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-4 items-center lg:w-[450px]">
            <Image
              src="/images/choose_program.png"
              alt="Step 4"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-[450px]">
            <p className="text-sm text-[#1E0F62]">
              {`On the application portal page, locate the `}
              <span className="font-bold">{`“Trillium Drug Program” `}</span>
              {`section. Press the `}
              <span className="font-bold">{`“Apply” `}</span>
              {`button underneath this section to open the official TDP application form.`}
            </p>
          </div>
        </div>
        <p className="text-lg text-[#1E0F62]">
          {`Alternatively, you can access the form directly through this link:`}

          <Link href="https://forms.ontariodrugbenefit.ca/portal/EFormUpdate.aspx?usid=4c3e13ad-65e4-4f22-a71f-358640a3f907&eFormId=600a8fe9-059f-4688-a358-3e9af217b5bc&DomainID=e98ae7fc-3a6c-42aa-8845-b6b165a4dd9c">
            <button className="underline text-[#1E0F62]">{`Official TDP Application Portal`}</button>
          </Link>
        </p>

        <h3 className="text-lg font-bold text-[#1E0F62]">{`Using This Navigator Tool Alongside the Official Form`}</h3>

        <p className="text-sm text-[#1E0F62]">
            {`To make the most of this navigator tool, it is recommended to keep the tool open in one browser tab and the official TDP application form open in another tab. This way, you can easily jump between the two as you follow the step-by-step guidance provided here.`}
        </p>

        <p className="text-sm text-[#1E0F62]">
            {`Let this tool guide you every step of the way while you fill out the official form in real-time!`}
        </p>
      </div>
      <Link href="/form">
        <button className="bg-[#1E0F62] text-white text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg">{`Continue`}</button>
      </Link>
    </main>
  );
}
