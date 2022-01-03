import SidePanelCard from "../UI/SidePanelCard";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import styles from "./RepoSideBar.module.css";
import LinkIcon from "@mui/icons-material/Link";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RepoSideBarListItemCard from "../UI/RepoSideBarListItemCard";
import BookmarksButton from "../UI/BookmarksButton";

const RepoSideBar = (props: any) => {
  const newData = {
    repoId: props.bookData.id,
    repoTitle: props.bookData.full_name,
    repoText: props.bookData.description,
  };

  const handleClick = () => {
    props.liftBookmarks(newData);
  };

  return (
    <SidePanelCard>
      <div className={styles.box}>
        <BookOutlinedIcon sx={{ fontSize: "64px" }} />
        <div className={styles.title}>{props.repoData.full_name}</div>
        <div className={styles["sub-title"]}>{props.repoData.topics}</div>
        <div className={styles["horizon-box"]}>
          <div className={styles["url-icon"]}>
            <LinkIcon />
          </div>
          <div className={styles["url-text"]}>
            <a
              href={props.repoData.html_url}
              style={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
            >
              {props.repoData.full_name}
            </a>
          </div>
        </div>
        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Watch"}
          counterNumber={props.repoData.watchers}
          showDivider={true}
        />
        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Star"}
          counterNumber={props.repoData.stargazers_count}
          showDivider={true}
        />
        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Fork"}
          counterNumber={props.repoData.forks_count}
          showDivider={false}
        />

        <div
          style={{
            height: "35px",
          }}
        ></div>

        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Issues"}
          counterNumber={props.repoData.open_issues_count}
          showDivider={true}
        />
        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Subscriber"}
          counterNumber={props.repoData.subscribers_count}
          showDivider={true}
        />
        <RepoSideBarListItemCard
          lineSymbol={<VisibilityOutlinedIcon />}
          lineTitle={"Network"}
          counterNumber={props.repoData.network_count}
          showDivider={false}
        />
        <div
          style={{
            height: "25px",
          }}
        ></div>
        <div onClick={handleClick}>
          <BookmarksButton />
        </div>
      </div>
      <div
        style={{
          height: "60px",
        }}
      ></div>
    </SidePanelCard>
  );
};

export default RepoSideBar;
