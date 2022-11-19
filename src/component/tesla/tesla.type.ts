export interface Section {
  who: string
  text: string
  link: string
  id: string
  buttonList: string[]
}

export interface ITesla {
  list: Section[]
  message?: string
}
