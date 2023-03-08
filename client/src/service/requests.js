import axios from 'axios';
// require('dotenv').config();

const api = {
  get: {
    async getAllTeams() {
      const { data } = await axios.get(`http://localhost:3002/api/teams`);
      return data;
    },
    async getAllPlayers() {
      const { data } = await axios.get(`http://localhost:3002/api/players`);
      return data;
    },
  },
  post: {
    async registerPlayer(body) {
      console.log(body);
      await axios.post(
        `http://localhost:3002/api/players`,
        body
      );
    },
    async registerTeam(body) {
      console.log(body);
      await axios.post(
        `http://localhost:3002/api/teams`,
        body
      );
    },
  },
};

export default api;