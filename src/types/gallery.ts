interface Scientist {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovered: string;
}

export interface GalleryProps {
    scientist: Scientist;
    size?: number;
}