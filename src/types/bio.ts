export interface BioProps {
    person: {name: string, imageId: string}, 
    profession: string,
    awards?: string[],
    discovered?: string
}