import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID iCxEwOp0QkggOnGU1XP7SRLNQArxL5pBV84YJAadDHQ',
  },
});
