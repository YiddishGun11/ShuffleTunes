import React from 'react';



//import { screen } from '@testing-library/react';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

/*
------------------IMPORTANT-----------------------
DON'T FORGET TO IMPORT THIS FILE WHEN TESTING YOUR REACT COMPONENTS USING REDUX

*/
import { renderWithProviders } from '../test-utils';

import UploadMusic from '../components/UploadMusic/UploadMusic.js'

afterEach(() => {
    cleanup();
})

test('UploadMusic component should render', () => {
    renderWithProviders(<UploadMusic />)

    expect(screen.getByTestId("uploadMusic-component")).toBeInTheDocument()
})

test('UploadMusic component should contain all HTML element', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    expect(UploadMusicMainDiv).toContainHTML("form");
    expect(UploadMusicMainDiv).toContainHTML("input");
    expect(UploadMusicMainDiv).toContainHTML("label");
    expect(UploadMusicMainDiv).toContainHTML("div");
    expect(UploadMusicMainDiv).toContainHTML("button");
    
})

test('Upload a random file to the form', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file = new File(["dummy content"], 'chucknorris.png', { type :"image/png" });

    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file]}});
    // It's possible to uplaod other than .mp3 or .wav file but will be ignored in the backend
    expect(UploadMusicMainDiv).toHaveTextContent('📁 chucknorris.png');
})

test('Upload a music file to the form', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });

    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file]}});

    expect(UploadMusicMainDiv).toHaveTextContent('📁 chucknorris.wav');
})

test('Upload different music files to the form', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file1 = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });
    const file2 = new File(["dummy content"], 'yolo.wav', { type :"audio/wav" });

    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file1]}});
    fireEvent.change(fileInput, {target: {files: [file2]}});

    expect(UploadMusicMainDiv).toHaveTextContent('📁 chucknorris.wav');
    expect(UploadMusicMainDiv).toHaveTextContent('📁 yolo.wav');
})

test('Upload same music files to the form', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file1 = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });
    const file2 = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });

    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file1]}});
    fireEvent.change(fileInput, {target: {files: [file2]}});

    expect(UploadMusicMainDiv).toHaveTextContent('📁 chucknorris.wav');
})

test('Delete an uploaded music file to the form', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });

    const fileInput = screen.getByTestId("form-input");
    fireEvent.change(fileInput, {target: {files: [file]}});

    const deletMusicButton = screen.getAllByRole('button')[0]
    fireEvent.click(deletMusicButton);
    
    expect(UploadMusicMainDiv).toHaveTextContent('Successfull delete');
    expect(UploadMusicMainDiv).toHaveTextContent('The music chucknorris.wav has been deleted from the queue');

    expect(UploadMusicMainDiv).toContainHTML("p");
    expect(UploadMusicMainDiv).toHaveTextContent('Click here to load your musics');
})

test('Cancel upload with cancel button', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file1 = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });
    const file2 = new File(["dummy content"], 'baba.wav', { type :"audio/wav" });

    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file1]}});
    fireEvent.change(fileInput, {target: {files: [file2]}});

    const deletMusicButton = screen.getAllByRole('button')[2]
    fireEvent.click(deletMusicButton);

    expect(UploadMusicMainDiv).toHaveTextContent('Successfull clear');
    expect(UploadMusicMainDiv).toHaveTextContent('The queue has been cleared');

    expect(UploadMusicMainDiv).toContainHTML("p");
    expect(UploadMusicMainDiv).toHaveTextContent('Click here to load your musics');
})

test('Submit file', () => {
    renderWithProviders(<UploadMusic />)

    const UploadMusicMainDiv = screen.getByTestId("uploadMusic-component");
    const file1 = new File(["dummy content"], 'chucknorris.wav', { type :"audio/wav" });
    const fileInput = screen.getByTestId("form-input");

    fireEvent.change(fileInput, {target: {files: [file1]}});

    const submitMusicButton = screen.getAllByRole('button')[2]
    fireEvent.click(submitMusicButton);

    expect(UploadMusicMainDiv).toHaveTextContent('You\'ve send the music');
    expect(UploadMusicMainDiv).toHaveTextContent('Please wait');

})

