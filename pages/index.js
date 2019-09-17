/*eslint-disable*/
import React, { Component, Fragment } from "react";
import axios from "axios";
import _ from "lodash";
import Hero from "./partials/hero";
import Teaser from "./partials/teaser";
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
      .then(response => {

        const {
          data: {
            data: {
              getObjects
            }
          }
        } = response;

        const cosmic = {
          posts: _.filter(getObjects, {
            type_slug: "posts"
          }),
          global: _.keyBy(
            _.filter(getObjects, { type_slug: "globals" }),
            "slug"
          )
        };
        console.log(cosmic);
        return cosmic;

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    console.log(this.props);

    const { global, posts } = this.props;

    if (!global) {
      return <div className="flash">Loading</div>;
    }

    const {
      hero
    } = global;

    return (
      <Layout cosmic={this.props}>
        <Hero cosmic={hero} />
        {
          posts.map(post => {
            return (<Teaser post={post}/>)
          })
        }

      </Layout>
    );
  }
}
