import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";


const mockIcon: IconDefinition = { prefix: "fas", iconName: "house" } as IconDefinition;

// FontAwesomeIcon stubben, damit wir das Icon im DOM eindeutig finden
vi.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: ({ icon }: { icon: { iconName?: string } }) => (
    <span data-testid={`icon-${icon.iconName}`} />
  ),
}));

// Rendert SidebarLink in einem MemoryRouter mit konfigurierbarem Pfad
function renderLink(initialPath: string, linkPath = "/house") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <SidebarLink icon={mockIcon} title="House" path={linkPath} />
    </MemoryRouter>
  );
}

describe("SidebarLink", () => {
  it("rendert Icon, Titel und korrekten href", () => {
    renderLink("/somewhere");

    expect(screen.getByTestId("icon-house")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /house/i });

    expect(link).toHaveAttribute("href", "/house");
  });

  it("bekommt aktive Styles, wenn Route übereinstimmt", () => {
    renderLink("/house"); // current URL == linkPath

    const link = screen.getByRole("link", { name: /house/i });
    expect(link.className).toContain("text-green-400");
    expect(link.className).toContain("font-semibold");
  });

  it("bekommt inaktive Styles, wenn Route **nicht** übereinstimmt", () => {
    renderLink("/other-route"); // current URL != linkPath

    const link = screen.getByRole("link", { name: /house/i });
    expect(link.className).toContain("text-white");
    expect(link.className).not.toContain("text-green-400");
  });
});
