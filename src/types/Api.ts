export interface BlogPost {
  title:string,
  subtitle:string,
  category:string,
  date:string,
  imageUrl:string
}

// conference card interface
export interface ConferenceCardProps {
  acronym: string;
  title: string;
  organizer: string;
  date: string;
  articleLink: string;
}