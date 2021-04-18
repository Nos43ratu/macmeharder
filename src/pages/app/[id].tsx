import React from "react";
import AppXl from "../../components/lagacy/App/AppXl/AppXL";
import Sections from "../../components/lagacy/Section/Sections";
import AppDescription from "../../components/lagacy/App/AppDescription/AppDescription";
import AppImgPreviewNode from "../../components/lagacy/App/AppImgPreview/AppImgPreviewNode";
import { API, getApp } from "../../utils/getStaticData";
import AppHead from "../../components/appPage/appHead";
import AppScreenshots from "../../components/appPage/appScreenshots";

const AppPage = ({ app }) => {
  return (
    <div className="h-full w-full">
      <AppHead app={app} />
      <div className="px-2 py-2 lg:px-40 lg:py-16 relative">
        <Sections border={false}>
          <AppScreenshots data={app?.screenshots} />
        </Sections>
        <Sections>
          <AppDescription.text description={app?.description} />
        </Sections>
        <Sections title="Information">
          <AppDescription.info app={app} />
        </Sections>
      </div>
    </div>
  );
};
export default AppPage;

export async function getStaticPaths() {
  const res = await fetch(
    "http://macmeharder.com:8080/applications/?page=1&size=100"
  );
  const data = await res.json();
  const paths = [];
  data.map((app) => paths.push({ params: { id: app.id.toString() } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://macmeharder.com:8080/application/${params.id}`
  );
  const app = await res.json();
  return {
    props: { app },
  };
}
