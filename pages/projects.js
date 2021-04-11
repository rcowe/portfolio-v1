import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>
                <Heading>PROJECTS</Heading>
                <Card>

                </Card>
            </Hero>
        </>
    );
}