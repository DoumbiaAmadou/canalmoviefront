import React, { FC, ReactElement } from "react";
import styles from "./V5Layout.module.scss";

interface V5LayoutProps {
  children?: ReactElement[];
}
interface V5LayoutType extends FC<V5LayoutProps> {
  ({ children }: V5LayoutProps): JSX.Element;
  TopMenu?: any;
  ContentArea: any;
}

const V5Layout: V5LayoutType = ({ children }: V5LayoutProps) => {
  const topMenu = children
    ?.filter((comp) => {
      return comp?.type === V5Layout.TopMenu;
    })
    .map((comp) => comp.props.children);

  const contentArea = children
    ?.filter((comp) => {
      return comp.type === V5Layout.ContentArea;
    })
    .map((comp) => comp.props.children);

  return (
    <div data-testid="V5Layout" className={styles.V5layout}>
      <div className="container">
        <div className="top_Menu"> {topMenu}</div>
        <div> {contentArea}</div>
      </div>
    </div>
  );
};
V5Layout.TopMenu = () => "TopMenu";
V5Layout.ContentArea = () => "ContentArea";

export default V5Layout;
