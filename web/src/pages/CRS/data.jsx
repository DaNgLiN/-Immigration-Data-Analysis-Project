export const formKey = {
  maritalStatus: "maritalStatus",
  spouseResident: "spouseResident",
  spouseComeCanada: "spouseComeCanada",
  age: "age",
  education: "education",
  canadianDegree: "canadianDegree",
  levelOfEducation: "levelOfEducation",
  languageTestYears: "languageTestYears",
  officialLanguage: "officialLanguage",
  speakingScore: "speakingScore",
  listeningScore: "listeningScore",
  readingScore: "readingScore",
  writingScore: "writingScore",
  workExperienceInCanada: "workExperienceInCanada",
  workExperienceInForeign: "workExperienceInForeign",
  certificateOfQualification: "certificateOfQualification",
  jobOfferLMIA: "jobOfferLMIA",
  jobOfferNOC_TEER: "jobOfferNOC_TEER",
  provinceNomineCertificate: "provinceNomineCertificate",
  bloodRelationship: "bloodRelationship",
};

export const initialData = [
  {
    name: formKey.maritalStatus,
    label: "1) What is your marital status?",
    options: [
      { label: "Select..." },
      { label: "Single", value: "single" },
      { label: "Married", value: "married" },
      { label: "Divorced", value: "divorced" },
    ],
    value: "",
  },
  {
    name: formKey.spouseResident,
    label:
      "Is your spouse or common-law partner a citizen or permanent resident of Canada?",
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.spouseComeCanada,
    label: "Will your spouse or common-law partner come with you to Canada?",
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.age,
    label: (
      <div>
        <p className="font-weight-bold">3) How old are you?</p>
        Choose the best answer: <br />
        If you've been invited to apply, enter your age on the date you were
        invited. <br /> OR <br /> If you plan to complete an Express Entry
        profile, enter your current age.
      </div>
    ),
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "17 years of age or less",
        value: "A",
      },
      {
        label: "18 years of age",
        value: "B",
      },
      {
        label: "19 years of age",
        value: "C",
      },
      {
        label: "20 years of age",
        value: "D",
      },
      {
        label: "21 years of age",
        value: "E",
      },
      {
        label: "22 years of age",
        value: "F",
      },
      {
        label: "23 years of age",
        value: "G",
      },
      {
        label: "24 years of age",
        value: "H",
      },
      {
        label: "25 years of age",
        value: "I",
      },
      {
        label: "26 years of age",
        value: "J",
      },
      {
        label: "27 years of age",
        value: "K",
      },
      {
        label: "28 years of age",
        value: "L",
      },
      {
        label: "29 years of age",
        value: "M",
      },
      {
        label: "30 years of age",
        value: "N",
      },
      {
        label: "31 years of age",
        value: "O",
      },
      {
        label: "32 years of age",
        value: "P",
      },
      {
        label: "33 years of age",
        value: "Q",
      },
      {
        label: "34 years of age",
        value: "R",
      },
      {
        label: "35 years of age",
        value: "S",
      },
      {
        label: "36 years of age",
        value: "T",
      },
      {
        label: "37 years of age",
        value: "U",
      },
      {
        label: "38 years of age",
        value: "V",
      },
      {
        label: "39 years of age",
        value: "W",
      },
      {
        label: "40 years of age",
        value: "X",
      },
      {
        label: "41 years of age",
        value: "Y",
      },
      {
        label: "42 years of age",
        value: "Z",
      },
      {
        label: "43 years of age",
        value: "AA",
      },
      {
        label: "44 years of age",
        value: "AB",
      },
      {
        label: "45 years of age or more",
        value: "AC",
      },
    ],
    value: "",
  },
  {
    name: formKey.education,
    label: "What is your level of education?",
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "None, or less than secondary (high school)",
        value: "A",
      },
      {
        label: "Secondary diploma (high school graduation)",
        value: "B",
      },
      {
        label:
          "One-year program at a university, college, trade or technical school, or other institute",
        value: "C",
      },
      {
        label:
          "Two-year program at a university, college, trade or technical school, or other institute",
        value: "D",
      },
      {
        label:
          "Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)",
        value: "E",
      },
      {
        label:
          "Two or more certificates, diplomas or degrees. One must be for a program of three or more years",
        value: "F",
      },
      {
        label:
          "Master's degree, or professional degree needed to practice in a licensed profession (see Help)",
        value: "G",
      },
      {
        label: "Doctoral level university degree (PhD)",
        value: "H",
      },
    ],
    value: "",
  },
  {
    name: formKey.canadianDegree,
    label: "Have you earned a Canadian degree, diploma or certificate?",
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.levelOfEducation,
    label: "Choose the best answer to describe this level of education.",
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "Secondary (high school) or less",
        value: "A",
      },
      {
        label: "One- or two-year diploma or certificate",
        value: "B",
      },
      {
        label:
          "Degree, diploma or certificate of three years or longer OR a Master’s, professional or doctoral degree of at least one academic year",
        value: "C",
      },
    ],
    value: "",
  },
  {
    name: formKey.languageTestYears,
    label: (
      <div>
        <p className="font-weight-bold">
          Official languages: Canada&pos;s official languages are English and
          French. You need to submit language test results that are less than
          two years old for all programs under Express Entry, even if English or
          French is your first language.
        </p>
        <br />
        Are your test results less than two years old?
      </div>
    ),
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.officialLanguage,
    label: "Which language test did you take for your first official language?",
    options: [{ label: "Select..." }, { label: "IELTS", value: "IELTS" }],
    value: "",
  },
  {
    name: formKey.speakingScore,
    label: (
      <div>
        Enter your test scores:
        <br />
        Speaking:
      </div>
    ),
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "7.5 – 9.0",
        value: "H",
      },
      {
        label: "7.0",
        value: "G",
      },
      {
        label: "6.5",
        value: "F",
      },
      {
        label: "6.0",
        value: "E",
      },
      {
        label: "5.5",
        value: "D",
      },
      {
        label: "5.0",
        value: "C",
      },
      {
        label: "4.0 - 4.5",
        value: "B",
      },
      {
        label: "0 - 3.5",
        value: "A",
      },
    ],
    value: "",
  },
  {
    name: formKey.listeningScore,
    label: "Listening",
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "8.5 – 9.0",
        value: "H",
      },
      {
        label: "8.0",
        value: "G",
      },
      {
        label: "7.5",
        value: "F",
      },
      {
        label: "6 .0- 7.0",
        value: "E",
      },
      {
        label: "5.5",
        value: "D",
      },
      {
        label: "5.0",
        value: "C",
      },
      {
        label: "4.5",
        value: "B",
      },
      {
        label: "0- 4.0",
        value: "A",
      },
    ],
    value: "",
  },
  {
    name: formKey.readingScore,
    label: "Reading",
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "8.0 – 9.0",
        value: "H",
      },
      {
        label: "7.0 - 7.5",
        value: "G",
      },
      {
        label: "6.5",
        value: "F",
      },
      {
        label: "6.0",
        value: "E",
      },
      {
        label: "5.0 - 5.5",
        value: "D",
      },
      {
        label: "4.0 - 4.5",
        value: "C",
      },
      {
        label: "3.5",
        value: "B",
      },
      {
        label: "0 - 3.0",
        value: "A",
      },
    ],
    value: "",
  },
  {
    name: formKey.writingScore,
    label: "Writing",
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "7.5 – 9.0",
        value: "H",
      },
      {
        label: "7.0",
        value: "G",
      },
      {
        label: "6.5",
        value: "F",
      },
      {
        label: "6.0",
        value: "E",
      },
      {
        label: "5.5",
        value: "D",
      },
      {
        label: "5.0",
        value: "C",
      },
      {
        label: "4.0 - 4.5",
        value: "B",
      },
      {
        label: "0 - 3.5",
        value: "A",
      },
    ],
    value: "",
  },
  {
    name: formKey.workExperienceInCanada,
    label: (
      <div>
        Work Experience
        <br />
        i. In the last ten years, how many years of skilled work experience in
        Canada do you have? It must have been paid and full-time (or an equal
        amount in part-time).
        <br />
        Note: In Canada, the National Occupational Classification (NOC) is the
        official list of all the jobs in the Canadian labour market. It
        describes each job according to the training, education, experience and
        responsibilities (TEER) needed to work in the job.
        <br />
        Skilled work in the NOC is TEER 0, 1, 2 or 3 category jobs:
        <br />
        If you aren’t sure of the NOC TEER category for this job, you can find
        your NOC.
      </div>
    ),
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "None or less than a year",
        value: "A",
      },
      {
        label: "1 year",
        value: "B",
      },
      {
        label: "2 years",
        value: "C",
      },
      {
        label: "3 years",
        value: "D",
      },
      {
        label: "4 years",
        value: "E",
      },
      {
        label: "5 years or more",
        value: "F",
      },
    ],
    value: "",
  },
  {
    name: formKey.workExperienceInForeign,
    label: (
      <div>
        ii. In the last 10 years, how many total years of foreign skilled work
        experience do you have?
        <br />
        It must have been paid, full-time (or an equal amount in part-time), and
        in only one occupation (NOC TEER category 0, 1, 2 or 3).
      </div>
    ),
    options: [
      {
        label: "Select...",
        value: "",
      },
      {
        label: "None or less than a year",
        value: "A",
      },
      {
        label: "1 year",
        value: "B",
      },
      {
        label: "2 years",
        value: "C",
      },
      {
        label: "3 years or more",
        value: "D",
      },
    ],
    value: "",
  },
  {
    name: formKey.certificateOfQualification,
    label: (
      <div>
        Do you have a certificate of qualification from a Canadian province,
        territory or federal body? Note: A certificate of qualification lets
        people work in some skilled trades in Canada. Only the provinces,
        territories and a federal body can issue these certificates. To get one,
        a person must have them assess their training, trade experience and
        skills to and then pass a certification exam.
        <br />
        People usually have to go to the province or territory to be assessed.
        They may also need experience and training from an employer in Canada.
        <br />
        This isn’t the same as a nomination from a province or territory.
      </div>
    ),
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.jobOfferLMIA,
    label: (
      <div>
        Additional Points
        <br />
        Do you have a valid job offer supported by a Labour Market Impact
        Assessment (if needed)? A valid job offer must be
        <br />
        full-time in a skilled job listed as TEER 0, 1, 2 or 3 in the 2021
        National Occupational Classification supported by a Labour Market Impact
        Assessment (LMIA) or exempt from needing one for one year from the time
        you become a permanent resident A job offer isn’t valid if your employer
        is:
        <br />
        an embassy, high commission or consulate in Canada or on the list of
        ineligible employers. Whether an offer is valid or not also depends on
        different factors, depending on your case. See a full list of criteria
        for valid job offers.
      </div>
    ),
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.jobOfferNOC_TEER,
    label: " Which NOC TEER is the job offer?",
    options: [
      {
        label: "Select...",
        value: "badvalue",
      },
      {
        label: "NOC TEER 0 Major group 00",
        value: "A",
      },
      {
        label: "NOC TEER 1, 2 or 3, or any TEER 0 other than Major group 00",
        value: "B",
      },
      {
        label: "NOC TEER 4 or 5",
        value: "C",
      },
    ],
    value: "",
  },
  {
    name: formKey.provinceNomineCertificate,
    label: "Do you have a nomination certificate from a province or territory?",
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
  {
    name: formKey.bloodRelationship,
    label: (
      <div>
        Do you or your spouse or common law partner (if they will come with you
        to Canada) have at least one brother or sister living in Canada who is a
        citizen or permanent resident? Note: to answer yes, the brother or
        sister must be:
        <br />
        <ul>
          <li>18 years old or older</li>
          <li>
            related to you or your partner by blood, marriage, common-law
            partnership or adoption have a parent in common with you or your
            partner
          </li>
          <li>A brother or sister is related to you by:</li>
        </ul>
        <br />
        <ul>
          <li>blood (biological)</li>
          <li>adoption</li>
          <li>marriage (step-brother or step-sister)</li>
        </ul>
      </div>
    ),
    options: [
      { label: "Select..." },
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    value: "",
  },
];
