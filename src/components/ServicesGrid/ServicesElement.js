import React from "react";
import "./ServicesElement.css";
import ItalicButton from "../../elements/ItalicButton/ItalicButton";
import { useTranslation } from "react-i18next";

export default function ServicesElement({ title, text, path }) {
  const { t } = useTranslation("home");
  return (
    <div className="services-element">
      <h4>{title.toUpperCase()}</h4>
      <p>{text}</p>
      <ItalicButton path={path} string={t("about_btn")} />
    </div>
  );
}
