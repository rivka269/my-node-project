const axios = require('axios');

// הגדרת הקונפיגורציה של axios לשימוש עם ה-SDK
const api = axios.create({
  baseURL: 'https://render-api.com/v1.0',
  headers: {
    'Authorization': 'Bearer rnd_rc90H7Aap2IVNhgkjxH1OG0b8M6t'
  }
});

// ביצוע הבקשה GET
api.get('/services', {
  params: {
    limit: 20
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });