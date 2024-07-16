export const queries = [
  {
    // social 1
    question: "Do you support the Indian government's actions in Kashmir?",
    options: [
      { key: 1, text: "Fully support the government's actions", xValue: 0, yValue: -1 },
      { key: 2, text: "Support the government's actions", xValue: 0, yValue: -0.65 },
      { key: 3, text: "The army's presence is dangerous to civilians", xValue: 0, yValue: 0.65 },
      { key: 4, text: "We are essentially colonizing Kashmir", xValue: 0, yValue: 1 }
    ]
  },
  // social 2
  {
    question: "What is your opinion on Ayodhya?",
    options: [
      { key: 1, text: "I am very happy to see Ram Lalla in Ayodhya", xValue: 1, yValue: 0 },
      { key: 2, text: "Ram is everywhere", xValue: 0.65, yValue: 0 },
      { key: 3, text: "A school or college would have been better", xValue: -0.65, yValue: 0 },
      { key: 4, text: "We will build the mosque at that location", xValue: -1, yValue: 0 }
    ]
  },
  // social 3
  {
    question: "What is your opinion on the Israel-Palestine conflict?",
    options: [
      { key: 1, text: "Israel should eliminate the jihadists", xValue: 1, yValue: 0 },
      { key: 2, text: "Israel should target Hamas while minimizing civilian casualties", xValue: 0.65, yValue: 0 },
      { key: 3, text: "Palestine has the right to self-defense with Hamas's help", xValue: -0.65, yValue: 0 },
      { key: 4, text: "Hamas should kill the Jews", xValue: -1, yValue: 0 },
      { key: 5, text: "Establish a two-state solution to stop the deaths", xValue: 0, yValue: 0.35 }
    ]
  },
  // social and economic
  {
    question: "Merit vs. Social Justice?",
    options: [
      { key: 1, text: "The country should run entirely on merit", xValue: 1, yValue: 1 },
      { key: 2, text: "The government should subsidize education for backward communities based on merit", xValue: 0.65, yValue: 0.65 },
      { key: 3, text: "50% reservation is necessary to uplift backward communities", xValue: -0.65, yValue: -0.65 },
      { key: 4, text: "The only way is to implement equal resource sharing", xValue: -1, yValue: -1 }
    ]
  },
  {
    question: "Should India be a plural or a secular country?",
    options: [
      { key: 1, text: "We should enforce Hindutva", xValue: 1, yValue: -0.85 },
      { key: 2, text: "Remove the words 'socialist' and 'secular'", xValue: 0.85, yValue: 0.65 },
      { key: 3, text: "Our constitution is perfect; we should be a secular and socialist country", xValue: -0.85, yValue: -0.65 },
      { key: 4, text: "Let's create a Communist-Islamist country", xValue: -1, yValue: -1 }
    ]
  },
  {
    question: "What are your thoughts on same-sex marriage?",
    options: [
      { key: 1, text: "India should officially legalize same-sex marriage", xValue: 0, yValue: 1 },
      { key: 2, text: "I dislike people using pronouns", xValue: 0, yValue: 0.35 },
      { key: 3, text: "I am worried about trans ideologies spreading to young children", xValue: 0, yValue: -0.45 },
      { key: 4, text: "Being gay should be punishable by death", xValue: 0, yValue: -1 }
    ]
  },
  {
    question: "Free Market vs. License Raj",
    options: [
      { key: 1, text: "Maximize ease of doing business", xValue: 1, yValue: 0 },
      { key: 2, text: "Support free market with some regulations", xValue: 0.65, yValue: 0 },
      { key: 3, text: "The government should have significant control over key industries", xValue: -0.65, yValue: 0 },
      { key: 4, text: "The government should manage and control all companies and industries", xValue: -1, yValue: 0 }
    ]
  },
  {
    question: "Progressive Taxation vs. Flat Taxation",
    options: [
      { key: 1, text: "High progressive taxation to reduce inequality", xValue: -1, yValue: -0.5 },
      { key: 2, text: "Moderate progressive taxation with some flat tax elements", xValue: -0.5, yValue: -0.25 },
      { key: 3, text: "Low progressive taxation, leaning towards flat taxation", xValue: 0.5, yValue: 0.25 },
      { key: 4, text: "Flat taxation with minimal redistribution", xValue: 1, yValue: 0.5 }
    ]
  },
  {
    question: "Environment vs. Infrastructure Development",
    options: [
      { key: 1, text: "Prioritize environmental protection even if it limits infrastructure development", xValue: -1, yValue: 1 },
      { key: 2, text: "Focus on environmental protection with some sustainable infrastructure development", xValue: -0.5, yValue: 0.5 },
      { key: 3, text: "Balance environmental concerns with necessary infrastructure development", xValue: 0, yValue: 0 },
      { key: 4, text: "Prioritize infrastructure development with some environmental regulations", xValue: 0.5, yValue: -0.5 },
      { key: 5, text: "Maximize infrastructure development, even if it impacts the environment", xValue: 1, yValue: -1 }
    ]
  },
  {
    question: "Freedom of Speech vs. Blasphemy Laws",
    options: [
      { key: 1, text: "Unrestricted freedom of speech, including blasphemy", xValue: 1, yValue: 1 },
      { key: 2, text: "Freedom of speech with minimal restrictions on hate speech", xValue: 0.5, yValue: 0.5 },
      { key: 3, text: "Balanced approach with some restrictions on blasphemy to protect religious sentiments", xValue: 0, yValue: 0 },
      { key: 4, text: "Restrict blasphemous speech to protect religious beliefs", xValue: -0.5, yValue: -0.5 },
      { key: 5, text: "Strong blasphemy laws with significant restrictions on speech to prevent offense to any religion", xValue: -1, yValue: -1 }
    ]
  }
];
