import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import styled from "styled-components";

const Title = styled.h1`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.purple[500]},
    ${(props) => props.theme.pink[500]}
  );
  background-size: 100;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 6rem;
`;

const Center = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

interface IProps {
  title: string;
  description: string;
  image: string;
}

const Home: NextPage<IProps> = (props) => {
  const { title, description, image } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://planegazers.com" property="og:url" />
        <meta content={`${image}`} property="og:image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center>
        <Title>{title}</Title>

        <p>
          <strong>FullStack Developer | Frontend Focused </strong>
          .<br />
          {description}.
        </p>
      </Center>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      title: "Rafael Angonese",
      description: "An FullStack developer focused on frontend",
      image: "",
    },
  };
};
