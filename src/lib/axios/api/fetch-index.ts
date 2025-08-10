
import { axiosClient } from "../axios-client";


const fetchIndex = async () => {
  try {
    const response = await axiosClient.post('/indexfetch');
    // console.log(response.data)
    return response.data.indexingList;
  } catch (error) {
    console.error('Error fetching index:', error);
    throw error;
  }
};

export default fetchIndex;
