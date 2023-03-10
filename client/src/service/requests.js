import axios from 'axios';

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
    async getAllTeamsWithPlayers() {
      const { data } = await axios.get(`http://localhost:3002/api/teams/players`);
      return data;
    },
  },
  post: {
    async registerPlayer(body) {
      const result = await axios.post(
        `http://localhost:3002/api/players`,
        body
      );
      return result.data
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
  put: {
    async editPlayer(id, data) {
      const result = await axios.put(
        `http://localhost:3002/api/players/${id}`,
        data
      );
      return result.data
    },
  },
};

export default api;