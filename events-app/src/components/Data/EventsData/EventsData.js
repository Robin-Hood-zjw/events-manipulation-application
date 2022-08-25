import axios from "axios";

const EVENTS_URL = "https://601caf791a9c220017060c02.mockapi.io/api/v1/Events";

export const getEventsAPI = async ({ date, eventId }) => {
  try {
    let params = [];
    let url = EVENTS_URL;

    if (date) params.push(`date=${date}`);
    if (eventId) params.push(`eventId=${eventId}`);

    for (let idx = 0; idx < params.length; idx++) {
      if (idx === 0) {
        url = url + `?${params[idx]}}`;
      } else {
        url = url + `&${params[idx]}}`;
      }
    }

    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};
