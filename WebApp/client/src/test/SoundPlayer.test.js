//test file for Playlist component

import React from 'react';

import { screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

/*
------------------IMPORTANT-----------------------
DON'T FORGET TO IMPORT THIS FILE WHEN TESTING YOUR REACT COMPONENTS USING

*/
import { renderWithProviders } from '../test-utils';

import SoundPlayer from '../components/SoundPlayer/SoundPlayer';

afterEach(() => {
    cleanup();
})



test('SoundPlayer component should render', function(){
    renderWithProviders(<SoundPlayer />)

    //verifying SoundPLayer return the main div container
    const soundPlayertMainDiv = screen.getByTestId("soundplayer-test");
    expect(soundPlayertMainDiv).toBeInTheDocument();

})

test('Playlist component should containe HTML elements', function(){
    renderWithProviders(<SoundPlayer />)

    //verifying SoundPLayer return the main div container
    const SoundPLayerMainDiv = screen.getByTestId("soundplayer-test");
    expect(SoundPLayerMainDiv).toBeInTheDocument();
    expect(SoundPLayerMainDiv).toContainHTML('div');
    expect(SoundPLayerMainDiv).toContainHTML('button');
    expect(SoundPLayerMainDiv).toContainHTML('marquee');

})