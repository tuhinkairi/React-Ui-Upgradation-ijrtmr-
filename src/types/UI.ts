export interface Indexing {
    indexing_id: number
    indexing_name: string
    indexing_url: string
    is_active: number
    is_deleted: number
    indexing_image_url: string
    createdtime: string
    modifiedtime: string
}
export interface IndexingList {
    indexingList: Indexing[]
}

export type activeSection = { active: "archive" | "conference" | "issue" | "thesis" }
