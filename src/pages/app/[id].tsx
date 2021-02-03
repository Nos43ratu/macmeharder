import React from "react";
import { useRouter } from "next/router";
import Custom404 from "../404";
import {
  useGetAppQueryQuery,
  AppsNode,
  ImagesNode,
} from "../../generated/graphql";
import AppXl from "../../components/App/AppXl/AppXL";
import Sections from "../../components/Section/Sections";
import AppDescription from "../../components/App/AppDescription/AppDescription";
import Loading from "../../components/FetchingStates/Loading";
import AppImgPreviewNode from "../../components/App/AppImgPreview/AppImgPreviewNode";

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
  return (
    <div className="h-full w-full pt-16">
      <Sections border={false}>
        <AppXl app={data?.app as AppsNode} />
      </Sections>
      <Sections border={false}>
        <AppImgPreviewNode data={data?.app?.appImages as ImagesNode[]} />
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
