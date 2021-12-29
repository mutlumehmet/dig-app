import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import ListCard from "../UI/ListCard";

const RepoListCard = () => {
  return (
    <div>
      <ListCard 
      icon={<BookOutlinedIcon />}
      title={"mmtbnb/lottie-android"}
      description={"Mender AfterEffects Animations natively on your computer"}
       />
    </div>
  );
};

export default RepoListCard;
