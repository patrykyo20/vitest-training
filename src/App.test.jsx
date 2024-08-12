import { render, screen} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe('App', function() {
  it('should show Vitest', function() {
    render(<App />)
    expect(screen.getByText('Vitest')).toBeInTheDocument();
  })

  it('should show Click on the Vite and React logos to learn more', function() {
    render(<App />)
    expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument();
  })

  it('should show Click on the Vite and React logos to learn more', function() {
    render(<App />)
    screen.debug(document.body)
  })
})