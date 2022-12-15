//test file for Playlist component

import React from 'react';



//import { screen } from '@testing-library/react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

/*
------------------IMPORTANT-----------------------
DON'T FORGET TO IMPORT THIS FILE WHEN TESTING YOUR REACT COMPONENTS USING REDUX

*/
import { renderWithProviders } from '../test-utils';

import FileListItem from '../components/FileList/FileListItem';


afterEach(() => {
    cleanup();
})



test('FileListItem component should render Master of pampers', function(){

    const props = {id : 1, item : "Master of pampers"};

    renderWithProviders(<FileListItem id={props.id} title={"Master of pampers"}/>)

    const FileListItemDiv = screen.getByTestId("fileListItems-test");
    expect(FileListItemDiv).toBeInTheDocument();
    expect(FileListItemDiv).toContainHTML('p');
    expect(FileListItemDiv).toContainHTML('button');
    expect(FileListItemDiv).toContainHTML('div');


})

