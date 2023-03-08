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
      await axios.post(
        `http://localhost:3002/api/players`,
        body
      );
    },
    async registerTeam(body) {
      await axios.post(
        `http://localhost:3002/api/teams`,
        body
      );
    },
  },
  delete: {
    async deletePlayer({id}) {
      await axios.delete(`http://localhost:3002/api/players/${id}`);
    },
    async deleteTeam({id}) {
      await axios.delete(`http://localhost:3002/api/teams/${id}`);
    },
  },
};

export default api;