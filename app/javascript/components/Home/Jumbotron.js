import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.section`
    background-color: #d74234;
    min-height: 550px;
    padding: 100px 0;
    color: #fff;
`
const H1 = styled.h1`
    color: #fff
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
`

const Jumbotron = () => {
    return (
        <Section className="home-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <H1>React Rails</H1>
                            <p>
                                Lets use the React components with Rails. With updates automatically loaded.
                            </p>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/B0SxxHAImhc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                            
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Jumbotron;