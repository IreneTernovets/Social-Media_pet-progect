import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

interface UserCardProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const PeopleSuggestElement: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="people-suggest-user-card-wrapper">
      <Divider />
      <div className="people-suggest-user-card">
        <Avatar {...stringAvatar(user.name)} />
        <div className="people-suggest-user-info">
          <p>{user.name}</p>
          <p className="subtitle">{user.email}</p>
        </div>
        <button className="people-suggest-user-follow_button">Follow</button>
      </div>
    </div>
  );
};

export default PeopleSuggestElement;
