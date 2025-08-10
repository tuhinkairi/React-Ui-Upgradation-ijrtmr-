
// conference card interface
export interface ConferenceCardProps {
  id: number;
  name: string;
  title: string;
  organised_by: string;
  conference_date: string;
  volume: string;
  year: string;
  issue: string;
  created_at: Date;
  updated_at: Date;

}

export interface ConferenceArticleProps {
  id: number;
  title: string;
  article_type: string;
  pages: string;
  pdf_url: string;
  category_id: number;
  created_at: string; // ISO timestamp
  updated_at: string;
  volume: string;
  year: string;
  month:string;
  author_1: string | null;
  author_2: string | null;
  author_3: string | null;
  author_4: string | null;
  author_5: string | null;
  author_6: string | null;

  abstract: string | null;
  references: string | null;
  citation: string | null;
  designation: string | null;
  doi: string | null;
  doi_link: string | null;
}


// Archive
export interface ArchiveIndexVolume {
  year: string;
  volumes: {
    volume: string;
    issue: string[];
  }[]
}
export interface ActiveIndexArchive {
  year: string;
  volume: string;
  issue: string;
}


// artical paper
export interface ArchivePaperDetailProps {
  paper_id: number;
  paper_title: string;
  paper_abstract: string;
  issue: string;
  volume: string;
  paper_month: string;
  paper_author: string;
  year: string;
  paper_url: string;
  paper_doi: string;
  is_deleted: number;
  paper_articletype: string;
  paper_pages: string;
  paper_uniqueid: string | null;
  created_at: string;
  updated_at: string;
  author_1: string | null;
  author_2: string | null;
  author_3: string | null;
  author_4: string | null;
  author_5: string | null;
  author_6: string | null;
  paper_references: string | null;
  paper_citation: string | null;
  paper_designation: string | null;
  paper_doi_Link: string | null;
}
// suggested article
export interface ArticleSuggestion {
  paper_id: number,
  paper_title: string,
  paper_author: string,
  year: string
}
export interface ArticleSuggestionProp {
  paper_title: string,
  year: string
}

// editorial
export interface EditorialMember {
  member_id: number
  is_active: number
  is_deleted: number
  member_role: string
  member_address: string
  member_image_url: string
  member_researcharea: string
  member_email: string
  member_website: string
  member_country: string
  member_name: string
  member_designation: string
  created_at: string
  updated_at: string
  member_publication: string
  social_links:{name:string, link:string|null}[]
  member_orcid_id: string
  member_scopus_id: string | null
  member_thomson_reuters: string | null
  member_google_scholar_id: string
  member_linkedin: string | null
}

// blog
export interface Blog {
  id: number | null,
  created_at: string | null,
  updated_at: string | null,
  image: string | null,
  description: string | null,
  title: string | null,
  url_title: string | null,
  category: string | null,
  meta_title: string | null,
  meta_description: string | null,
  tags: string | null
}
// thesis 
// volumes
export interface ThesisIndexingItem {
  year: string;
  volume: string;
  issue:string
}
// listiting
export interface ThesisListingItem {
  id: number;
  volume: string;
  year: string;
  title: string;
  author_1: string | null;
  author_2: string | null;
  author_3: string | null;
  author_4: string | null;
  author_5: string | null;
  author_6: string | null;
  month: string;
  pages: string;
  abstract: string;
  reference: string;
  citation: string;
  designation: string;
  doi_no: string;
  doi_link: string;
  created_at: string;
  updated_at: string;
  paper_url: string;
}

//contact us
export interface ContactUs {
  name: string,
  email: string,
  phone: string,
  message: string,
}

// search
export interface SearchProp {
  search: string,
  page: number,
  per_page: number
}


