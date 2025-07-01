export interface BlogPost {
  title: string,
  subtitle: string,
  category: string,
  date: string,
  imageUrl: string
}

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
export interface ArchiveIndexVolume{
    year: string;
    volumes: {
      volume: string;
      issue: string[];
    }[]
}