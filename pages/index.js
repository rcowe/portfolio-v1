import Head from 'next/head';
import styled from 'styled-components';
import Typing from '../components/Typing';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 5rem;
  font-weight: 900;
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Hero>
                <Heading>Hi, I'm Rosa</Heading>
                <h1> I am a </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                    <Typing/>
                </div>
            </Hero>
        </>
    );
}
