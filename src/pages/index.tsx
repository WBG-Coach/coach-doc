import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import React from "react";
import {
  HomeHeader,
  HomeLogo,
  Laptop,
  SourceCode,
  Tablet,
} from "@site/static/img/home";

function HomepageHeader() {
  return (
    <img src={HomeHeader} height={"200px"} style={{ objectFit: "cover" }} />
  );
}

const Docs = [
  {
    img: Tablet,
    label: "How to use Coach app",
    path: "/docs/intro",
  },
  {
    img: Laptop,
    label: "How to use Admin pannel",
    path: "",
  },
  {
    img: SourceCode,
    label: "Source code",
    path: "",
  },
];

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
          margin: "24px 0px",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          padding: "24px 0px",
          background: "#F2F4F7",
          gap: "40px",
        }}
      >
        {Docs.map((doc, key) => (
          <div
            key={key}
            style={{
              cursor: "pointer",
              display: "flex",
              width: "150px",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "white",
                width: "100%",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
              }}
            >
              <img
                src={doc.img}
                style={{
                  objectFit: "cover",
                  width: "70px",
                  alignSelf: "center",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                marginTop: "8px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              {doc.label}
            </h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
