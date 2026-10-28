/**
 * TECHNOVA: PUZZLE ADVENTURE — Question Bank
 *
 * 6 nodes x 3 questions = 18 questions.
 * Naye set ke liye sirf is file ke questions badlo (node ka title/icon bhi badal sakte ho).
 *
 * Format:
 *   options : 4 options ka text (A, B, C, D order mein)
 *   answer  : sahi option ka letter ("A" / "B" / "C" / "D")
 */
 
const PUZZLE_LEVELS = [
  {
    title: "Logical Reasoning",
    icon: "🧠",
    description: "Clues dekho, relations samjho, aur sahi deduction nikalo.",
    questions: [
      {
        text: "P is taller than Q. R is taller than P. S is shorter than Q. Who is the second tallest?",
        options: ["P", "Q", "R", "S"],
        answer: "A"
      },
      {
        text: "All researchers are curious. Some students are researchers. Which conclusion must follow?",
        options: [
          "All students are curious",
          "Some students are curious",
          "No students are curious",
          "All curious people are researchers"
        ],
        answer: "B"
      },
      {
        text: "Aman ranks 12th from the top and 19th from the bottom. How many students are in the class?",
        options: ["29", "30", "31", "32"],
        answer: "B"
      }
    ]
  },
  {
    title: "Pattern & Sequence",
    icon: "🔢",
    description: "Numbers aur letters ke pattern pehchano.",
    questions: [
      {
        text: "Find the missing number: 2, 6, 12, 20, 30, __?",
        options: ["40", "42", "44", "36"],
        answer: "B"
      },
      {
        text: "Find the next letter: B, E, I, N, T, ___",
        options: ["A", "B", "C", "Z"],
        answer: "A"
      },
      {
        text: "Find the next pair: AZ, BY, CX, DW, ___",
        options: ["EU", "EV", "FU", "EX"],
        answer: "B"
      }
    ]
  },
  {
    title: "Problem Solving",
    icon: "⚙️",
    description: "Calculation lagao aur sahi value tak pahuncho.",
    questions: [
      {
        text: "A farmer has chickens and goats. There are 10 heads and 28 legs in total. How many goats are there?",
        options: ["3", "4", "5", "6"],
        answer: "B"
      },
      {
        text: "A product costs ₹800. Its price increases by 25%, then receives a discount of 20%. What is the final price?",
        options: ["₹760", "₹800", "₹820", "₹840"],
        answer: "B"
      },
      {
        text: "A two-digit number has digits that add to 9. Reversing its digits increases the number by 27. What is the original number?",
        options: ["36", "45", "54", "63"],
        answer: "A"
      }
    ]
  },
  {
    title: "Data Interpretation",
    icon: "📊",
    description: "Rates, percentages aur data ko sahi padho.",
    questions: [
      {
        text: "A car covers equal distances at 40 km/h and 60 km/h. What is its average speed for the entire journey?",
        options: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
        answer: "B"
      },
      {
        text: "A student spends 40% of their budget on rent and 25% on food. If the remaining ₹700 is spent on transport and other expenses, what was the total budget?",
        options: ["₹1,400", "₹1,600", "₹2,000", "₹2,800"],
        answer: "C"
      },
      {
        text: "Team A has a success rate of 72% from 250 attempts. Team B has a success rate of 80% from 200 attempts. Which team has more successful attempts, and by how many?",
        options: [
          "Team A, by 10",
          "Team B, by 10",
          "Team A, by 20",
          "Both have equal successes"
        ],
        answer: "C"
      }
    ]
  },
  {
    title: "Constraint Satisfaction",
    icon: "🧩",
    description: "Har condition check karo, phir valid option chuno.",
    questions: [
      {
        text: "Three adjacent regions X, Y, and Z must be colored red or blue. X borders Y, and Y borders Z, but X does not border Z. If X is red and Y is blue, what color can Z be?",
        options: ["Red only", "Blue only", "Either red or blue", "Neither color"],
        answer: "A"
      },
      {
        text: "Three boxes A, B, and C are arranged left to right. A cannot be at the left end, and C must be immediately to the right of A. Which arrangement is valid?",
        options: ["A–C–B", "B–A–C", "C–A–B", "B–C–A"],
        answer: "B"
      },
      {
        text: "Three people A, B, and C each choose a different day—Monday, Tuesday, or Wednesday. A cannot choose Monday. B must choose Tuesday. Which assignment is valid?",
        options: [
          "A–Monday, B–Tuesday, C–Wednesday",
          "A–Wednesday, B–Tuesday, C–Monday",
          "A–Tuesday, B–Monday, C–Wednesday",
          "A–Wednesday, B–Monday, C–Tuesday"
        ],
        answer: "B"
      }
    ]
  },
  {
    title: "Encoding & Decoding",
    icon: "🔐",
    description: "Code ka rule pakdo aur use apply karo.",
    questions: [
      {
        text: "If CAT is coded as DBU, how is DOG coded using the same rule?",
        options: ["EPH", "EOG", "FPH", "DPH"],
        answer: "A"
      },
      {
        text: "If every letter is shifted two places forward, how is LOGIC encoded?",
        options: ["NQIKE", "NQIKC", "MQIKE", "NPHKE"],
        answer: "A"
      },
      {
        text: "If each vowel is replaced by the next letter and each consonant by the previous letter, how is BAT encoded?",
        options: ["ABS", "CBS", "AZT", "BZS"],
        answer: "A"
      }
    ]
  }
];
 
if (typeof window !== "undefined") {
  window.PUZZLE_LEVELS = PUZZLE_LEVELS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PUZZLE_LEVELS };
}
 
