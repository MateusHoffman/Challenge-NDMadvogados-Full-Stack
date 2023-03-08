import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const globalContext = createContext();

function GlobalProvider({ children }) {
  const [playerInfo, setPlayerInfo] = useState({});
  const [editingPlayer, setEditingPlayer] = useState(false);

  return (
    <globalContext.Provider
      value={ {
        playerInfo,
        setPlayerInfo,
        editingPlayer,
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