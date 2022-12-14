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

//importing Playlist component
import DropDown from '../components/PlayList/DropDown/DropDown';

afterEach(() => {
    cleanup();
})



test('DropDown component should render All stars', function(){

    const props = {id : 1, title : "All stars"};

    renderWithProviders(<DropDown id={props.id} title={"All stars"}/>)

    //verifying DropDown return the main div container
    const DropDownMainDiv = screen.getByTestId("dropdown-component");
    expect(DropDownMainDiv).toBeInTheDocument();
    expect(DropDownMainDiv).toHaveTextContent(props.title);
    expect(DropDownMainDiv).toContainHTML('p');
    expect(DropDownMainDiv).toContainHTML('button');
    expect(DropDownMainDiv).toContainHTML('div');

})

test('DropDown component should render Naruto', function(){

    const props = {id : 2, title : "Naruto"};

    renderWithProviders(<DropDown id={props.id} title={"Naruto"}/>)

    //verifying DropDown return the main div container
    const DropDownMainDiv = screen.getByTestId("dropdown-component");
    expect(DropDownMainDiv).toBeInTheDocument();
    expect(DropDownMainDiv).toHaveTextContent(props.title);
    expect(DropDownMainDiv).toContainHTML('p');
    expect(DropDownMainDiv).toContainHTML('button');
    expect(DropDownMainDiv).toContainHTML('div');

})
