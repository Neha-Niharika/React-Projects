interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
  imageURL: string;
}

function ProfileCard({ name, age, bio, imageURL }: ProfileCardProps) {
  return (
    <div className="card p-3" style={{width:'18rem'}}>
      <img src={imageURL} className="card-img-top" alt={name} height="200" width="100" />
      <div className="card-body">
        <h2 className="card-title">
          {name} ({age} years old)
        </h2>
        <p className="card-text" >{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
