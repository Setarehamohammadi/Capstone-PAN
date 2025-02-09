"use client";
import Image from "next/image";
import parse from "html-react-parser"
import { useState } from "react";
import { useRouter } from "next/navigation";
type Question = {
    id: number;
    title: string;
    text: string;
    images: string[];
    content_orientation?: "horizontal" | "vertical";
    question: string;
    options: {
        [key: string]: number;
    };
}


const questions: Question[] = [
  {
    "id": 7,
    "title": "Get Started with This Tool",
    "text": `<p className=\"text-sm text-[#1E0F62]\">This tool is designed to help you navigate the Trillium Drug Program (TDP) application process for financial coverage of PrEP. You have two options to proceed:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Not sure if you qualify for the TDP? Start with Triage. If you’re unsure about your eligibility, press the “Start Triage” button. The triage will guide you through a few quick questions to determine if you meet the TDP requirements. If you qualify, you’ll automatically be taken to the Step-by-Step Support section, where you’ll get help completing the TDP application.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Already know you qualify for the TDP? Skip to Support. If you’re confident that you qualify for the TDP, press the “Skip to Support” button to go directly to the application guide.</li>\n</ul>`,
    "images": ["Yes", "Yes"],
    "question": "Would you like to start triage or skip to support?",
    "options": {
      "Start triage": 8,
      "Skip to support": 17
    }
  },
  {
    "id": 8,
    "title": "Do you have a valid Ontario Health Card?",
    "text": `<p className=\"text-sm text-[#1E0F62]\">All users must have a valid Ontario Health Card to apply to the Trillium Drug Program (TDP).</p>\n<p className=\"text-sm text-[#1E0F62]\">[Image 1] Your Ontario Health Card should look like this.</p>\n<p className=\"text-sm text-[#1E0F62]\">[Image 2] On the card, please look at the expiry date.</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">If the expiry date has already passed, please press “My card is expired.”</li>\n  <li className=\"text-sm text-[#1E0F62]\">If the expiry date is in the next two months, please press “My card will expire in two months.”</li>\n  <li className=\"text-sm text-[#1E0F62]\">If you do not have an Ontario Health Card, please press “No, I do not have an Ontario Health Card.”</li>\n  <li className=\"text-sm text-[#1E0F62]\">If you have an Ontario Health Card that will not expire within the next two months, please press “Yes, I have a valid Ontario Health Card.”</li>\n</ul>`,
    "images": ["Yes", "Yes"],
    "question": "What is the current status of your Ontario Health Card?",
    "options": {
      "Yes, I have a valid card": 11,
      "No, I do not have an Ontario Health card": 10,
      "My card is expired": 9,
      "My card will expire within the next 2 months": 9
    }
  },
  {
    "id": 10,
    "title": "You must first have a valid Ontario Health Card.",
    "text": `<p className="text-sm text-[#1E0F62]"> You have indicated that you do not have an Ontario Health Card. Once you have obtained a valid Health Card, please revisit this tool.  </p> <p className="text-sm text-[#1E0F62]"> Please consult this resource: <Link href="https://www.ontario.ca/page/apply-ohip-and-get-health-card"> <button className="underline text-[#1E0F62]">https://www.ontario.ca/page/apply-ohip-and-get-health-card</button> </Link> . This page will describe the requirements for a Health Card and will help you obtain one.  </p>`,
    "images": ["/images/confused.png"],
    "question": "",
    "content_orientation": "horizontal",
    "options": {
      "Return to navigator": 7
    }
  },
  {
    "id": 9,
    "title": "You must first have a valid Ontario Health Card",
    "text": `<p className=\"text-sm text-[#1E0F62]\">You have indicated that your Health Card has expired or will expire in the next two months. Please review your situation. Once you have obtained a valid Health Card, please revisit this tool.</p>\n<p className=\"text-sm text-[#1E0F62]\">The Ontario government recommends renewing your card 90 days before expiration. If your card is expired or will expire within the next two months, consider renewing it to avoid issues later in the TDP application process. Please visit the following link to set up an appointment: <Link href=\"http://www.ontario.ca/page/health-card-renewal\"><button className=\"underline text-[#1E0F62]\">Health Card Renewal</button></Link>.</p>\n<p className=\"text-sm text-[#1E0F62]\">Link to start page</p>`,
    "images": ["/images/confused.png"],
    "question": "",
    "content_orientation": "horizontal",
    "options": {
      "Return to navigator": 7
    }
  },
  {
    "id": 11,
    "title": "How old are you?",
    "text": `<p className=\"text-sm text-[#1E0F62]\">We want to know the age that you will be this calendar year.</p>\n<p className=\"text-sm text-[#1E0F62]\">A calendar year starts at the beginning of January and ends at the end of December. For example, January 1, 2025 to December 31, 2025 is one calendar year.</p>\n<p className=\"text-sm text-[#1E0F62]\">If you already celebrated your birthday this year, put the age that you turned. If you have not yet celebrated your birthday, put the age that you will be.</p>\n<p className=\"text-sm text-[#1E0F62]\">[Image 1] In this example, Rita the Rat and Rachel the Rabbit are both applying for the TDP. They are applying in February.</p>\n<p className=\"text-sm text-[#1E0F62]\">[Image 2] Rita the Rat already celebrated her birthday, which was in January. Rachel the Rabbit does not have her birthday until March.</p>\n<p className=\"text-sm text-[#1E0F62]\">[Image 3] Since Rita the Rat already celebrated her birthday, she puts down her current age. Rachel the Rabbit has not turned 40 years old yet, but will write it in her application since that is the age she is turning this calendar year.</p>\n<p className=\"text-sm text-[#1E0F62]\">Once you figure out your age for this calendar year, please press the category that your age falls into.</p>`,
    "images": ["Yes", "Yes"],
    "question": "How old are you?",
    "options": {
      "Under 24 years old": 12,
      "Between 25 and 64 years old": 14,
      "65 years old and over": 13
    }
  },
  {
    "id": 12,
    "title": "You are below the program’s age requirement.",
    "text": `<p className=\"text-sm text-[#1E0F62]\">You have indicated that your age this calendar year is under 25 years old. Applicants to the Trillium Drug Program (TDP) must be 25 years old or older.</p>\n<p className=\"text-sm text-[#1E0F62]\">Ontario citizens who are under 25 years old are automatically given OHIP+ coverage. With OHIP+ coverage, the Ontario government will pay for your pre-exposure prophylaxis (PrEP) medication.</p>\n<p className=\"text-sm text-[#1E0F62]\">To learn more about OHIP+ please visit this government site: <Link href=\"https://www.ontario.ca/page/learn-about-ohip-plus\"><button className=\"underline text-[#1E0F62]\">https://www.ontario.ca/page/learn-about-ohip-plus</button></Link></p>\n<p className=\"text-sm text-[#1E0F62]\">You can access PrEP, using OHIP+ coverage, through Freddie: <Link href=\"https://www.gofreddie.com/\"><button className=\"underline text-[#1E0F62]\">https://www.gofreddie.com/</button></Link></p>`,
    "images": ["/images/confused.png"],
    "content_orientation": "horizontal",
    "question": "",
    "options": {
      "Return to navigator": 7
    }
  },
  {
    "id": 13,
    "title": "You are above the program’s age requirement.",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that your age this calendar year is above 64 years old. Applicants to the Trillium Drug Program (TDP) must be 64 years old or younger.</p>\n<p className=\"text-sm text-[#1E0F62]\">Ontario citizens who are 65 years and older are automatically enrolled in the Ontario Drug Benefit. The Ontario government will send you a letter regarding your enrollment 3 months before your 65th birthday.</p>\n<p className=\"text-sm text-[#1E0F62]\">For more information on the Ontario Drug Benefit, please visit this government website: <Link href=\"https://www.ontario.ca/page/get-coverage-prescription-drugs#section-0\"><button className=\"underline text-[#1E0F62]\">https://www.ontario.ca/page/get-coverage-prescription-drugs#section-0</button></Link></p>\n<p className=\"text-sm text-[#1E0F62]\">If you are turning 65 years old and require short-term free PrEP coverage, please visit the PrEPStart program. This program will give you 3-months of free PrEP access: <Link href=\"https://ontarioprep.ca/prepstart/\"><button className=\"underline text-[#1E0F62]\">https://ontarioprep.ca/prepstart/</button></Link></p>\n<p className=\"text-sm text-[#1E0F62]\">Individuals from low income households, who are 65 years and older, can apply to the Seniors Co-Payment Program. Through this program, your deductibles will be reduced to $2.00. For more information, please visit: <Link href=\"https://www.ontario.ca/page/seniors-ontario-drug-benefit-deductible-and-prescription-co-payment\"><button className=\"underline text-[#1E0F62]\">https://www.ontario.ca/page/seniors-ontario-drug-benefit-deductible-and-prescription-co-payment</button></Link></p>",
    "images": ["/images/confused.png"],
    "content_orientation": "horizontal",
    "question": "",
    "options": {
      "Return to navigator": 7
    }
  },
  {
    "id": 14,
    "title": "Do you have any type of insurance?",
    "text": `<p className=\"text-sm text-[#1E0F62]\">Great! Looks like you fall under the age requirements of the Trillium Drug Program (TDP).</p>\n<p className=\"text-sm text-[#1E0F62]\">Do you have any type of private insurance? There are many places where you might be receiving private insurance.</p>\n<p className=\"text-sm text-[#1E0F62]\">For example:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">If you have a job, you might be under a work insurance plan.</li>\n  <li className=\"text-sm text-[#1E0F62]\">If you are a student, your school may offer a health insurance plan.</li>\n  <li className=\"text-sm text-[#1E0F62]\">If you live with family, they also may have a private insurance plan.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If you are unsure if you have private insurance, you can contact the Human Resources department at your job, your school’s student service centre, and the family members that you live with.</p>\n<p className=\"text-sm text-[#1E0F62]\">Please choose the option below that describes your circumstances.</p>`,
    "images": ["/images/happy.png"],
    "content_orientation": "horizontal",
    "question": "Do you have any type of insurance?",
    "options": {
      "Yes, I have private insurance": 15,
      "No, I do not have private insurance": 17
    }
  },
  {
    "id": 15,
    "title": "How much coverage do you get?",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you have some form of private insurance coverage. Does this coverage cover all your prescription drug costs? Or, do you still pay a little bit of money for the medications that you need?</p>\n<p className=\"text-sm text-[#1E0F62]\">If you do not pay anything for the medications that you need, please press “Yes, my insurance completely covers my prescription drug costs.”</p>\n<p className=\"text-sm text-[#1E0F62]\">If you still pay money for your medications, please press “No, my private insurance does not completely cover my prescription drug costs.”</p>\n<p className=\"text-sm text-[#1E0F62]\">If your plan does not cover PrEP, please press “Currently, my plan covers my expenses, but it does not cover PrEP.”</p>",
    "images": [],
    "question": "How much coverage do you get?",
    "options": {
      "Yes, my insurance completely covers my prescription drug costs": 16,
      "No, my private insurance plan does not completely cover my prescription drug costs": 17,
      "Currently, my plan covers my expenses, but it will not cover PrEP": 17
    }
  },
  {
    "id": 16,
    "title": "This program might not be useful to you!",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you receive complete private coverage for your prescription drug costs. If you are hoping to start using PrEP, you can go straight to the prescription process!</p>\n<p className=\"text-sm text-[#1E0F62]\">Use this link to schedule a consultation with a Freddie representative. They will be able to get you on PrEP and can help you in linking it to your private insurance plan: <Link href=\"https://www.gofreddie.com/\"><button className=\"underline text-[#1E0F62]\">https://www.gofreddie.com/</button></Link></p>",
    "images": ["/images/confused.png"],
    "content_orientation": "horizontal",
    "question": "",
    "options": {
      "Return to navigator": 7
    }
  },
  {
    "id": 17,
    "title": "It is time to complete the application!",
    "text": `<p className=\"text-sm text-[#1E0F62]\">The Trillium Drug Program (TDP) has six steps. The application will ask you to:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">List the people in your TDP household</li>\n  <li className=\"text-sm text-[#1E0F62]\">Identify an ‘enrollment date’</li>\n  <li className=\"text-sm text-[#1E0F62]\">Declare any private insurance your household may have</li>\n  <li className=\"text-sm text-[#1E0F62]\">Disclose if you have a legal representative completing this application</li>\n  <li className=\"text-sm text-[#1E0F62]\">Review your application</li>\n  <li className=\"text-sm text-[#1E0F62]\">Share proof of income</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">This tool will help you through each one of these steps. Please make sure that you have the official Trillium Drug Program application open in another tab beside this tool. You will need to jump between these pages as you complete the application, as shown in the video clip below. [GIF below]</p>\n<p className=\"text-sm text-[#1E0F62]\">If you need help finding the official application, please press “Help: How Do I find the application?”</p>\n<p className=\"text-sm text-[#1E0F62]\">Once you are ready, please press “Begin application” and we will get started!</p>`,
    "images": [],
    "question": "Are you ready to start?",
    "options": {
      "No, I need help finding the official application": 18,
      "Yes, begin application": 19
    }
  },
  {
    "id": 18,
    "title": "Help: How Do I find the application?",
    "text": "<p className=\"text-sm text-[#1E0F62]\">To complete your application, you must open the official Trillium Drug Program (TDP) form on the Ontario government website. Follow these steps to access it:</p>\n<p className=\"text-sm text-[#1E0F62]\">Search for the Page</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">In your web browser, search for “Ontario government Trillium Drug Program” to find the official Ontario government website, click the option titled “Get help with high prescription drug costs”.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Navigate the Page</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Next, click on Section 5, titled “How to Apply”.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Select the Online Application</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Under the “How to Apply” section, press the “Apply online” button to be directed to the application portal.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Choose Trillium Drug Program</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">On the application portal page, locate the “Trillium Drug Program” section.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Press the “Apply” button underneath this section to open the official TDP application form.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Alternatively, you can access the form directly through this link: <Link href=\"https://forms.ontariodrugbenefit.ca/portal/EFormUpdate.aspx?usid=4c3e13ad-65e4-4f22-a71f-358640a3f907&eFormId=600a8fe9-059f-4688-a358-3e9af217b5bc&DomainID=e98ae7fc-3a6c-42aa-8845-b6b165a4dd9c\"><button className=\"underline text-[#1E0F62]\">Official TDP Application Portal</button></Link></p>",
    "images": ["Yes", "Yes"],
    "question": "I found the official application",
    "options": {
      "Return to navigator": 17
    }
  },
  {
    "id": 19,
    "title": "Household Composition",
    "text": "<p className=\"text-sm text-[#1E0F62]\">When you apply to the Trillium Drug Program, you apply for your entire household. Households are made up of individuals, couples, or families with shared finances. After selecting the option most accurate to your living situation, you will be guided through a series of questions to confirm what kind of household you can apply as.</p>",
    "images": ["/images/id-19.png"],
    "content_orientation": "vertical",
    "question": "Household Composition",
    "options": {
      "I live alone": 20,
      "I live with a partner or spouse": 25,
      "I live with family (including parents, grandparents, and children)": 28,
      "I live with someone other than my family (e.g. roommates)": 21
    }
  },
  {
    "id": 20,
    "title": "I Live Alone Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You indicated that you live alone.</p>",
    "images": [],
    "question": "Are you a student under 25 years of age?",
    "options": {
      "No, I am not a student under 25": 24,
      "Yes, I am a student under 25": 22
    }
  },
  {
    "id": 21,
    "title": "Non-Family Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you live with other people who are not your family members. Unrelated people living together are not considered to be part of the same household under the TDP. Other people living with you who are interested in the TDP must submit their own application.</p>",
    "images": [],
    "question": "Are you a student under 25 years of age?",
    "options": {
      "No, I am not a student under 25": 24,
      "Yes, I am a student under 25": 22
    }
  },
  {
    "id": 22,
    "title": "Scenario Student",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you are a student under 25 years of age.</p>",
    "images": [],
    "question": "Do you receive financial support from your family (i.e. parents or grandparents)?",
    "options": {
      "Yes, my family gives me financial support": 23,
      "No, my family does not give me financial support": 24
    }
  },
  {
    "id": 23,
    "title": "Dependant Student Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you are a student under 25 years of age who receives financial support from your family. Under the TDP, you can elect to be part of your family’s household as a dependant.</p>",
    "images": [],
    "question": "How would you like to proceed with your application?",
    "options": {
      "I want to proceed as a single-person household": 24,
      "I want to go back to apply as a family": 28
    }
  },
  {
    "id": 24,
    "title": "Single-Person Household Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Under the TDP you can apply as a financially independent single-person household. This means you only need to include your own information, including name and income, in the application.</p>",
    "images": [],
    "question": "Would you like to proceed with your application as a financially independent single-person household?",
    "options": {
      "Yes": 31
    }
  },
  {
    "id": 25,
    "title": "Spouse/Partner Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You indicated that you live with only your partner or spouse. If you live with a member of your family or your partner’s family, including you or your partner’s children, please go back to the previous page and choose “I live with family”.</p>\n<p className=\"text-sm text-[#1E0F62]\">The Trillium Drug Program considers your partner your spouse if:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">You are married to your partner</li>\n  <li className=\"text-sm text-[#1E0F62]\">You are not married to your partner, but have lived together in a conjugal relationship for at least 1 year</li>\n  <li className=\"text-sm text-[#1E0F62]\">You are not married to your partner, but live together in a conjugal relationship and have a child together</li>\n  <li className=\"text-sm text-[#1E0F62]\">You are not married to your partner, but you live together in a conjugal relationship and have a cohabitation agreement under Section 53 of the Family Law Act.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Do any of these definitions describe your current relationship with your partner?</p>\n<p className=\"text-sm text-[#1E0F62]\">For conjugal: <Link href=\"https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/non-economic-classes/family-class-determining-spouse/assessing-conjugal.html\"><button className=\"underline text-[#1E0F62]\">Hover/Hyperlink definition</button></Link></p>\n<p className=\"text-sm text-[#1E0F62]\">For Section 53 of the Family Law Act: <Link href=\"https://www.ontario.ca/laws/statute/90f03#BK65\"><button className=\"underline text-[#1E0F62]\">53. Cohabitation agreements</button></Link></p>",
    "images": [],
    "question": "Do any of these definitions describe your current relationship with your partner?",
    "options": {
      "Yes, one of these definitions applies to my relationship": 26,
      "No, none of these definitions apply to my relationship": 27,
      "Go back, I need to choose family": 28
    }
  },
  {
    "id": 26,
    "title": "Two-Person Household Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You and your partner are considered a two-person household by the TDP. This means you need to include your information and your partner’s information in the application, including name, income, and your shared address. One of you must also provide your OHIP number and your SIN.</p>",
    "images": [],
    "question": "Are you ready to proceed with completing the application as a two-person household?",
    "options": {
      "Continue": 52
    }
  },
  {
    "id": 27,
    "title": "Spouse/Partner Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Your partnership does not fit the requirements for spouses as defined by the TDP. Your partner will NOT be considered a part of your household. If your partner wants to apply to the TDP, they will need to apply separately.</p>\n<p className=\"text-sm text-[#1E0F62]\">When selecting your living situation, please choose “I live alone” or “I live with someone other than your family.” When answering questions, please consider only yourself, and not your partner, in your answers.</p>",
    "images": [],
    "question": "Would you like to return to family composition?",
    "options": {
      "Yes": 19
    }
  },
  {
    "id": 28,
    "title": "Family Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that you live with family. Is anyone who lives in your home independent from the rest of the household? Someone who is independent does not receive support from the rest of the household and does not provide support to others in the household. They pay for their own living expenses and do not share financial responsibilities with other household members.</p>",
    "images": [],
    "question": "Is anyone in your household independent from the rest of the household?",
    "options": {
      "Yes, one or more people in my house are independent": 29,
      "No, no one in my house has separate living expenses they pay for alone": 30
    }
  },
  {
    "id": 29,
    "title": "Family Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have indicated that one or more individuals in your house are financially independent, and do not receive or provide support. Please do not include them in your application.</p>",
    "images": [],
    "question": "Do you understand that financially independent individuals should not be included in your application?",
    "options": {
      "I understand. I will not include financially independent people in the application.": 30
    }
  },
  {
    "id": 30,
    "title": "Family Scenario",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You are considered a part of a family (i.e. multi-person) household by the TDP. This means you have to include information from everyone living in your house who you have a family relationship. For everyone over 18 years of age, you need to include their income information and, if applicable, private insurance plans.</p>",
    "images": [],
    "question": "Are you ready to include required family information?",
    "options": {
      "Yes, continue": 76
    }
  },
  {
    "id": 31,
    "title": "Completing the TDP Application: Households with One Person",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This page of the tool will guide you through filling out the first page of the Trillium Drug Program (TDP) application. Follow these step-by-step explanations to ensure accurate completion of each field.</p>\n<p className=\"text-sm text-[#1E0F62]\">Name<br />Enter your full legal first and last name as it appears on official documents (e.g., health card or ID). Select the checkbox if you only go by a single name.<br />Note: Ensure there are no typos, as discrepancies can delay processing.</p>\n<p className=\"text-sm text-[#1E0F62]\">Health Card Number<br />Enter your Ontario health card number (including the two-letter version code, if applicable). You can locate this number on the front of your Ontario health card.<br />Note: If you don’t have a health card, leave this section blank and proceed to the next field.</p>\n<p className=\"text-sm text-[#1E0F62]\">Date of Birth<br />Enter your date of birth in the format: YYYY-MM-DD.</p>\n<p className=\"text-sm text-[#1E0F62]\">Social Insurance Number (SIN) - 9 Digits<br />Enter your SIN, a 9-digit number assigned to you for government programs. Your SIN is printed on your SIN card, or you may find it on your income tax return, T4 slip, or other government documents.</p>\n<p className=\"text-sm text-[#1E0F62]\">Preferred Language<br />Select either ‘English’ or ‘French’ as your preferred language.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>\n<p className=\"text-sm text-[#1E0F62]\">If you have other household members to include in your application, click the ‘Add a household member’ button. This will create additional fields for the new household member. Fill them out using the same instructions for their first name, last name, health card number, DOB, and SIN.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed all required fields?",
    "options": {
      "Continue to Mailing Address": 32
    }
  },
  {
    "id": 32,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section helps confirm whether you are eligible for door-to-door delivery for correspondence related to your application.</p>\n<p className=\"text-sm text-[#1E0F62]\">What is Door-to-Door Delivery?<br />Door-to-door delivery means your mail is delivered directly to your residence. This includes:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">A mailbox attached to your home.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A mail slot in your door.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A community mailbox located in your building or close to your property.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If your mail is sent to a centralized location, such as a PO Box, Rural Route, or General Delivery, you do not have door-to-door delivery.</p>",
    "images": ["/images/id-32.png"],
    "content_orientation": "vertical",
    "question": "Can you receive door-to-door delivery?",
    "options": {
      "I can receive door-to-door delivery": 34,
      "I am not able to receive door-to-door delivery": 33
    }
  },
  {
    "id": 33,
    "title": "No Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a Rural Route, PO Box, or General Delivery (select \"Yes\"):</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Rural Route, PO Box, or General Delivery address in the appropriate field (e.g., Rural Route 3 or PO Box 456).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Toronto).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province from the dropdown menu.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code in the format A1A 1A1.</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, you may enter your Street Number and Street Name as optional information.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Note: If you select \"Yes\" (Rural Route/PO Box/General Delivery), you will also need to provide a Residential Address in the following fields:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 456 Elm Avenue).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, add your Unit Number (e.g., Unit 301).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town and select Ontario as the Province.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide your Postal Code in the format A1A 1A1.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Where to Find It: Use any official documentation or utility bill that confirms your mailing address.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the mailing address portion?",
    "options": {
      "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
    }
  },
  {
    "id": 34,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a standard street address (select \"No\"):</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 123 Main Street).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, include your Unit Number (e.g., Unit 201).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Ottawa).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province from the dropdown menu.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code in the format A1A 1A1.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the mailing address portion?",
    "options": {
      "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
    }
  },
  {
    "id": 35,
    "title": "Enrolment Start Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Understanding TDP Deductibles<br />When you join the Trillium Drug Program (TDP), you must pay a certain amount of money each year (called a deductible) before TDP helps with your prescription costs. This yearly deductible is the same, no matter when you start. But if you wait until later in the year to sign up, you will have fewer months to pay off the same total amount. That can mean higher monthly payments.</p>\n<p className=\"text-sm text-[#1E0F62]\">Applying Early vs. Applying Late</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Applying Early: You spread the deductible over more months. Result: Smaller monthly payments.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Applying Late: You have the same total deductible, but fewer months to pay it off. Result: Bigger monthly payments.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If you enroll earlier in the year, your monthly costs will be lower, and it will be easier to manage your budget.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you know what date you want your enrollment to start?",
    "options": {
      "Yes, I know when I want my enrolment date to be": 36,
      "No, I do not know when to set my enrolment date": 37
    }
  },
  {
    "id": 36,
    "title": "I know when I want my enrolment date to be",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click Yes and make sure to enter the enrollment start date as:</p>\n<p className=\"text-sm text-[#1E0F62]\">Enter your enrollment start date (YYYY/MM/DD)</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 38
    }
  },
  {
    "id": 37,
    "title": "I don’t know when I want my enrolment date to be",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click No if you don't know your enrollment start date.</p>\n<p className=\"text-sm text-[#1E0F62]\">After selecting No, you will be prompted to answer the following questions to help decide on your enrollment start date:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Are you waiting to begin a new drug therapy and know the start date of your drug therapy? (Yes: You know the exact day you'll start; No: You don't know.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you need to fill a prescription when leaving the hospital? (Yes: You have a prescription; No: You don't need to fill one.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have other drug coverage that is ending soon? (Yes: Your other drug coverage is ending or has ended; No: You do not have any other coverage ending.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have receipts for medicines you bought? (Yes: You have receipts; No: You don't have any.)</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Click on the suggested enrollment start date.<br />Review the suggested date provided based on your answers.</p>\n<p className=\"text-sm text-[#1E0F62]\">Keep in mind: The earlier the enrollment start date you choose, the higher the deductible you may have to pay.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 38
    }
  },
  {
    "id": 38,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">In this section, you will indicate whether you have any form of private insurance. This information is important as it impacts how the TDP calculates your eligibility and deductible. Private insurance coverage can come from various sources, including work, school, or other private plans. Here’s how to identify if you have coverage:</p>\n<p className=\"text-sm text-[#1E0F62]\">Work Insurance:<br />Many employers provide health insurance as part of their benefits package. Check your employment contract, contact your HR department, or look for health benefits information on your employer's online portal.</p>\n<p className=\"text-sm text-[#1E0F62]\">School Insurance:<br />If you are a student, your school may offer health insurance through a student association or union. Check your tuition statements or contact your school’s health services office to confirm your coverage.</p>\n<p className=\"text-sm text-[#1E0F62]\">Other Private Insurance:<br />This includes plans you or your family may have purchased independently, such as extended health plans or family insurance policies. Review your policy documents, check your insurance provider's website, or contact them directly.</p>\n<p className=\"text-sm text-[#1E0F62]\">Once you confirm your insurance coverage, provide the details in the relevant fields on the TDP application. If you are unsure about your coverage, contact your HR department, school, or insurance provider for assistance before proceeding.</p>",
    "images": ["/images/id-38.png"],
    "content_orientation": "vertical",
    "question": "Do you have insurance?",
    "options": {
      "I have some form of insurance": 62,
      "My partner has some form of insurance": 62,
      "My partner and I both have insurance": 62,
      "My partner and I do not have insurance": 61
    }
  },
  {
    "id": 39,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">On Page 3 of the application, if your situation requires you to select the ‘NO’ option, simply click the box corresponding to this choice. Once selected, review the page to ensure the correct option is marked, then proceed to submit the page.</p>",
    "images": ["/images/id-39.png"],
    "content_orientation": "vertical",
    "question": "Have you selected the correct option for additional insurance coverage and successfully submitted Page 3?",
    "options": {
      "I have selected the correct option and successfully submitted Page 3": 44
    }
  },
  {
    "id": 40,
    "title": "Insurance",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section explains how to accurately fill out the insurance information on Page 3 of the TDP application after selecting ‘YES’. Depending on whether the plan covers one person or multiple household members, you will need to provide specific details.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">One Insurance Plan Only Covering One Person</span></p>\n<p className=\"text-sm text-[#1E0F62]\">If the private insurance plan covers just one person in the household, fill out the following fields:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder First Name (Required): Enter the first name of the policyholder. If the policyholder only has a single name, leave this field blank and check the box to the right.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder Last Name or Single Name (Required): Enter the last name or single name of the policyholder as it appears on the insurance documentation.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Name of Insurance Company (Required): Provide the name of the private insurance company.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy or Plan Number (Required): Enter the policy or plan number, which can typically be found on the insurance card or documentation. The length of a policy number varies, though it's usually five to seven numbers in length.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Identification or Certificate Number (Optional): If applicable, enter the policyholder’s identification or certificate number. This field is not mandatory but can assist in processing your application. It is usually around 10 characters long.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage Start Date (Optional): Enter the date the policy started, if visible on your insurance card, in the format YYYY/MM/DD. For example: 2022/07/23.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage End Date (Optional): If the policy has a known end date, enter it in the same format YYYY/MM/DD. For example: 2023/07/23.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Persons Covered (Required): Indicate the person covered by the insurance. Since this plan only covers one person, select the policyholder’s name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">If You Have Coverage Through Another Individual</span></p>\n<p className=\"text-sm text-[#1E0F62]\">If you have coverage through another individual, you can add that coverage too. Make sure that the name of the policy holder matches the name on the insurance card. For persons covered, if you are covered under someone else's policy, list that individual as the policy holder. Ensure the policy holder's name exactly matches the name on the insurance card. This information is crucial for determining eligibility and calculating the deductible.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you accurately filled out the insurance information for Page 3?",
    "options": {
      "I have completed the required insurance information": 41
    }
  },
  {
    "id": 41,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">The bottom part of the Insurance Plan section on Page 3 of the application asks about premiums, coverage limits, and drug exclusions. Your answers will help determine eligibility for credits or additional coverage. Below is a detailed explanation of each question, including key definitions and how to respond.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Do you pay any premium for your private insurance plan? (Required)</span></p>\n<p className=\"text-sm text-[#1E0F62]\">A premium is the amount you pay to maintain your private insurance plan. This could be a monthly, yearly, or one-time payment and may be deducted directly from your paycheck if provided through an employer. If you pay a premium, select ‘Yes’. You may qualify for a credit of up to $200 toward your TDP deductible, depending on the amount paid and the number of household members covered by your plan. If you select ‘Yes’ the application will ask you what your annual premium paid is, though this field is optional. If you do not pay for your insurance (e.g., it is fully covered by your employer or another entity), select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Did anyone in your insurance plan reach their annual or lifetime maximum coverage? (Required)</span></p>\n<p className=\"text-sm text-[#1E0F62]\">This refers to whether anyone in your household covered under the plan has reached the maximum dollar amount the insurance company will pay for prescription drugs within a year (annual limit) or over a lifetime (lifetime limit). If someone in your household has reached these limits, select ‘Yes’ to indicate that TDP assistance is required. Otherwise, select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Is there a particular drug that you wish to claim with TDP that your drug plan does not cover (drug exclusions)? (Required)</span></p>\n<p className=\"text-sm text-[#1E0F62]\">If your private insurance plan excludes coverage for a specific drug that you need and wish to claim under the TDP, select ‘Yes’. If all required medications are already covered by your private insurance, select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\">To expedite your application, upload the required private insurance documents, such as:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">A letter from your insurer confirming the date a drug maximum was reached and the reinstatement date.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A letter stating which drug or DIN is not covered by your plan.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If available, upload these documents now at the bottom of Page 3. If not, you can send them later via mail, fax, or email.</p>",
    "images": ["Yes", "Yes"],
    "question": "How many insurance plans do you have?",
    "options": {
      "I only have one insurance plan": 44,
      "I have more than one insurance plan": 42
    }
  },
  {
    "id": 42,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">To ensure all private insurance plans are included, click the ‘Add an insurance plan’ button and repeat the process for each plan. Continue adding plans until all insurance details are complete. When finished, select the appropriate button: ‘Add an insurance plan’ if you need to add another or ‘Continue’ to proceed.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you need to add any additional insurance plans?",
    "options": {
      "Add another insurance plan": 40,
      "I am done I have added all of my insurance plans": 44
    }
  },
  {
    "id": 44,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 4 of the TDP application requires you to indicate whether you are a lawfully authorized representative signing the form on behalf of a household member or if you are signing for yourself. A lawfully authorized representative is someone who has the legal authority to act on behalf of another person in making decisions and signing official documents. This authority is typically granted through legal processes or documentation. For the purposes of the application, lawfully authorized representatives include:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Property: Someone appointed by a court to manage the financial affairs of an individual who cannot do so themselves.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Person: Someone appointed to make personal care decisions, such as healthcare, for an individual unable to make these decisions.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Property under a Continuing Power of Attorney (Property): A person legally authorized through a Power of Attorney document to manage another individual’s financial matters, even if the individual becomes incapacitated.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Personal Care under a Power of Attorney (Personal Care): Someone authorized to make personal and healthcare decisions for another individual under a Power of Attorney document.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Public Guardian and Trustee: A government-appointed representative who manages the affairs of individuals unable to make decisions and without an available private representative.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">To be considered a lawfully authorized representative, you must have valid legal documentation proving your authority in one of these roles. If you are not one of these individuals, you cannot sign the TDP application on someone else’s behalf.</p>",
    "images": ["/images/id-44.png"],
    "content_orientation": "vertical",
    "question": "Who are you signing for?",
    "options": {
      "Signing on behalf of someone else": 45,
      "Completing for ourselves": 46
    }
  },
  {
    "id": 45,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘YES’ on Page 4 of the application, this means you are acting as a lawfully authorized representative for another person.</p>\n<p className=\"text-sm text-[#1E0F62]\">If you are representing another person for the TDP application, you will need to complete the required fields for each person, specify your legal authority, and upload supporting legal documents. Follow the instructions below to ensure all information is provided accurately.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Indicate Who You Are Representing</span><br />In the ‘Person(s) you are signing for?’ section, select the individuals you are authorized to act as a representative for. Options include:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">All: If you are authorized to represent all household members listed.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Individual names (e.g., John Doe, Jane Doe).</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Specify Your Legal Authorization (Required)</span><br />Indicate the type of legal authority you have for each individual. Choose one of the following based on the previous definitions provided:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Property</li>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Person</li>\n  <li className=\"text-sm text-[#1E0F62]\">Continuing Power of Attorney (Property)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Power of Attorney (Personal Care)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Public Guardian and Trustee</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Provide Representative Information</span><br />Enter your first and last name in the required fields to identify yourself as the lawfully authorized representative.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Upload Proof of Legal Representation Documents</span><br />If you have the legal document(s) authorizing you to act on behalf of the household members, upload them using the provided uploader. Examples of documents that authorize you to act on behalf of a household member include a Continuing Power of Attorney for Property, which allows you to manage their finances, or a Power of Attorney for Personal Care, giving you authority over personal and healthcare decisions. Other valid documents might include a court order appointing you as a Guardian of Property or Person or a letter from the Public Guardian and Trustee confirming your role as their representative. If you do not have these documents available at this time, you may submit them later.</p>\n<p className=\"text-sm text-[#1E0F62]\">Be sure to click ‘Continue’ at the bottom of the page when you are finished completing the form.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you finished completing the form?",
    "options": {
      "I have inputted all necessary information and have successfully submitted Page": 47
    }
  },
  {
    "id": 46,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘NO’ on Page 4 of the application, this means you are NOT acting as a lawfully authorized representative for another person.</p>",
    "images": [],
    "question": "Have you finished completing the form?",
    "options": {
      "I have inputted all necessary information and have successfully submitted Page": 47
    }
  },
  {
    "id": 47,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 5 of the TDP application displays a summary of all the information you have inputted so far. This is your opportunity to carefully review your application for accuracy before proceeding. Take a moment to review all sections of your application to ensure the information is correct. If you notice any errors, click the ‘Edit’ button next to the relevant section to make the necessary changes. Once you have reviewed and confirmed that all information is accurate—or after making and saving your edits—press the ‘Continue’ button to proceed to the next step.</p>",
    "images": ["/images/id-47.png"],
    "content_orientation": "vertical",
    "question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
    "options": {
      "Yes": 48
    }
  },
  {
    "id": 48,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 6 of the TDP application asks whether you and all household members aged 19 or older have filed tax returns for the most recent tax cycle. This is an essential step in determining eligibility, as tax information is used to calculate your deductible.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">What Does Filing a Tax Return Mean?</span></p>\n<p className=\"text-sm text-[#1E0F62]\">Filing a tax return means submitting your income information to the Canada Revenue Agency (CRA) for the last tax year. This process ensures that your household’s income is properly reported, which is required for assessing your TDP application.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">How to Check if You Have Filed a Tax Return:</span></p>\n<p className=\"text-sm text-[#1E0F62]\">Review your records for a Notice of Assessment from the CRA, which is issued after filing. Check your CRA ‘My Account’ online for confirmation. Consult with your accountant or tax preparer if you’re unsure.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Instructions:</span></p>\n<p className=\"text-sm text-[#1E0F62]\">If all household members aged 19 or older have filed their tax returns for the most recent tax year, select ‘Yes.’</p>\n<p className=\"text-sm text-[#1E0F62]\">If any household member aged 19 or older has not submitted their tax return, select ‘No.’</p>",
    "images": ["Yes", "Yes"],
    "question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
    "options": {
      "Yes, I submitted my tax returns": 49,
      "No, I did not submit my tax returns": 50
    }
  },
  {
    "id": 49,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘YES’, confirming that both you have submitted your tax returns for the most recent tax year. Follow the instructions below to complete this page:</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Confirm authorization</span><br />By selecting ‘YES,’ you are agreeing to allow the TDP to access the submitted tax returns for both yourself and your partner. This is necessary for the TDP to calculate your household’s deductible accurately.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Insert your signature</span><br />Locate the signature field on the page. Press the ‘Insert Signature’ button and sign in the designated box. This action confirms your consent for the TDP to retrieve your tax information.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Submit the page</span><br />Once you have signed, review the information one last time. Press the ‘Submit’ button to finalize this step and move forward with your application.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you inserted your signatures and have pressed submit?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 50,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘NO’ and indicating that you have not submitted tax returns for the most recent tax year. In this case, you must upload alternative documents to verify your household’s income. Follow the steps below to complete this section:</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Submit supporting documents</span><br />Since tax returns have not been filed, you must provide one or more of the following documents for each household member aged 19 or older to verify income:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Statement of Earnings or T4 Slips: Access these through your employer or online employee portal.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Social Assistance Statements (if applicable): Obtain these from your provincial or municipal social services provider.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Proof of No Income (if applicable): Contact the Canada Revenue Agency (CRA) or your local financial services office to request confirmation of no income.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Ensure that these documents are clear and up-to-date to avoid delays in processing your application.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Insert your signature</span><br />Locate the signature field on the page. Press the ‘Insert Signature’ button and sign in the designated box to confirm your consent for submitting the alternative documents.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Submit the page</span><br />After signing, press the ‘Submit’ button to finalize this step and proceed with your application.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you uploaded the appropriate income documents, inserted your signatures, and have pressed submit?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 51,
    "title": "Thank you – Application Submission Confirmation",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Congratulations! You have successfully submitted your Trillium Drug Program (TDP) application.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">What Happens Next?</span><br />Processing Timeline: The typical processing time for TDP applications is 4 to 6 weeks. You may receive updates sooner if additional information or documentation is required.</p>\n<p className=\"text-sm text-[#1E0F62]\">Notification of Approval or Next Steps: You will be contacted by mail or email with the results of your application or instructions for any further actions.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Need Assistance?</span><br />If you have any questions about your application status or require additional support, use the following resources:</p>\n<p className=\"text-sm text-[#1E0F62]\">Trillium Drug Program Contact Information:<br />Phone: 1-800-575-5386<br />Email: trillium@ontariodrugbenefit.ca</p>\n<p className=\"text-sm text-[#1E0F62]\">External Resources for Assistance:<br />Visit the TDP Website: <Link href=\"https://www.ontario.ca/page/get-help-high-prescription-drug-costs\"><button className=\"underline text-[#1E0F62]\">https://www.ontario.ca/page/get-help-high-prescription-drug-costs</button></Link><br />Contact the Canada Revenue Agency (CRA): <Link href=\"https://www.canada.ca/en/revenue-agency.html\"><button className=\"underline text-[#1E0F62]\">https://www.canada.ca/en/revenue-agency.html</button></Link></p>",
    "images": ["/images/id-51.png"],
    "content_orientation": "horizontal",
    "question": "",
    "options": {
      "Go to start page": 999
    },
  },
  {
    "id": 52,
    "title": "Two-Person Households",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This page of the tool will guide you through filling out the first page of the Trillium Drug Program (TDP) application. Follow these step-by-step explanations to ensure accurate completion of each field.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Name</span><br />Enter your full legal first and last name as it appears on official documents (e.g., health card or ID). Select the checkbox if you only go by a single name.<br /><span className=\"font-bold\">Note:</span> Ensure there are no typos, as discrepancies can delay processing.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Health Card Number</span><br />Enter your Ontario health card number (including the two-letter version code, if applicable). You can locate this number on the front of your Ontario health card.<br /><span className=\"font-bold\">Note:</span> If you don’t have a health card, leave this section blank and proceed to the next field.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Date of Birth</span><br />Enter your date of birth in the format: YYYY-MM-DD.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Social Insurance Number (SIN) - 9 Digits</span><br />Enter your SIN, a 9-digit number assigned to you for government programs. Your SIN is printed on your SIN card, or you may find it on your income tax return, T4 slip, or other government documents.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Preferred Language</span><br />Select either ‘English’ or ‘French’ as your preferred language.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>\n<p className=\"text-sm text-[#1E0F62]\">If you have other household members to include in your application, click the ‘Add a household member’ button. This will create additional fields for the new household member. Fill them out using the same instructions for their first name, last name, health card number, DOB, and SIN.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you added your partner’s information to the application?",
    "options": {
      "Add partner’s information": 53
    }
  },
  {
    "id": 53,
    "title": "Completing the TDP Application: Two-Person Households",
    "text": "<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Adding Another Household Member</span><br />If you need to add another person to your household information:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Click the \"Add a household member\" button.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Fill in their first name and last name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Selecting the Relationship</span><br />You'll then be asked about your relationship with this person. Here are the options explained simply:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Spouse: Someone you are married to or living with as if married (in a conjugal relationship). Typically, you must have lived together for at least a year, share a child, or have a legal cohabitation agreement.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Parent: Your father, mother, or guardian. A student relying on a parent (or grandparent/legal guardian) for support can be included even if they don’t live with you.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Child: Your son or daughter. Students who depend on you or another guardian for support can be counted even if they do not live with you full-time.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Grandparent: The parent of your parent. If a grandparent is a student relying on support, they don't need to live with you to be included.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Grandchild: The child of your son or daughter. Even if they live elsewhere, they can be included if they depend on family support.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Other Ancestor: Other older relatives (e.g., great-grandparents) who may not fit the other categories but, if a student depending on family support, can be included.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Great Grandchild: The child of your grandchild, subject to the same support rules.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Child Under Legal Guardianship: A child for whom someone else (not a parent) is legally responsible. They can be included if they depend on you or another guardian for support.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Legal Guardian: Someone with legal authority to care for another person; you can add those under your care as household members.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Additional Question About Household Member (Non-Spouse)</span><br />For any household member who is not a spouse, you will be asked: \"Does [Name] live with you and depend on you or other household members for support or do you depend on them for support?\" (Note: The living-together requirement does not apply for a student dependent on a parent, grandparent, or legal guardian.)</p>\n<p className=\"text-sm text-[#1E0F62]\">For a Spouse, the form will ask you to confirm that your relationship meets the definition above.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here.</p>\n<p className=\"text-sm text-[#1E0F62]\">If you have finished, click Continue.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed all required fields?",
    "options": {
      "Continue to Mailing Address: 54": 54
    }
  },
  {
    "id": 54,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section helps confirm whether you are eligible for door-to-door delivery for correspondence related to your application.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">What is Door-to-Door Delivery?</span><br />Door-to-door delivery means your mail is delivered directly to your residence. This includes:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">A mailbox attached to your home.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A mail slot in your door.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A community mailbox located in your building or close to your property.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If your mail is sent to a centralized location, such as a PO Box, Rural Route, or General Delivery, you do not have door-to-door delivery.</p>",
    "images": ["/images/id-54.png"],
    "content_orientation": "vertical",
    "question": "Can you receive door-to-door delivery?",
    "options": {
      "I can receive door-to-door delivery": 56,
      "I am not able to receive door-to-door delivery": 55
    }
  },
  {
    "id": 55,
    "title": "No Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a Rural Route, PO Box, or General Delivery (select \"Yes\"):</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Rural Route, PO Box, or General Delivery address (e.g., Rural Route 3 or PO Box 456).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Toronto).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province from the dropdown menu.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code in the format A1A 1A1.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Optionally, enter your Street Number and Street Name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Note:</span> If you select \"Yes\", you will also need to provide a Residential Address in the following fields:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 456 Elm Avenue).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, add your Unit Number (e.g., Unit 301).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town and select Ontario as the Province.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide your Postal Code in the format A1A 1A1.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Where to Find It: Use any official documentation or utility bill that confirms your mailing address.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the mailing address portion?",
    "options": {
      "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
    }
  },
  {
    "id": 56,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a standard street address (select \"No\"):</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 123 Main Street).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, include your Unit Number (e.g., Unit 201).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Ottawa).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province from the dropdown menu.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code in the format A1A 1A1.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the mailing address portion?",
    "options": {
      "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
    }
  },
  {
    "id": 57,
    "title": "Enrolment Start Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Understanding TDP Deductibles<br />When you join the Trillium Drug Program (TDP), you must pay a certain amount of money each year (called a deductible) before TDP helps with your prescription costs. This yearly deductible is the same, no matter when you start. But if you wait until later in the year to sign up, you will have fewer months to pay off the same total amount. That can mean higher monthly payments.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Applying Early vs. Applying Late</span></p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Applying Early: You spread the deductible over more months. Result: Smaller monthly payments.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Applying Late: You have the same total deductible, but fewer months to pay it off. Result: Bigger monthly payments.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">If you enroll earlier in the year, your monthly costs will be lower, and it will be easier to manage your budget.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you know what date you want your enrollment to start?",
    "options": {
      "Yes, I know when I want my enrolment date to be": 58,
      "No, I do not know when to set my enrolment date": 59
    }
  },
  {
    "id": 58,
    "title": "I Know My Desired Enrolment Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click Yes and make sure to enter the enrollment start date as:</p>\n<p className=\"text-sm text-[#1E0F62]\">Enter your enrollment start date (YYYY/MM/DD)</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 60
    }
  },
  {
    "id": 59,
    "title": "I Do NOT Know My Desired Enrolment Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click No if you don't know your enrollment start date.</p>\n<p className=\"text-sm text-[#1E0F62]\">After selecting No, you will be prompted to answer the following questions to help you decide on your enrollment start date:</p>\n<ul>\n  <li className=\"text-sm text-[#1E0F62]\">Are you waiting to begin a new drug therapy and know the start date of your drug therapy? (Yes: You know the exact day you'll start; No: You don't know.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you need to fill a prescription when leaving the hospital? (Yes: You have a prescription; No: You don't need to fill one.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have other drug coverage that is ending soon? (Yes: Your other drug coverage is ending or has ended; No: You do not have any other coverage ending.)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have receipts for medicines you bought? (Yes: You have receipts; No: You don't have any.)</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Click on the suggested enrollment start date. Review the suggested date provided based on your answers.</p>\n<p className=\"text-sm text-[#1E0F62]\">Keep in mind: The earlier the enrollment start date you choose, the higher the deductible you may have to pay.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 60
    }
  },
  {
    "id": 60,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">In this section, you will indicate whether you have any form of private insurance. This information is important as it impacts how the TDP calculates your eligibility and deductible. Private insurance coverage can come from various sources, including work, school, or other private plans. Here’s how to identify if you have coverage:</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Work Insurance:</span><br />Many employers provide health insurance as part of their benefits package. Check your employment contract, contact your HR department, or look for health benefits information on your employer's online portal.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">School Insurance:</span><br />If you are a student, your school may offer health insurance through a student association or union. Check your tuition statements or contact your school’s health services office to confirm your coverage.</p>\n<p className=\"text-sm text-[#1E0F62]\"><span className=\"font-bold\">Other Private Insurance:</span><br />This includes plans you or your family may have purchased independently, such as extended health plans or family insurance policies. Review your policy documents, check your insurance provider's website, or contact them directly.</p>\n<p className=\"text-sm text-[#1E0F62]\">Once you confirm your insurance coverage, provide the details in the relevant fields on the TDP application. If you are unsure about your coverage, contact your HR department, school, or insurance provider for assistance before proceeding.</p>",
    "images": ["/images/id-60.png"],
    "content_orientation": "vertical",
    "question": "Do you have any type of insurance?",
    "options": {
      "I have some form of insurance": 62,
      "My partner has some form of insurance": 62,
      "My partner and I both have insurance": 62,
      "My partner and I do not have insurance": 61
    }
  },
  {
    "id": 61,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">On Page 3 of the application, if your situation requires you to select the ‘NO’ option, simply click the box corresponding to this choice. Once selected, review the page to ensure the correct option is marked, then proceed to submit the page.</p>",
    "images": ["/images/id-61.png"],
    "content_orientation": "vertical",
    "question": "Have you completed Page 3?",
    "options": {
      "I have selected the correct option and successfully submitted Page 3": 66
    }
  },
  {
    "id": 62,
    "title": "Insurance",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section explains how to accurately fill out the insurance information on Page 3 of the TDP application after selecting ‘YES’. Depending on whether the plan covers one person or multiple household members, you will need to provide specific details.</p>\n<p className=\"text-sm text-[#1E0F62]\">One Insurance Plan Only Covering One Person:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder First Name (Required): Enter the first name of the policyholder. If the policyholder only has a single name, leave this field blank and check the box to the right.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder Last Name or Single Name (Required): Enter the last name or single name as it appears on the documentation.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Name of Insurance Company (Required): Provide the name of the private insurance company.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy or Plan Number (Required): Enter the policy or plan number (usually five to seven numbers).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Identification or Certificate Number (Optional): If applicable, enter the policyholder’s identification number (around 10 characters).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage Start Date (Optional): Enter the start date (YYYY/MM/DD), e.g., 2022/07/23.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage End Date (Optional): If available, enter the end date (YYYY/MM/DD), e.g., 2023/07/23.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Persons Covered (Required): Indicate the person covered. Since this plan covers one person, select the policyholder’s name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">One Insurance Plan Covering Multiple Household Members:<br />Complete the above fields and also list all household members covered under the plan.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed all required insurance information on Page 3?",
    "options": {
      "I have completed all of the required questions": 63
    }
  },
  {
    "id": 63,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">The bottom part of the Insurance Plan section on Page 3 of the application asks about premiums, coverage limits, and drug exclusions. Your answers will help determine eligibility for credits or additional coverage. Detailed instructions include:</p>\n<p className=\"text-sm text-[#1E0F62]\">Do you pay any premium for your private insurance plan? (Required)<br />A premium is the amount you pay to maintain your plan. If you pay a premium, select ‘Yes’. You may qualify for a credit of up to $200 toward your TDP deductible. If you do not pay for your insurance (e.g., it is fully covered by your employer), select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\">Did anyone in your insurance plan reach their annual or lifetime maximum coverage? (Required)<br />This refers to whether anyone in your household has reached the maximum dollar amount the insurance company will pay for prescription drugs within a year or over a lifetime. Select ‘Yes’ if so; otherwise, select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\">Is there a particular drug that you wish to claim with TDP that your drug plan does not cover (drug exclusions)? (Required)<br />If your private insurance plan excludes coverage for a specific drug you need, select ‘Yes’. Otherwise, select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\">To expedite your application, upload the required documents (e.g., a letter from your insurer) if available; otherwise, they can be submitted later.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you need to provide additional insurance information or add another household member's insurance plan?",
    "options": {
      "I have an additional insurance plan": 64,
      "I need to add another household member's insurance plan": 64,
      "I do not have any other insurance plans": 66
    }
  },
  {
    "id": 64,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">To ensure all private insurance plans are included, click the ‘Add an insurance plan’ button and repeat the process for each plan. Continue adding plans until all details are complete. When finished, select the appropriate button: ‘Add an insurance plan’ if you need to add another or ‘Continue’ to proceed.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you added all private insurance plans, or do you need to add another?",
    "options": {
      "Add another insurance plan": 62,
      "I do not have any other insurance plans": 66
    }
  },
  {
    "id": 66,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 4 of the TDP application requires you to indicate whether you are a lawfully authorized representative signing the form on behalf of a household member or if you are signing for yourself. A lawfully authorized representative has the legal authority to act on behalf of another person. For the purposes of the application, this includes:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Property: Appointed by a court to manage someone’s financial affairs.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Person: Appointed to make personal care decisions for someone unable to do so.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Property under a Continuing Power of Attorney (Property): Legally authorized to manage another’s financial matters.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Personal Care under a Power of Attorney (Personal Care): Authorized to make personal and healthcare decisions.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Public Guardian and Trustee: A government-appointed representative for those unable to make decisions.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">To be considered a lawfully authorized representative, you must have valid legal documentation proving your authority. If you are not one of these individuals, you cannot sign the TDP application on someone else’s behalf.</p>",
    "images": ["/images/id-66.png"],
    "content_orientation": "vertical",
    "question": "Are you signing this application on behalf of someone else or completing it for yourself?",
    "options": {
      "Signing on behalf of someone else": 90,
      "Completing for ourselves": 94
    }
  },
  {
    "id": 67,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘YES’ on Page 4 of the application, this means you are acting as a lawfully authorized representative for one or more household members. It’s important to specify whether you are representing a single individual or multiple household members.</p>\n<p className=\"text-sm text-[#1E0F62]\">- One Person Needs Representation: If you are only authorized to act on behalf of one household member, you will provide your information and complete the form on their behalf. Other household members may sign for themselves if they are at least 18 years old.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Multiple People Need Representation: If more than one household member requires representation, you will provide information for each person you are representing and sign on their behalf.</p>",
    "images": ["Yes", "Yes"],
    "question": "Are you representing one household member or more than one?",
    "options": {
      "Signing for only one person": 93,
      "Signing for more than one person": 91
    }
  },
  {
    "id": 68,
    "title": "Lawfully Authorized Representative: Both Partners",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you are representing both partners included in the household for the TDP application, you will need to complete the required fields for each person, specify your legal authority, and upload supporting legal documents. Follow these instructions:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Indicate Who You Are Representing: In the 'Person(s) you are signing for?' section, select the individuals you are authorized to represent (e.g., All, or individual names).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Specify Your Legal Authorization (Required): Choose from options such as Guardian of Property, Guardian of Person, Continuing Power of Attorney (Property), Power of Attorney (Personal Care), or Public Guardian and Trustee.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide Representative Information: Enter your first and last name.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Upload Proof of Legal Representation Documents: Upload the legal documents that authorize you to act on behalf of the household members.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Be sure to click ‘Add a lawfully authorized representative’ at the bottom of the page when finished.</p>",
    "images": ["/images/id-68.png"],
    "content_orientation": "vertical",
    "question": "Have you entered all required information and added a lawfully authorized representative?",
    "options": {
      "I have inputted all necessary information and have pressed Add a lawfully authorized representative": 71
    }
  },
  {
    "id": 69,
    "title": "Lawfully Authorized Representative: One Person",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you are representing only one person in the household for the TDP application, you will need to complete the required fields for that person, specify your legal authority, and upload supporting legal documents. Follow these steps:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Indicate Who You Are Representing: Select the individual you are authorized to represent.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Specify Your Legal Authorization (Required): Choose from Guardian of Property, Guardian of Person, Continuing Power of Attorney (Property), Power of Attorney (Personal Care), or Public Guardian and Trustee.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide Representative Information: Enter your first and last name.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Upload Proof of Legal Representation Documents: Upload the required documents.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Click ‘Continue’ after entering all information.</p>",
    "images": ["/images/id-69.png"],
    "content_orientation": "vertical",
    "question": "Have you entered all required information and successfully submitted Page 4?",
    "options": {
      "Yes": 71
    }
  },
  {
    "id": 70,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘NO’ on Page 4 of the application, this means you are not acting as a lawfully authorized representative for any household member. Please select ‘Continue’ to move on.</p>",
    "images": ["/images/id-70.png"],
    "content_orientation": "vertical",
    "question": "Have you entered all required information and successfully submitted Page 4?",
    "options": {
      "Yes": 71
    }
  },
  {
    "id": 71,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 5 of the TDP application displays a summary of all the information you have input so far. This is your opportunity to carefully review your application for accuracy before proceeding. Review all sections to ensure the information is correct. If you notice any errors, click the ‘Edit’ button next to the relevant section to make changes. Once you have reviewed and confirmed that all information is accurate, press the ‘Continue’ button to proceed to the next step.</p>",
    "images": ["/images/id-71.png"],
    "content_orientation": "vertical",
    "question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
    "options": {
      "Yes": 72
    }
  },
  {
    "id": 72,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 6 of the TDP application asks whether you and all household members aged 19 or older have filed tax returns for the most recent tax cycle. This information is used to calculate your deductible.</p>\n<p className=\"text-sm text-[#1E0F62]\">What Does Filing a Tax Return Mean?<br />Filing a tax return means submitting your income information to the Canada Revenue Agency (CRA) for the last tax year. This ensures that your household’s income is properly reported for assessing your application.</p>\n<p className=\"text-sm text-[#1E0F62]\">How to Check if You Have Filed a Tax Return:<br />Review your records for a Notice of Assessment from the CRA, check your CRA ‘My Account’ online, or consult with your accountant or tax preparer.</p>\n<p className=\"text-sm text-[#1E0F62]\">Instructions:<br />- If all household members aged 19 or older have filed their tax returns, select ‘Yes.’<br />- If any household member aged 19 or older has not filed their tax return, select ‘No.’</p>",
    "images": ["Yes", "Yes"],
    "question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
    "options": {
      "Yes, all 19+ household members have submitted their tax returns": 97,
      "One or more 19+ household members have NOT submitted their tax returns": 99,
      "NONE of the 19+ household members have submitted their tax returns": 98
    }
  },
  {
    "id": 73,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘YES’, confirming that both you and your partner (if applicable) have submitted your tax returns for the most recent tax year. Follow these instructions to complete this page:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Confirm authorization: By selecting ‘YES,’ you agree to allow the TDP to access your submitted tax returns.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: Once signed, review the information and press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you inserted the required signatures and pressed submit?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 74,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘NO’ and indicated that while one partner has submitted their tax returns, the other has not. In this case, you will need to provide supporting documents to verify your household’s income. Follow these steps:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit supporting documents: Provide documents such as Statement of Earnings or T4 Slips, Social Assistance Statements (if applicable), or Proof of No Income.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box to confirm your consent.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: After signing, press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you uploaded the required income documents, signed, and submitted the page?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 75,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘NO’ and indicated that neither you nor your partner has submitted tax returns for the most recent tax year. In this case, you must upload alternative documents to verify your household’s income. Follow these steps:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit supporting documents: Provide one or more of the following for each household member aged 19 or older: Statement of Earnings or T4 Slips, Social Assistance Statements (if applicable), or Proof of No Income.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box to confirm your consent for submitting the alternative documents.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: Press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you uploaded the required income documents, signed, and submitted the page?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 76,
    "title": "Completing the TDP Application: Households with Multiple People",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This page of the tool will guide you through filling out the first page of the Trillium Drug Program (TDP) application. Follow these step-by-step instructions to ensure accurate completion of each field.</p>\n<p className=\"text-sm text-[#1E0F62]\">Name<br />Enter your full legal first and last name as it appears on official documents (e.g., health card or ID). Select the checkbox if you only go by a single name. (Ensure there are no typos.)</p>\n<p className=\"text-sm text-[#1E0F62]\">Health Card Number<br />Enter your Ontario health card number (including the two-letter version code, if applicable). You can locate this number on the front of your health card. (If you don’t have a health card, leave this section blank.)</p>\n<p className=\"text-sm text-[#1E0F62]\">Date of Birth<br />Enter your date of birth (YYYY-MM-DD).</p>\n<p className=\"text-sm text-[#1E0F62]\">Social Insurance Number (SIN) - 9 Digits<br />Enter your SIN, a 9-digit number. It is printed on your SIN card, income tax return, T4 slip, or other documents.</p>\n<p className=\"text-sm text-[#1E0F62]\">Preferred Language<br />Select either ‘English’ or ‘French’ as your preferred language.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>\n<p className=\"text-sm text-[#1E0F62]\">If you have other household members to include, click the ‘Add a household member’ button. This will create additional fields for the new household member. Fill them out using the same instructions.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you entered your information and added all household members?",
    "options": {
      "Add a household member": 77
    }
  },
  {
    "id": 77,
    "title": "Completing the TDP Application: Households with Multiple People",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This page allows you to add information about other members of your household included in your application. Including household members ensures that the program calculates your household’s deductible correctly based on combined income and health needs.</p>\n<p className=\"text-sm text-[#1E0F62]\">For each additional household member, provide the following details:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Name: Their full legal name as it appears on official documents.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Health Card Number: Their 10-digit Ontario health card number, including any version code.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Date of Birth: In the format YYYY-MM-DD.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Relationship to Household Member 1 (Primary Contact): Specify the relationship from a dropdown menu. Options include Spouse, Parent, Child, Grandparent, Grandchild, Other Ancestor, Great Grandchild, Child Under Legal Guardianship, and Legal Guardian.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">After selecting a relationship, a brief description will appear. Review it to ensure it applies to your situation.</p>\n<p className=\"text-sm text-[#1E0F62]\">You can add multiple household members by selecting ‘Add a household member’ at the bottom of the page. Each household member must be entered separately. If finished, click ‘Continue’.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you added all required household members and their information?",
    "options": {
      "I am done adding household members": 78,
      "I need to add another household member": 77
    }
  },
  {
    "id": 78,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section helps confirm whether you are eligible for door-to-door delivery for correspondence related to your application.</p>\n<p className=\"text-sm text-[#1E0F62]\">What is Door-to-Door Delivery?<br />It means your mail is delivered directly to your residence. This includes:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">A mailbox attached to your home.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A mail slot in your door.</li>\n  <li className=\"text-sm text-[#1E0F62]\">A community mailbox located in your building or near your property.</li>\n</ul>",
    "images": ["/images/id-78.png"],
    "content_orientation": "vertical",
    "question": "Are you able to receive door-to-door delivery for correspondence?",
    "options": {
      "I can receive door-to-door delivery": 80,
      "I am not able to receive door-to-door delivery": 79
    }
  },
  {
    "id": 79,
    "title": "No Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a Rural Route, PO Box, or General Delivery (select \"Yes\"):</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Rural Route, PO Box, or General Delivery address (e.g., Rural Route 3 or PO Box 456).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Toronto).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code (format: A1A 1A1).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Optionally, enter your Street Number and Street Name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Note: If you select \"Yes\", you must also provide a Residential Address:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 456 Elm Avenue).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, add your Unit Number (e.g., Unit 301).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town and select Ontario as the Province.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide your Postal Code (format: A1A 1A1).</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Where to Find It: Use any official documentation or utility bill that confirms your mailing address.</p>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the Mailing Address section and successfully submitted Page 1?",
    "options": {
      "Yes": 81
    }
  },
  {
    "id": 80,
    "title": "Door-to-Door Delivery",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If your mailing address is a standard street address (select \"No\"):</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Street Number and Street Name (e.g., 123 Main Street).</li>\n  <li className=\"text-sm text-[#1E0F62]\">If applicable, include your Unit Number (e.g., Unit 201).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your City/Town (e.g., Ottawa).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Select Ontario as the Province from the dropdown menu.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Enter your Postal Code (format: A1A 1A1).</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">An example of a correctly completed page can be found here:</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you completed the Mailing Address section and successfully submitted Page 1?",
    "options": {
      "Yes": 81
    }
  },
  {
    "id": 81,
    "title": "Enrolment Start Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Understanding TDP Deductibles<br />When you join the Trillium Drug Program (TDP), you must pay a certain amount each year (called a deductible) before TDP helps with your prescription costs. This yearly deductible is constant regardless of when you start. However, if you sign up later in the year, you'll have fewer months to pay off the same amount, which can mean higher monthly payments.</p>\n<p className=\"text-sm text-[#1E0F62]\">Applying Early vs. Applying Late:<br />- Applying Early: Spread the deductible over more months for smaller monthly payments.<br />- Applying Late: Fewer months to pay the same total deductible, leading to larger monthly payments.</p>\n<p className=\"text-sm text-[#1E0F62]\">If you enroll earlier, your monthly costs will be lower and easier to manage.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you know what date you want your enrollment to start?",
    "options": {
      "Yes, I know when I want my enrolment date to be": 82,
      "No, I do not know when to set my enrolment date": 83
    }
  },
  {
    "id": 82,
    "title": "I Know My Desired Enrolment Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click Yes and make sure to enter the enrollment start date as:</p>\n<p className=\"text-sm text-[#1E0F62]\">Enter your enrollment start date (YYYY/MM/DD)</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 84
    }
  },
  {
    "id": 83,
    "title": "I Do NOT Know My Desired Enrolment Date",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Click No if you don't know your enrollment start date.</p>\n<p className=\"text-sm text-[#1E0F62]\">After selecting No, you will be prompted to answer several questions to help decide on your enrollment start date:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Are you waiting to begin a new drug therapy and know the start date?</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you need to fill a prescription when leaving the hospital?</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have other drug coverage that is ending soon?</li>\n  <li className=\"text-sm text-[#1E0F62]\">Do you have receipts for medicines you bought?</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Then, click on the suggested enrollment start date provided based on your answers.</p>\n<p className=\"text-sm text-[#1E0F62]\">Keep in mind: The earlier the start date you choose, the higher the monthly payments may be due to a longer payment period for the deductible.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you indicated your enrolment start date and submitted it?",
    "options": {
      "I have indicated my enrolment date and have submitted Page 2": 84
    }
  },
  {
    "id": 84,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">In this section, you will indicate whether you have any form of private insurance. This information is important as it impacts how the TDP calculates your eligibility and deductible. Private insurance can come from various sources, including work, school, or other private plans. Here’s how to identify if you have coverage:</p>\n<p className=\"text-sm text-[#1E0F62]\">Work Insurance: Check your employment contract, contact HR, or review your employer's online portal.</p>\n<p className=\"text-sm text-[#1E0F62]\">School Insurance: If you are a student, check your tuition statements or contact your school’s health services.</p>\n<p className=\"text-sm text-[#1E0F62]\">Other Private Insurance: Review policy documents or contact your insurance provider directly.</p>\n<p className=\"text-sm text-[#1E0F62]\">Once confirmed, provide the details in the relevant fields on the TDP application. If unsure, contact your HR department, school, or insurance provider.</p>\n<p className=\"text-sm text-[#1E0F62]\">Does anyone in your household have private insurance coverage?</p>",
    "images": ["/images/id-84.png"],
    "content_orientation": "vertical",
    "question": "Does anyone in your household have private insurance coverage?",
    "options": {
      "I have some form of insurance": 85,
      "Another person in my household has some form of insurance": 85,
      "Multiple people in my household have insurance": 85,
      "No one in my household has insurance": 86
    }
  },
  {
    "id": 85,
    "title": "Insurance",
    "text": "<p className=\"text-sm text-[#1E0F62]\">This section explains how to accurately fill out the insurance information on Page 3 of the TDP application after selecting ‘YES’. Depending on whether the plan covers one person or multiple household members, provide the following details:</p>\n<p className=\"text-sm text-[#1E0F62]\">One Insurance Plan Only Covering One Person:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder First Name (Required)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy Holder Last Name or Single Name (Required)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Name of Insurance Company (Required)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Policy or Plan Number (Required)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Identification or Certificate Number (Optional)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage Start Date (Optional, format YYYY/MM/DD, e.g., 2022/07/23)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Coverage End Date (Optional, format YYYY/MM/DD, e.g., 2023/07/23)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Persons Covered (Required): Select the policyholder’s name.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">One Insurance Plan Covering Multiple Household Members:<br />Complete the above fields and list all household members covered under the plan.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you provided all required insurance information on Page 3?",
    "options": {
      "Yes": 87
    }
  },
  {
    "id": 86,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">On Page 3 of the application, if your situation requires you to select the ‘NO’ option, simply click the box corresponding to this choice. Once selected, review the page to ensure the correct option is marked, then proceed to submit the page.</p>",
    "images": ["/images/id-86.png"],
    "content_orientation": "vertical",
    "question": "Have you selected the appropriate option and submitted Page 3?",
    "options": {
      "Yes": 89
    }
  },
  {
    "id": 87,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">The bottom part of the Insurance Plan section on Page 3 of the application asks about premiums, coverage limits, and drug exclusions. Your answers will help determine eligibility for credits or additional coverage. Detailed instructions include:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Premium: If you pay a premium, select ‘Yes’ (may qualify for up to $200 credit). If not, select ‘No’.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Maximum Coverage: Indicate if anyone in your plan has reached their annual or lifetime maximum.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Drug Exclusions: Indicate if there is a specific drug your plan does not cover.</p>\n<p className=\"text-sm text-[#1E0F62]\">Upload any required documents (e.g., a letter from your insurer) if available; otherwise, they can be submitted later.</p>",
    "images": ["Yes", "Yes"],
    "question": "Do you need to provide additional insurance information or add another household member's insurance plan?",
    "options": {
      "I have an additional insurance plan": 88,
      "I need to add another household member's insurance plan": 88,
      "I do not have any other insurance plans": 89
    }
  },
  {
    "id": 88,
    "title": "Additional Insurance Coverage",
    "text": "<p className=\"text-sm text-[#1E0F62]\">To ensure all private insurance plans are included, click the ‘Add an insurance plan’ button and repeat the process for each plan. Continue adding plans until all details are complete. When finished, select the appropriate button: ‘Add an insurance plan’ if you need to add another or ‘Continue’ to proceed.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you added all private insurance plans or do you need to add another?",
    "options": {
      "Add another insurance plan": 85,
      "I am done, I have added all of my insurance plans": 89
    }
  },
  {
    "id": 89,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 4 of the TDP application requires you to indicate whether you are a lawfully authorized representative signing the form on behalf of a household member or if you are signing for yourself. A lawfully authorized representative has the legal authority to act on behalf of another person. This includes:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Property</li>\n  <li className=\"text-sm text-[#1E0F62]\">Guardian of Person</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Property under a Continuing Power of Attorney (Property)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Attorney for Personal Care under a Power of Attorney (Personal Care)</li>\n  <li className=\"text-sm text-[#1E0F62]\">Public Guardian and Trustee</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">You must have valid legal documentation proving your authority. If not, you cannot sign the application on someone else’s behalf.</p>",
    "images": ["/images/id-89.png"],
    "content_orientation": "vertical",
    "question": "Are you signing this application on behalf of someone else or completing it for yourself?",
    "options": {
      "Signing on behalf of someone else": 90,
      "Completing for ourselves": 94
    }
  },
  {
    "id": 90,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘YES’ on Page 4 of the application, this means you are acting as a lawfully authorized representative for one or more household members. It’s important to specify whether you are representing a single individual or multiple household members.</p>\n<p className=\"text-sm text-[#1E0F62]\">- One Person Needs Representation: Provide your information and complete the form on behalf of that one household member. Other members may sign for themselves if they are at least 18 years old.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Multiple People Need Representation: Provide information for each person you are representing and sign on their behalf.</p>",
    "images": ["Yes", "Yes"],
    "question": "Are you representing one household member or more than one?",
    "options": {
      "Signing for only one person": 93,
      "Signing for more than one person": 91
    }
  },
  {
    "id": 91,
    "title": "Lawfully Authorized Representative: Multiple People",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you are representing multiple people in the household for the TDP application, you must complete the required fields for each person, specify your legal authority, and upload supporting legal documents. Follow these steps:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Indicate Who You Are Representing: Select the individuals you are authorized to represent (e.g., All or individual names).</li>\n  <li className=\"text-sm text-[#1E0F62]\">Specify Your Legal Authorization (Required): Choose from Guardian of Property, Guardian of Person, Continuing Power of Attorney (Property), Power of Attorney (Personal Care), or Public Guardian and Trustee.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide Representative Information: Enter your first and last name.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Upload Proof of Legal Representation Documents: Upload the necessary documents.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Click ‘Add a lawfully authorized representative’ when finished to add another person if needed.</p>",
    "images": ["/images/id-91.png"],
    "content_orientation": "vertical",
    "question": "Have you provided all required information and added the lawfully authorized representative(s)?",
    "options": {
      "Yes": 92
    }
  },
  {
    "id": 92,
    "title": "Lawfully Authorized Representative: Multiple People",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Complete the instructions for adding another lawfully authorized representative. When finished, select ‘Add a lawfully authorized representative’ if you want to add another, or ‘Continue’ if you are finished.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you added all necessary lawfully authorized representatives, or do you need to add another?",
    "options": {
      "I have inputted all necessary information and have pressed 'Add a lawfully authorized representative'": 91,
      "I am finished adding people that I am representing and have pressed 'Continue'": 95
    }
  },
  {
    "id": 93,
    "title": "Lawfully Authorized Representative: One Person",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you are representing only one person in the household for the TDP application, complete the required fields for that person, specify your legal authority, and upload supporting legal documents. Follow these steps:</p>\n<ul className=\"list-disc pl-4 text-sm text-[#1E0F62]\">\n  <li className=\"text-sm text-[#1E0F62]\">Indicate Who You Are Representing: Select the individual.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Specify Your Legal Authorization (Required): Choose from Guardian of Property, Guardian of Person, Continuing Power of Attorney (Property), Power of Attorney (Personal Care), or Public Guardian and Trustee.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Provide Representative Information: Enter your first and last name.</li>\n  <li className=\"text-sm text-[#1E0F62]\">Upload Proof of Legal Representation Documents: Upload the required documents.</li>\n</ul>\n<p className=\"text-sm text-[#1E0F62]\">Click ‘Continue’ after entering all information.</p>",
    "images": ["/images/id-93.png"],
    "content_orientation": "vertical",
    "question": "Have you entered all required information and successfully submitted Page 4?",
    "options": {
      "Yes": 95
    }
  },
  {
    "id": 94,
    "title": "Lawfully Authorized Representative",
    "text": "<p className=\"text-sm text-[#1E0F62]\">If you select ‘NO’ on Page 4 of the application, this means you are not acting as a lawfully authorized representative for any household member. Please select ‘Continue’ to move on.</p>",
    "images": ["/images/id-94.png"],
    "content_orientation": "vertical",
    "question": "Have you entered all required information and successfully submitted Page 4?",
    "options": {
      "Yes": 95
    }
  },
  {
    "id": 95,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 5 of the TDP application displays a summary of all the information you have input so far. This is your opportunity to carefully review your application for accuracy before proceeding. Review all sections and click the ‘Edit’ button next to any section you need to change. Once all information is confirmed accurate, press the ‘Continue’ button to proceed to the next step.</p>",
    "images": ["/images/id-95.png"],
    "content_orientation": "vertical",
    "question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
    "options": {
      "Yes": 96
    }
  },
  {
    "id": 96,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">Page 6 of the TDP application asks whether you and all household members aged 19 or older have filed tax returns for the most recent tax cycle. This information is used to calculate your deductible.</p>\n<p className=\"text-sm text-[#1E0F62]\">What Does Filing a Tax Return Mean?<br />Filing a tax return means submitting your income information to the Canada Revenue Agency (CRA) for the last tax year. This ensures that your household’s income is properly reported for assessing your application.</p>\n<p className=\"text-sm text-[#1E0F62]\">How to Check if You Have Filed a Tax Return:<br />Review your records for a Notice of Assessment from the CRA, check your CRA ‘My Account’ online, or consult with your accountant or tax preparer.</p>\n<p className=\"text-sm text-[#1E0F62]\">Instructions:<br />- If all household members aged 19 or older have filed their tax returns, select ‘Yes.’<br />- If any household member aged 19 or older has not filed their tax return, select ‘No.’</p>",
    "images": ["Yes", "Yes"],
    "question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
    "options": {
      "Yes, all 19+ household members have submitted their tax returns": 97,
      "One or more 19+ household members have NOT submitted their tax returns": 99,
      "NONE of the 19+ household members have submitted their tax returns": 98
    }
  },
  {
    "id": 97,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘YES’, confirming that both you and your partner (if applicable) have submitted your tax returns for the most recent tax year. Follow these steps:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Confirm authorization: By selecting ‘YES,’ you agree to allow the TDP to access your submitted tax returns.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: After reviewing, press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you inserted the required signatures and pressed submit?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 98,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘NO’ and indicated that while one partner has submitted their tax returns, the other has not. In this case, you will need to provide supporting documents to verify your household’s income. Follow these steps:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit supporting documents: Provide documents such as Statement of Earnings or T4 Slips, Social Assistance Statements (if applicable), or Proof of No Income.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box to confirm your consent.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: Press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you uploaded the required income documents, signed, and submitted the page?",
    "options": {
      "Yes": 51
    }
  },
  {
    "id": 99,
    "title": "Application Review",
    "text": "<p className=\"text-sm text-[#1E0F62]\">You have selected ‘NO’ and indicated that neither you nor your partner has submitted tax returns for the most recent tax year. In this case, you must upload alternative documents to verify your household’s income. Follow these steps:</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit supporting documents: Provide one or more of the following for each household member aged 19 or older: Statement of Earnings or T4 Slips, Social Assistance Statements (if applicable), or Proof of No Income.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Insert your signature: Press the ‘Insert Signature’ button and sign in the designated box to confirm your consent for submitting the alternative documents.</p>\n<p className=\"text-sm text-[#1E0F62]\">- Submit the page: Press the ‘Submit’ button to finalize this step.</p>",
    "images": ["Yes", "Yes"],
    "question": "Have you uploaded the required income documents, signed, and submitted the page?",
    "options": {
      "Yes": 51
    }
  }
]


  
  

