import React from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Keep Your Users Happy",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
    <>
     
    </>
    ),
  },
  {
    title: "Get More Users",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
         
      </>
    ),
  },
  {
    title: "Rapid Scaffolding and Recipes",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
