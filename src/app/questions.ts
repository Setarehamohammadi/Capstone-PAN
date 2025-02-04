const questions = [
    {
        "id": 2,
        "question": "Let's get started!",
        "options": {
         "Start": 3
      }
    },
    { 
        "id": 3,
        "question": "I have read and understood the disclaimer provided above",
        "options": {
            "Agree": 6,
            "Disagree": 4
        }
    },
    {
        "id": 4,
        "question": "I would like to reconsider my decision",
        "options": {
            "Yes": 2,
            "No": 2
        }
    },
    {
        "id": 6,
        "question": "I have the application open and ready to start",
        "options": {
            "Proceed": 7
        }
    },
    {
        "id": 7,
        "question": "Would you like to start triage or skip to support?",
        "options": {
            "Start triage": 8,
            "Skip to support": 17
        }
    },
    {
        "id": 8,
        "question": "What is the current status of your Ontario Health Card?",
        "options": {
            "Yes, I have a valid card": 11,
            "No, I do not have an Ontario Health card": 10,
            "My card is expired": 9,
            "My card will expire within the next 2 months": 9
        }
    },
    {
        "id": 11,
        "question": "How old are you?",
        "options": {
            "Under 24 years old": 12,
            "Between 25 and 64 years old": 14,
            "65 years old and over": 13
        }
    },
    {
        "id": 14,
        "question": "Do you have any type of insurance?",
        "options": {
            "Yes, I have private insurance": 15,
            "N,o I do not have private insurance": 17
        }
    },
    {
        "id": 15,
        "question": "How much coverage do you get?",
        "options": {
               "Yes, my insurance completely covers my prescription drug costs": 16,
                "No, my private insurance plan does not completely cover my prescription drug costs": 17,
                "Currently, my plan covers my expenses, but it will not cover PrEP": 17
          }
    },
    {
        "id": 17,
        "question": "Are you ready to start?",
        "options": {
            "No, I need help finding the official application": 18, 
            "Yes, begin application": 19
        }
    },
    {
        "id": 18,
        "question": "I found the official application",
        "options": {
            "Return to navigator": 17
        }
    },
    {
        "id": 19,
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
        "question": "Are you a student under 25 years of age?",
        "options": {
            "No, I am not a student under 25": 24,
            "Ye,s I am a student under 25": 22
        }
    },
    {
        "id": 21,
        "question": "Are you a student under 25 years of age?",
        "options": {
            "No, I am not a student under 25": 24,
            "Yes, I am a student under 25": 22
        }
    },
    {
        "id": 22,
        "question": "Do you receive financial support from your family (i.e. parents or grandparents)?",
        "options": {
            "Yes, my family gives me financial support": 23,
            "No, my family does not give me financial support": 24
        }
    },
    {
        "id": 23,
        "question": "How would you like to proceed with your application?",
        "options": {
            "I want to proceed as a single-person household": 24,
            "I want to go back to apply as a family": 28
        }
    },
    {
        "id": 24,
        "question": "Would you like to proceed with your application as a financially independent single-person household?",
        "options": {
            "Yes": 31
        }
    },
    {
        "id": 25,
        "question": "Do any of these definitions describe your current relationship with your partner?",
        "options": {
            "Yes, one of these definitions applies to my relationship": 26,
            "No, none of these definitions apply to my relationship": 27,
            "Go back, I need to choose family": 28
        }
    },
    {
        "id": 26,
        "Question": "Are you ready to proceed with completing the application as a two-person household?",
        "Option": {
            "Continue": 52
        }
    },
    {
        "id": 27,
        "question": "Would you like to return to family composition?",
        "option": {
    "Yes": 19
    }
    },
    {
        "id": 28,
        "question": "Is anyone in your household independent from the rest of the household?",
        "options": {
            "Yes, one or more people in my house are independent": 29,
            "No, no one in my house has separate living expenses they pay for alone": 30
        }
    },
    {
        "id": 29,
        "question": "Do you understand that financially independent individuals should not be included in your application?",
        "option": {
    "I understand. I will not include financially independent people in the application.": 30
    }
    },
    {
        "id": 30,
        "question": "Are you ready to include required family information?",
        "option": {
    "Yes, continue": 76
      }
    },
    {
        "id": 31,
        "question": "Have you completed all required fields?",
        "option": {
            "Continue to Mailing Address": 32
        }
    },
    {
        "id": 32,
        "question": "Can you receive door-to-door delivery?",
        "option": {
            "I can receive door-to-door delivery": 34,
            "I am not able to receive door-to-door delivery": 33
        }
    },
    {
        "id": 33,
        "question": "Have you completed the mailing address portion?",
        "option": {
    "I have completed the Mailing Address portion and have successfully submitted Page 1": 35
    }
    },
    {
        "id": 34,
        "question": "Have you completed the mailing address portion?",
        "option": {
    "I have completed the Mailing Address portion and have successfully submitted Page 1": 35
    }
    },
    {
        "id": 35,
        "question": "Do you know what date you want your enrollment to start?",
        "options":{
                "Yes, I know when I want my enrolment date to be": 36,
                  "No, I do not know when to set my enrolment date": 37
            }
    },
    {
        "id": 36,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
                "I have indicated my enrolment date and have submitted Page 2": 38
         }
    },
    {
        "id": 37,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
            "I have indicated my enrolment date and have submitted Page 2": 38
         }
    },
    {
        "id": 38,
        "question": "Do you have insurance?",
        "options": {
            "I have some form of insurance": 40,
            "I do not have any insurance": 39
        }
    },
    {
        "id": 39,
        "question": "Have you selected the correct option for additional insurance coverage and successfully submitted Page 3?",
        "option": {
            "I have selected the correct option and successfully submitted Page 3": 44
        }
    },
    {
        "id": 40,
        "question": "Have you accurately filled out the insurance information for Page 3?",
        "option": {
            "I have completed the required insurance information": 41
        }
    },
    {
        "id": 41,
        "question": "How many insurance plans do you have?",
        "options": {
            "I only have one insurance plan": 44,
            "I have more than one insurance plan": 42
        }
    },
    {
        "id": 42,
        "question": "Do you need to add any additional insurance plans?",
        "options": {
            "Add another insurance plan": 40,
            "I am done I have added all of my insurance plans": 44
        }
    },
    {
        "id": 44,
        "question": "Who are you signing for?",
        "options": {
            "Signing on behalf of someone else": 45,
            "Completing for ourselves": 46
        }
    },
    {
        "id": 45,
        "question": "Have you finished completing the form?",
        "option": {
     "I have inputted all necessary information and have successfully submitted Page": 47
         }
    },
    {
        "id": 46,
        "question": "Have you finished completing the form?",
        "option": {
     "I have inputted all necessary information and have successfully submitted Page": 47
         }
    },
    {
        "id": 47,
        "question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
        "option": {
            "Yes": 48
        }
    },
    {
        "id": 48,
        "question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
        "options": {
            "Yes, I submitted my tax returns": 49,
            "No, I did not submit my tax returns": 50
        }
    },
    {
        "id": 49,
        "question": "Have you inserted your signatures and have pressed submit?",
        "options": {
            "Yes": 51
        }
    },
    {
        "id": 50,
        "question": "Have you uploaded the appropriate income documents, inserted your signatures, and have pressed submit?",
        "options": {
            "Yes": 51
        }
    },
    {
        "id": 51,
        "link": "start page"
    },
    {
        "id": 52,
        "question": "Have you added your partner's information to the application?",
        "option": {
           "Add partner's information": 53
        }
    },
    {
        "id": 53,
        "question": "Have you completed all required fields?",
        "option": {
            "Continue to Mailing Address": 54
        }
    },
    {
        "id": 54,
        "question": "Can you receive door-to-door delivery?",
        "option": {
            "I can receive door-to-door delivery": 56,
            "I am not able to receive door-to-door delivery": 55
        }
    },
    {
        "id": 55,
        "question": "Have you completed the mailing address portion?",
        "option": {
            "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
        }
    },
    {
        "id": 56,
        "question": "Have you completed the mailing address portion?",
        "option": {
    "I have completed the Mailing Address portion and have successfully submitted Page 1": 57
    }
    },
    {
        "id": 57,
        "question": "Do you know what date you want your enrollment to start?",
        "options":{
                "Yes, I know when I want my enrolment date to be": 58,
                  "No, I do not know when to set my enrolment date": 59
            }
    },
    {
        "id": 58,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
            "I have indicated my enrolment date and have submitted Page 2": 60
        }
    },
    {
        "id": 59,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
            "I have indicated my enrolment date and have submitted Page 2": 60
        }
    },
    {
        "id": 60,
        "Question": "Do you have any type of insurance?",
        "Options": {
            "I have some form of insurance": 62,
            "My partner has some form of insurance": 62,
            "My partner and I both have insurance": 62,
            "My partner and I do not have insurance": 61
        }
    },
    {
        "id": 61,
        "question": "Have you completed Page 3?",
        "option": {
            "I have selected the correct option and successfully submitted Page 3": 66
        }
    },
    {
        "id": 62,
        "Question": "Have you completed all required insurance information on Page 3?",
        "Option": {
            "I have completed all of the required questions": 63
        }
    },
    {
        "id": 63,
        "Question": "Do you need to provide additional insurance information or add another household member's insurance plan?",
        "Options": {
            "I have an additional insurance plan": 64,
            "I need to add another household member's insurance plan": 64,
            "I do not have any other insurance plans": 66
        }
    },
    {
        "id": 64,
        "question": "Have you added all private insurance plans, or do you need to add another?",
        "options": {
            "Add another insurance plan": 62,
            "I do not have any other insurance plans": 66
        }
    },
    {
        "id": 66,
        "Question": "Are you signing this application on behalf of someone else or completing it for yourself?",
        "Option": {
            "Signing on behalf of someone else": 67,
            "Completing for ourselves": 70
        }
    },
    {
        "id": 67,
        "Question": "Are you signing as a representative for one person or for both partners?",
        "Option": {
            "Signing for only one person": 69,
            "Signing for both partners": 68
        }
    },
    {
        "id": 68,
        "Question": "Have you entered all required information and added a lawfully authorized representative?",
        "Option": {
            "I have inputted all necessary information and have pressed Add a lawfully authorized representative": 71
        }
    },
    {
        "id": 69,
        "Question": "Have you entered all required information and successfully submitted Page 4?",
        "Option": {
            "Yes": 71
        }
    },
    {
        "id": 70,
        "Question": "Have you entered all required information and successfully submitted Page 4?",
        "Option": {
            "Yes": 71
        }
    },
    {
        "id": 71,
        "Question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
        "Option": {
            "Yes": 72
        }
    },
    {
        "id": 72,
        "Question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
        "Options": {
            "Yes, my partner and I have both submitted our tax returns": 73,
            "One of us has NOT submitted our tax return": 74,
            "Neither of us has submitted our tax returns": 75
        }
    },
    {
        "id": 73,
        "Question": "Have you inserted both signatures and pressed submit?",
        "Options": {
            "Yes": 51
        }
    },
    {
        "id": 74,
        "Question": "Have you uploaded the required income documents, signed, and submitted the page?",
        "Options": {
            "Yes": 51
        }
    },
    {
        "id": 75,
        "Question": "Have you uploaded the required income documents, signed, and submitted the page?",
        "Options": {
            "Yes": 51
        }
    },
    {
        "id": 76,
        "Question": "Have you entered your information and added all household members?",
        "Option": {
            "Add a household member": 77
        }
    },
    {
        "id": 77,
        "Question": "Have you added all required household members and their information?",
        "Option": {
            "I am done adding household members": 78,
            "I need to add another household member": 77
        }
    },
    {
        "id": 78,
        "Question": "Are you able to receive door-to-door delivery for correspondence?",
        "Option": {
            "I can receive door-to-door delivery": 80,
            "I am not able to receive door-to-door delivery": 79
        }
    },
    {
        "id": 79,
        "Question": "Have you completed the Mailing Address section and successfully submitted Page 1?",
        "Option": {
            "Yes": 81
        }
    },
    {
        "id": 80,
        "Question": "Have you completed the Mailing Address section and successfully submitted Page 1?",
        "Option": {
            "Yes": 81
        }
    },
    {
        "id": 81,
        "question": "Do you know what date you want your enrollment to start?",
        "options":{
                "Yes, I know when I want my enrolment date to be": 82,
                  "No, I do not know when to set my enrolment date": 83
            }
    },
    {
        "id": 82,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
            "I have indicated my enrolment date and have submitted Page 2": 84
        }
    },
    {
        "id": 83,
        "question": "Have you indicated your enrolment start date and submitted it?",
        "option":{
            "I have indicated my enrolment date and have submitted Page 2": 84
        }
    },
    {
        "id": 84,
        "Question": "Does anyone in your household have private insurance coverage?",
        "Option": {
            "I have some form of insurance": 85,
            "Another person in my household has some form of insurance": 85,
            "Multiple people in my household have insurance": 85,
            "No one in my household has insurance": 86
        }
    },
    {
        "id": 85,
        "Question": "Have you provided all required insurance information on Page 3?",
        "Option": {
            "Yes": 87
        }
    },
    {
        "id": 86,
        "Question": "Have you selected the appropriate option and submitted Page 3?",
        "Option": {
            "Yes": 89
        }
    },
    {
        "id": 87,
        "Question": "Do you need to provide additional insurance information or add another household member's insurance plan?",
        "Option": {
            "I have an additional insurance plan": 88,
            "I need to add another household member's insurance plan": 88,
            "I do not have any other insurance plans": 89
        }
    },
    {
        "id": 88,
        "Question": "Have you added all private insurance plans or do you need to add another?",
        "Option": {
            "Add another insurance plan": 85,
            "I am done, I have added all of my insurance plans": 89
        }
    },
    {
        "id": 89,
        "Question": "Are you signing this application on behalf of someone else or completing it for yourself?",
        "Option": {
            "Signing on behalf of someone else": 90,
            "Completing for ourselves": 94
        }
    },
    {
        "id": 90,
        "Question": "Are you representing one household member or more than one?",
        "Option": {
            "Signing for only one person": 93,
            "Signing for more than one person": 91
        }
    },
    {
        "id": 91,
        "Question": "Have you provided all required information and added the lawfully authorized representative(s)?",
        "Option": {
            "Yes": 92
        }
    },
    {
        "id": 92,
        "Question": "Have you added all necessary lawfully authorized representatives, or do you need to add another?",
        "Option": {
            "I have inputted all necessary information and have pressed 'Add a lawfully authorized representative'": 91,
            "I am finished adding people that I am representing and have pressed 'Continue'": 95
        }
    },
    {
        "id": 93,
        "Question": "Have you entered all required information and successfully submitted Page 4?",
        "Option": {
            "Yes": 95
        }
    },
    {
        "id": 94,
        "Question": "Have you entered all required information and successfully submitted Page 4?",
        "Option": {
            "Yes": 95
        }
    },
    {
        "id": 95,
        "Question": "Have you reviewed your application, made any necessary changes, and pressed Continue?",
        "Option": {
            "Yes": 96
        }
    },
    {
        "id": 96,
        "question": "Have all household members aged 19 or older filed their tax returns for the most recent tax year?",
        "options": {
            "Yes, all 19+ household members have submitted their tax returns": 97,
            "One or more 19+ household members have NOT submitted their tax returns": 99,
            "NONE of the 19+ household members have submitted their tax returns": 98
        }
    },
    {
        "id": 97,
        "Question": "Have you inserted the required signatures and pressed submit?",
        "Option": {
            "Yes": 51
        }
    },
    {
        "id": 98,
        "question": "Have you uploaded the required income documents, signed, and submitted the page?",
        "option": {
            "Yes": 51
        }
    },
    {
        "id": 99,
        "question": "Have you uploaded the required income documents, signed, and submitted the page?",
        "option": {
            "Yes": 51
        }
    }
]

export default questions;