//test file for Playlist component

import React from 'react';

import { screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

/*
------------------IMPORTANT-----------------------
DON'T FORGET TO IMPORT THIS FILE WHEN TESTING YOUR REACT COMPONENTS USING

*/
import { renderWithProviders } from '../test-utils';

//importing Playlist component
import PlayList from '../components/PlayList/Playlist'

afterEach(() => {
    cleanup();
})



test('Playlist component should render', function(){
    renderWithProviders(<PlayList />)

    //verifying Playlist return the main div container
    const PlaylistMainDiv = screen.getByTestId("playlist-component");
    expect(PlaylistMainDiv).toBeInTheDocument();

})

test('Playlist component should render Playlist title', function(){
    renderWithProviders(<PlayList />)

    //testing if component contain specific text
    const title = screen.getByText('Your PlayLists')
    expect(title).toBeInTheDocument();
})

test('Playlist component should containe HTML elements', function(){
    renderWithProviders(<PlayList />)

    //verifying Playlist return the main div container
    const PlaylistMainDiv = screen.getByTestId("playlist-component");
    expect(PlaylistMainDiv).toBeInTheDocument();
    expect(PlaylistMainDiv).toContainHTML('p');
    expect(PlaylistMainDiv).toContainHTML('button');
    expect(PlaylistMainDiv).toContainHTML('div');

})