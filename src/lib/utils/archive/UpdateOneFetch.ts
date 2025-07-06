import type { ArchivePaperDetailProps } from "../../../types/Api"

export const UpdateOneFetch = (data: object): ArchivePaperDetailProps => {
  const fieldMap: { [key: string]: string } = {
      id: 'paper_id',
      title: 'paper_title',
      abstract: 'paper_abstract',
      issue: 'issue',
      volume: 'volume',
      month: 'paper_month',
      author: 'paper_author',
      year: 'year',
      url: 'paper_url',
      doi: 'paper_doi',
      is_deleted: 'is_deleted',
      articletype: 'paper_articletype',
      pages: 'paper_pages',
      uniqueid: 'paper_uniqueid',
      created_time: 'created_at',
      updated_at: 'updated_at',
      author_1: 'author_1',
      author_2: 'author_2',
      author_3: 'author_3',
      author_4: 'author_4',
      author_5: 'author_5',
      author_6: 'author_6',
      references: 'paper_references',
      citation: 'paper_citation',
      designation: 'paper_designation',
      doi_Link: 'paper_doi_Link'
  }

  const modify = Object.entries(data).reduce((acc, [key, value]) => {
      const newKey = fieldMap[key] || key
      return { ...acc, [newKey]: value }
  }, {} as ArchivePaperDetailProps)

  return modify
}