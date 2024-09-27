import { AvatarProps } from "@/types/avatar";

export default function Avatar({person, size=70}: AvatarProps) { // An alternative way to write the function
    return (
      <img
        className="avatar"
        src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }