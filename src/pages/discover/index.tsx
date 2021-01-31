import React from "react";
import Sections from "../../components/Section/Sections";
import {
  tempDataPostsMD,
  tempDataPostsLG,
} from "../../assets/tempData/TempPostsData";
import Posts from "../../components/Post/Posts";
import Apps from "../../components/App/Apps";
import { useGetAppsListQuery, AppsNode } from "./GetAppsList.generated";
import Loading from "../../components/FetchingStates/Loading";
const Discover = () => {
  const { data, loading, error } = useGetAppsListQuery({
    variables: {
      page: 1,
    },
  });
  if (error) {
    return <div>ERROR</div>;
  }
  if (loading || !data) {
    return <Loading />;
  }
  return (
    <div className="h-full bg">
      <Sections border={false}>
        <Posts.lg data={tempDataPostsLG} />
      </Sections>
      <Sections border={true}>
        <Posts.md data={tempDataPostsMD} />
      </Sections>
      <Sections border={true} title="Editors Choice">
        <Apps.md data={data?.appsList as AppsNode[]} />
      </Sections>
      <Sections border={true} title="Do more with MacOs bigSur">
        <Posts.sm data={tempDataPostsMD} />
      </Sections>
    </div>
  );
};

export default Discover;
