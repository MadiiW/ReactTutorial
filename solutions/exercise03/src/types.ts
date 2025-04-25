export interface Track {
  id: number;
  title: string;
  preview: string;
  album: { cover: string };
  artist: { name: string };
}