export default function Questionaire() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(questions[0]);
  const [key, setKey] = useState(0); 

  const handleOptionClick = (optionId: number) => {
    if (optionId === 999) {
      router.push("/");
    } else {
      const newQuestion = questions.find(question => question.id === optionId) || null;
      setCurrentQuestion(newQuestion);
      setKey(prevKey => prevKey + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4 bg-[#FFFFFF] p-6 rounded-lg max-w-[700px]">
      {currentQuestion && 
      ( currentQuestion.images.length === 1 ? (
        <div key={key} className="flex flex-col gap-4"> 
          <h1 className="text-2xl font-bold text-[#1E0F62]">{currentQuestion.title}</h1>
          <p className="text-[#1E0F62]">{currentQuestion.question}</p>
          <div className={`flex ${currentQuestion.content_orientation === "horizontal" ? "lg:flex-row flex-col gap-4 justify-center items-center" : "flex-col gap-4"}`}>
            <Image src={currentQuestion.images[0]} alt="Question Image" width={currentQuestion.content_orientation === "horizontal" ? 100 : 700} height={currentQuestion.content_orientation === "horizontal" ? 100 : 700} />
            <div>
              {parse(currentQuestion.text)}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {currentQuestion.options && Object.entries(currentQuestion.options).map(([option, optionId]) => (
              <button 
                key={`${key}-${option}`} 
                onClick={() => handleOptionClick(optionId)} 
                className="bg-[#1E0F62] text-white text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg hover:bg-[#1E0F62]/80"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div key={key} className="flex flex-col gap-4"> 
          <h1 className="text-2xl font-bold text-[#1E0F62]">{currentQuestion.title}</h1>
          <p className="text-[#1E0F62]">{currentQuestion.question}</p>
          <div>
            {parse(currentQuestion.text)}
          </div>
          <div className="flex flex-col gap-4">
            {currentQuestion.options && Object.entries(currentQuestion.options).map(([option, optionId]) => (
              <button 
                key={`${key}-${option}`} 
                onClick={() => handleOptionClick(optionId)} 
                className="bg-[#1E0F62] text-white text-[20px] font-bold w-full max-w-[700px] px-4 py-2 rounded-2xl shadow-lg hover:bg-[#1E0F62]/80"
              >
                {option}
              </button>
            ))}
          </div>
        </div>)
      )}
    </div>
  )
}