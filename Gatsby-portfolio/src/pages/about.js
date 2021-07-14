import React from 'react';
import roadBg from '../images/aboutBackground.jpg';
import { graphql } from 'gatsby';
import NavBar from '../components/NavBar';
import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from "@sanity/image-url";

const urlFor = source =>
    urlBuilder({
        projectId: 'pa57wlth',
        dataset: 'production'
    }).image(source);


// const serializer = {
//     types: {
//         mainImage: props => (
//             <img
//                 src={urlFor(props.node.asset)
//                     .width(600)
//                     .url()}
//                 alt={props.node.name}
//             />
//         )
//     }
// };

const serializer = {
    types: {
        text: (props) => <span>{props.node.bio}</span>
    },
}

export const query = graphql`
query {
    allSanityAuthor {
        edges {
            node {
                _rawBio
                name
                slug {
                    current
                }
                image {
                    asset {
                      url
                    }
                }
            }
        }
    }
}`

const About = ({ data }) => {
    console.log(serializer)
    return (
        <NavBar>
            <main className="about-head">
                <img src={roadBg} alt="Road" className="about-bg" />
                <div className="about-card container">
                    {data.allSanityAuthor.edges.map(({ node, index }) => (
                        <section className="about-section">
                            <img src={node.image.asset.url} className="about-profile" />
                            <div className="about-text" key={index}>
                                <h1 className="cursive about-text-head"> Hey there. I'm{" "}
                                    <span className="about-text-name">{node.name}</span></h1>
                                {/* {node.bio.map(({ children, index }) => ( */}
                                <div className="about-text-detail" key={index}>
                                    <BlockContent blocks={node._rawBio} serializers={serializer} />
                                </div>
                                {/* ))} */}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </NavBar>
    )
}

export default About
