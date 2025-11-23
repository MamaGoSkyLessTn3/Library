
export interface BookType {
  key:string
  title: string
  authors: {
    key:string
    name: string
  }[]
  description: string
  cover_url: string
  first_publish_year: number
  subjects: string[]
  taken_date: string
  return_date: string
  number_of_pages_median:number
}
