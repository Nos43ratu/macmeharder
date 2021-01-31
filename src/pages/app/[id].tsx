import React from "react";
import { useRouter } from "next/router";
import Custom404 from "../404";
import {
  useGetAppQueryQuery,
  AppsNode,
  ImagesNode,
} from "./GetAppQuery.generated";
import AppXl from "../../components/App/AppXL";
import Sections from "../../components/Section/Sections";
import Apps from "../../components/App/Apps";
import AppDescription from "../../components/App/AppDescription";
import Loading from "../../components/FetchingStates/Loading";

const AppPage = () => {
  const { data, loading, error } = useGetAppQueryQuery({
    variables: {
      id: `${useRouter().query.id}`,
    },
  });
  if (error) {
    return <Custom404 />;
  }
  if (loading || !data) {
    return <Loading />;
  }
  // console.log(data.app);
  return (
    <div className="h-full w-full pt-16">
      <Sections border={false}>
        <AppXl app={data?.app as AppsNode} />
      </Sections>
      <Sections border={false}>
        <Apps.imgPreview data={data?.app?.appImages as ImagesNode[]} />
      </Sections>
      <Sections>
        <AppDescription.text description={data?.app?.description} />
      </Sections>
      <Sections title="Information">
        <AppDescription.info app={data?.app as AppsNode} />
      </Sections>
    </div>
  );
};
export default AppPage;
