import { defineStore } from 'pinia'
import axios from 'axios'

axios.interceptors.request.use(config => {
  config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAwODE3OTQsImV4cCI6MTcwMDA4NTM5NCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6Imd1aWxsYXVtZS5ib3plY0BlcGl0ZWNoLmRpZ2l0YWwifQ.Ez_RS0wWUYPOd4e_ScvgLA82SkUz-cfCcXi2ONyp9BETW6_zozbnITNbtNQ-7SQ89jM9vvMfHxEQdZnqhowTITNyD070IcZgtccJDJrm4-a6Guq46lkJe5RktjwWI9VmnI5bcvWR4urTDqosnQzYfLsgM_oqA59aYz2D_VgXPMqn1UdNnZoQ3ce1z2q0KZJhqpuHPoFojN6U6rjPoMtzc7fre919Yu10uEVP95CRlcPw1KgvzwZXTOR0v6EQxF69Td1ozfdMQQir6uJ2MJPOU19yxqUTKlrYQIrbEptJo5FpM2A91gev7H0dZGnoQh71xb9jqnT_FJpL11H20awlrw';
  return config;
});

export const useItemStore = defineStore('counter',  {
  state :() => {
    return {
      items :[],
    }
  },
  getters: {
    getItems: state => state.items,
    getStatus:state => state.status
  },
  actions: {
    async fetchitems(){
      this.status = 'fetching';
      try {
        const response = await axios({url:"http://localhost/api/products", method:"get"});
        this.items = response.data; 
        console.log(response.data)
        this.status = 'done';
      } catch (error) {
        console.error('An error occurred while fetching items:', error);
        this.status = 'error';
      }
    },
    deleteitems(id) {
      console.log(id)
      axios.delete("http://localhost/api/products/" + id)
        .then(() => {
          this.fetchitems();
        })
        .catch(error => {
          console.error('An error occurred while deleting items:', error);
        });
    },

  }
})