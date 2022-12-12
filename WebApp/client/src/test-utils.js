import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// As a basic setup, import your same slice reducers
import musicReducer from './reducers/musicReducer'
import playlistReducer from './reducers/playlistReducer'
import addSongReducer from './reducers/addSongReducer'

/* 

---------------------------------------IMPORTANT---------------------------------------------

Creating this file to simulate a Provider Wrapper when running due to our using of redux into 
our text avoiding error when launching them

*/


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { musicReducer : musicReducer, playlistReducer : playlistReducer, addSongReducer : addSongReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}