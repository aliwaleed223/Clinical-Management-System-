import user_image from '../../images/user-image.svg';


const UserInfo = ({ name }) => {
  return (
    <div className="flex items-center gap-5 justify-self-end">
      <span>{name}</span>
      <img src={user_image} alt="User" className="h-14 rounded-full mr-4" />
    </div>
  );
};

export default UserInfo;