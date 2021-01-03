import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test("doesn't render analysis steps before pressing 'Analyse' button", () => {
    render(<App/>);
    const githubCloneStepText = screen.queryByText("Fetching code")
    expect(githubCloneStepText).toBeNull()
})

test("renders analysis steps after pressing 'Analyse' button", () => {
    render(<App/>);
    const button = screen.getByText("Analyse") as HTMLButtonElement;
    button.click()
    const githubCloneStepText = screen.getByText("Fetching code")
    expect(githubCloneStepText).toBeInTheDocument()
})

test('renders prompt', () => {
    render(<App/>);
    const prompt = screen.getByText("Enter a GitHub repository URL");
    expect(prompt).toBeInTheDocument();
});
