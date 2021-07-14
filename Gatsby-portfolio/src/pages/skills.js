import React from 'react';
// import './skills.css'
import NavBar from '../components/NavBar';
import { graphql } from 'gatsby';

export const query = graphql`
query {
    allSanitySkills {
        edges {
          node {
            skills
          }
        }
      }
  }
  `

const skills = ({ data }) => {
    return (
        <NavBar>
            <main className="skills">
                <section className="skills-head container">
                    <h1 className="skills-h1 cursive">My Skills</h1>
                    <h2 className="skills-h2">Welcome to My Skills Page!</h2>
                    <section className="skill-set">
                        {data.allSanitySkills.edges.map(({ node }) => (
                            node.skills.map((skill, index) => (
                                <article className="skill-detail" key={index}>
                                    <div className="skill-name">
                                        {skill}
                                    </div>
                                </article>
                            ))
                        ))}
                    </section>
                </section>
            </main>
        </NavBar>
    )
}

export default skills
