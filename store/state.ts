import { CostItem, QuestionItem } from "../global";

const INITIAL_COSTS_STATE: CostItem[] = [
  {
    id: "1",
    description: "Identify requirements",
    estimate: 6,
    quantity: 0,
    selected: false,
  },
  {
    id: "2",
    description: "Request a quotation",
    estimate: 3,
    quantity: 0,
    selected: false,
  },
  {
    id: "3",
    description: "Find products",
    estimate: 16,
    quantity: 0,
    selected: false,
  },
  {
    id: "4",
    description: "Raise an order",
    estimate: 6,
    quantity: 0,
    selected: false,
  },
  {
    id: "5",
    description: "Authorise sale",
    estimate: 21.55,
    quantity: 0,
    selected: false,
  },
  {
    id: "6",
    description: "Pay provider",
    estimate: 13,
    quantity: 0,
    selected: false,
  },
  {
    id: "7",
    description: "Deliver product",
    estimate: 4.3,
    quantity: 0,
    selected: false,
  },
  {
    id: "8",
    description: "Invoice check",
    estimate: 6,
    quantity: 0,
    selected: false,
  },
  {
    id: "9",
    description: "Place order",
    estimate: 6.5,
    quantity: 0,
    selected: false,
  },
];

const INITIAL_QUESTIONS_STATE: QuestionItem[] = [
  {
    id: 1,
    description: "What is your approximate annual spend on industrial items?",
    answer: '0',
  },
  {
    id: 2,
    description: "Approximately how many unique purchase orders are raised per annum of these items?",
    answer: '0',
  },
  {
    id: 3,
    description: "Approximately how many suppliers are you using for industrial supplies?",
    answer: '0',
  },
];

export { INITIAL_COSTS_STATE, INITIAL_QUESTIONS_STATE };
