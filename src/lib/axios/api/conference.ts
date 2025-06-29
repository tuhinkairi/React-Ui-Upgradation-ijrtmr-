
import { axiosClient } from "../axios-client";


const conference_categories = async () => {
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
