import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import SongOfTheDay from "./SongOfTheDay";
import { AudioContext } from "../contexts/AudioContext";
import { Track } from "../types";


const mockTrack: Track = {
  id: 3047560351,
  title: "Test Song of The Day",
  preview: "https://example.com/preview.mp3",
  album: { cover: "https://picsum.photos/200" },
  artist: { name: "Mock Artist" },
};

function mockFetchSuccess(track: Track) {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: vi.fn().mockResolvedValue(track),
  } as any);
}

function mockFetchFailure() {
  globalThis.fetch = vi.fn().mockResolvedValue({ ok: false } as any);
}

function renderWithCtx(ctx: { current?: number | null; play?: (t: Track) => void } = {}) {
  const playSpy = ctx.play ?? vi.fn();
  const current = ctx.current ?? null;
  return {
    playSpy,
    ...render(
      <AudioContext.Provider value={{ current, play: playSpy }}>
        <SongOfTheDay />
      </AudioContext.Provider>
    ),
  };
}

// FontAwesomeIcon stubs – so können wir Icons mit data-testid abfragen
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: ({ icon, ...rest }: { icon: { iconName?: string } }) => (
    <span data-testid={icon.iconName} {...rest}></span>
  ),
}));

beforeEach(() => {
  vi.useRealTimers();
  vi.resetAllMocks();
});
afterEach(() => cleanup());


describe("SongOfTheDay", () => {
  it("zeigt Loading und rendert dann den Song", async () => {
    mockFetchSuccess(mockTrack);
    renderWithCtx();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    expect(screen.getByText(mockTrack.title)).toBeInTheDocument();
    expect(screen.getByText(mockTrack.artist.name)).toBeInTheDocument();
    expect(screen.getByAltText(/album-cover/i)).toHaveAttribute("src", mockTrack.album.cover);
    expect(screen.getByTestId("circle-play")).toBeInTheDocument();
  });

  it("ruft play(track) beim Klick auf das Icon auf", async () => {
    mockFetchSuccess(mockTrack);
    const { playSpy } = renderWithCtx();

    await screen.findByText(mockTrack.title);
    fireEvent.click(screen.getByTestId("circle-play"));
    expect(playSpy).toHaveBeenCalledWith(mockTrack);
  });

  it("zeigt Stop-Icon und grüne Schrift, wenn Song aktuell ist", async () => {
    mockFetchSuccess(mockTrack);
    renderWithCtx({ current: mockTrack.id });

    await screen.findByText(mockTrack.title);

    const titleEl = screen.getByText(mockTrack.title);
    expect(titleEl.className).toContain("text-green-400");
    expect(screen.getByTestId("circle-stop")).toBeInTheDocument();
  });

  it("zeigt Fehlermeldung bei Fetch-Fehler", async () => {
    mockFetchFailure();
    renderWithCtx();

    await waitFor(() =>
      expect(screen.getByText(/song konnte nicht geladen werden/i)).toBeInTheDocument()
    );
  });
});
