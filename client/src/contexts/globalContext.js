import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '../service/requests';

export const globalContext = createContext();

function GlobalProvider({ children }) {
  const [playerInfo, setPlayerInfo] = useState({});
  const [editingPlayer, setEditingPlayer] = useState(false);

  const [teamsPlayers, setTeamsPlayers] = useState();

  const requestApi = async () => {
    const teamsAndPlayers = await api.get.getAllTeamsWithPlayers()
    setTeamsPlayers(teamsAndPlayers)
  }

  useEffect(() => {
    requestApi()
  }, [])

  return (
    <globalContext.Provider
      value={ {
        playerInfo,
        setPlayerInfo,
        editingPlayer,
        teamsPlayers,
        setTeamsPlayers,
        setEditingPlayer,
      } }
    >
      {children}
    </globalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes,
}.isRequired;

export default GlobalProvider;