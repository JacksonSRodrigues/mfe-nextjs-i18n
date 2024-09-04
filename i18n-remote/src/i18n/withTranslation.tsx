import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from ".";
import React from "react";

export function withTranslation(WrappedComponent: React.ComponentType<any>) {
  console.log("withTranslation is called");
  return class extends React.Component {
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <I18nextProvider i18n={i18n}>
          <WrappedComponent {...this.props} />
        </I18nextProvider>
      );
    }
  };
}

export default {
  withTranslation,
  useTranslation,
};
