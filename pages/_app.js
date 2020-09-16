import App from "next/app";
// import { ApolloProvider } from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import Page from "../components/Page";
import withData from "../lib/withData";
import { CartStateProvider } from "../components/LocalState";
import "../dist/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <ApolloHooksProvider client={apollo}>
          <CartStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </CartStateProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
