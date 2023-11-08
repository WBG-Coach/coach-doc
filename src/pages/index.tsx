import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import React from "react";
import { HomeHeader, HomeLogo } from "@site/static/img/home";

function HomepageHeader() {
  return (
    <img src={HomeHeader} height={"200px"} style={{ objectFit: "cover" }} />
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title={`Home`} description="Coach APP SL Documentation">
      <HomepageHeader />

      <img
        src={HomeLogo}
        style={{
          objectFit: "cover",
          width: "180px",
          alignSelf: "center",
          marginTop: "24px",
        }}
      />
    </Layout>
  );
}
