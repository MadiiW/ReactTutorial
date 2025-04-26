import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SongCard from "./SongCard";
import "@testing-library/jest-dom";
import { AudioContext } from "../contexts/AudioContext";
import { Track } from "../types";
import React from "react";

const sampleTrack: Track = {
  id: 42,
  title: "Test-Song",
  preview: "https://example.com/preview.mp3",
  album: { cover: "https://picsum.photos/80" },
  artist: { name: "Unit Tester" },
};

function renderWithAudioContext(
  ui: React.ReactElement,
  ctx: { current: number | null; play?: (t: Track) => void } = {
    current: null,
    play: vi.fn(),
  }
) {
  const playSpy = ctx.play ?? vi.fn();
  return {
    playSpy,
    ...render(
      <AudioContext.Provider value={{ current: ctx.current, play: playSpy }}>
        {ui}
      </AudioContext.Provider>
    ),
  };
}

// FontAwesomeIcon stubben, damit wir die Icons leicht abfragen können
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }: { icon: { iconName?: string } }) => (
    <span data-testid={icon.iconName}></span>
  ),
}));


describe("SongCard", () => {
  it("rendert Titel, Künstler, Cover & Track-Nr.", () => {
    renderWithAudioContext(<SongCard track={sampleTrack} trackNumber={1} />);

    expect(screen.getByText("Test-Song")).toBeInTheDocument();
    expect(screen.getByText("Unit Tester")).toBeInTheDocument();
    expect(screen.getByAltText("Album-Cover")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByTestId("circle-play")).toBeInTheDocument();
  });

  it("ruft play(track) beim Klick", () => {
    const { playSpy } = renderWithAudioContext(<SongCard track={sampleTrack} />);
    fireEvent.click(screen.getByRole("listitem"));
    expect(playSpy).toHaveBeenCalledWith(sampleTrack);
  });

  it("zeigt Stop-Icon & grüne Markierung, wenn Track aktuell ist", () => {
    renderWithAudioContext(<SongCard track={sampleTrack} />, {
      current: sampleTrack.id,
    });

    expect(screen.getByText("Test-Song").className).toContain("text-green-400");
    expect(screen.getByTestId("circle-stop")).toBeInTheDocument();
  });

  it("zeigt Play-Icon, wenn Track **nicht** aktuell ist", () => {
    renderWithAudioContext(<SongCard track={sampleTrack} />, {
      current: 999,
    });

    expect(screen.getByTestId("circle-play")).toBeInTheDocument();
  });
});
