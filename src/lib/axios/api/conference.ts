
import type { ConferenceArticleProps, ConferenceCardProps } from "../../../types/Api";
import { axiosClient } from "../axios-client";

// #page 1
// getting the lists
const conference_categories = async (): Promise<ConferenceCardProps[]> => {
  try {
    const response = await axiosClient.post('/conferenceCategoriesFetch');
    console.log(response.data)
    return response.data.Conference_CategoriesList;
  } catch (error) {
    console.error('Error fetching index:', error);
    throw error;
  }
};

export default conference_categories;

// #page 2 volume
// details
export type conferenceDetailsType = { id: number, page: number, per_page: number }
export const conference_detials = async (params: conferenceDetailsType): Promise<{
  ConferenceList: ConferenceArticleProps[], current_page: number, per_page: number,
  total_items: number,
  total_pages: number
}> => {
  try {
    const response = await axiosClient.post('/conferenceFetch', {
      id: params.id,
      page: params.page,
      per_page: params.per_page
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching index:', error);
    throw error;
  }
};
