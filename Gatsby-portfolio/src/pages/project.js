import React from 'react';
import { Link, graphql } from 'gatsby';
import NavBar from '../components/NavBar';

export const query = graphql`
query {
    allSanityProject {
          edges {
              node {
                  title
                  description
                  author {
                      name
                      image {
                          asset {
                              url
                          }
                      }
                  }
                  slug {
                      current
                  }
                  ProjectType
                  tags
                  link
              }
          }
      }
  }
`

const Project = ({ data }) => {
    return (
        <NavBar>
            <main className="project">
                <section className="project-head container">
                    <h1 className="project-h1 cursive">My Projects</h1>
                    <h2 className="project-h2">Welcome to My Projects Page!</h2>
                    <section className="projects">
                        {data === undefined ? "No Project" :
                            data.allSanityProject.edges.map(({ node, index }) => (
                                <article className="project-detail">
                                    <h3 className="project-heading font-bold">
                                        <Link to={node.link} target="_blank" alt={node.title}>{node.title}</Link></h3>
                                    <div className="project-type">
                                        <div className="type">
                                            <strong className="font-bold">Type</strong>:{" "}{node.ProjectType}
                                        </div>
                                        <div className="type">
                                            <strong className="font-bold">Skills</strong>:{" "}{node.tags.join(", ")}
                                        </div>
                                        <p className=" desc">{node.description}</p>
                                        <Link to={node.link} target="_blank" className="project-link font-bold">View the Project</Link>{" "}<span className="right-pointer" role="img" aria-label="right pointer">👉</span>
                                    </div>
                                </article>
                            ))
                        }
                    </section>
                </section>
            </main>
        </NavBar>
    )
}

export default Project
