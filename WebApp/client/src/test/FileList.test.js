//test file for Playlist component

import React from 'react';

import { screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

/*
------------------IMPORTANT-----------------------
DON'T FORGET TO IMPORT THIS FILE WHEN TESTING YOUR REACT COMPONENTS USING

*/
import { renderWithProviders } from '../test-utils';

import FileList from '../components/FileList/FileList';

afterEach(() => {
    cleanup();
})



test('FileList component should render', function(){
    renderWithProviders(<FileList />)

    //verifying Playlist return the main div container
    const FileListBody = screen.getByTestId("file-list-test");
    expect(FileListBody).toBeInTheDocument();

})

test('FileList component should render Playlist title', function(){
    renderWithProviders(<FileList />)

    //testing if component contain specific text
    const title = screen.getByText('Your File List')
    expect(title).toBeInTheDocument();
})

test('FileList component should containe HTML elements', function(){
    renderWithProviders(<FileList />)

    //verifying Playlist return the main div container
    const FileListBody = screen.getByTestId("file-list-test");
    expect(FileListBody).toBeInTheDocument();
    expect(FileListBody).toContainHTML('h1');
    expect(FileListBody).toContainHTML('div');

})