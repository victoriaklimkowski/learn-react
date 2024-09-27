import { AvatarProps } from "@/types/avatar"; // Defining the object AvatarProps

// function Avatar({person, size=100}: AvatarProps) { // An alternative way to write the function
function Avatar(props: AvatarProps) {
  const { person, size = 100 } = props;
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

// Illustrates the resusability of components by using the Avatar component
export default function Profile() {
  return (
    <div>
        <Avatar
            person={{ name: 'Woon sen', imageId: 'OKS67lh'}}
            size={200} />
        <Avatar
            person={{ name: 'Ron Ayah', imageId: 'YfeOqp2'}}
            size={150} />
        <Avatar
            person={{ name: 'Pani Dom', imageId: '1bX5QH6'}} />
    </div>
  );
}