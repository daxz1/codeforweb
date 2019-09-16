/*eslint-disable*/
import React, { Component, Fragment } from "react";
import axios from "axios";
import _ from "lodash";
import Footer from "./partials/footer";
import Hero from "./partials/hero";
import helpers from "../helpers";
import config from "../config";
import Layout from "./layout";
import "./styles.scss";

export default class extends Component {
  static async getInitialProps({ req }) {
    const query = `{
      getObjects(bucket_slug: "${config.bucket.slug}", input: {
        read_key: "${config.bucket.read_key}"
      })
      {
        _id
        type_slug
        slug
        title
        metadata
        created_at
      }
    }`;
    return await axios
      .post("https://graphql.cosmicjs.com/v1", { query })
      .then(response => ({
        cosmic: {
          posts: _.filter(response.data.data.getObjects, {
            type_slug: "posts"
          }),
          global: _.keyBy(
            _.filter(response.data.data.getObjects, { type_slug: "globals" }),
            "slug"
          )
        }
      }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { cosmic } = this.props;

    if (!cosmic) {
      return <div>Loading</div>;
    }

    const {
      cosmic: {
        global: { hero }
      }
    } = this.props;

    return (
      <Layout cosmic={cosmic}>
        <Hero cosmic={hero} />
        <article>
          <h2>Some additional content</h2>
          <p>
            The rest of the page content continues below the hero. You can use
            the hero at the top of your page, e.g. the home page. A hero is
            great to display a high quality picture together with tasty title.
          </p>
          <p>
            Ad donec tincidunt torquent ultricies convallis sodales faucibus
            magna, fringilla lorem blandit sollicitudin donec faucibus curae
            orci molestie, et proin curae aliquet venenatis ligula amet vivamus
            orci varius arcu.
          </p>
          <p>
            Laoreet fusce condimentum venenatis quisque imperdiet ornare cras
            faucibus convallis, pharetra habitasse elementum ut bibendum per
            sociosqu phasellus etiam, velit faucibus integer torquent leo
            elementum maecenas netus.
          </p>
        </article>
      </Layout>
    );
  }
}
