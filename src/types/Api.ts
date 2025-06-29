export interface BlogPost {
  title:string,
  subtitle:string,
  category:string,
  date:string,
  imageUrl:string
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