export interface CostItem {
  id: string
  description: string
  estimate: number
  quantity: number
  selected: boolean
}

export interface QuestionItem {
  description: string
  answer: string
  id: number
}