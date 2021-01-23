import React from 'react'

import {
    Layout,
    Link,
    Logo,
    Paragraph,
    SubTitle,
    Title,
} from '../components';

const Home = () => (
    <Layout>
        <Title>
            IROV
        </Title>

        <Logo
            alt=""
            src="/resistance_key.svg"
        />

        <SubTitle>
            Ingress Resistance Oslo & Viken
        </SubTitle>

        <Paragraph>
            Du finner oss på <Link
                href="https://discord.gg/JxTDKWRZrn"
            >
                discord
            </Link>!
        </Paragraph>

    </Layout>
);

export default Home
