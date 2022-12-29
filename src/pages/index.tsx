import Image from 'next/image';
import {
  Link as ChakraLink,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  Text,
  Box,
  Flex,
  VStack,
  HStack,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
} from '@chakra-ui/react';

import Navbar from '../components/Layout/Navbar';
import Container from '../components/Layout/Container';

import Hero from '../components/Hero/';
import Title from '../components/Title';
import ProjectPreview from '../components/ProjectPreview';
import ArticlePreview from '../components/ArticlePreview';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Sallet.app',
      description: 'Wallet non-custodial para ETH',
      tags: ['NextJS', 'ChakraUI', 'EthersJS'],
      background: '#9FDBA5',
      url: '#',
      image: {
        url: 'sallet.png',
        size: 'cover',
      },
    },
    {
      id: 2,
      title: 'Upload image',
      description: 'dApp para subir y compartir imagenes',
      tags: ['NextJS', 'IPFS'],
      background: '#fff',
      url: '#',
      image: {
        url: 'upload.png',
        size: 'cover',
      },
    },
    {
      id: 3,
      title: 'MozzoTattoo',
      description: 'Sitio web para artista del tatuaje',
      tags: ['UI', 'ParcelJS', 'GSAP'],
      background: '#fff',
      url: '#',
      image: {
        url: 'mozzo.png',
        size: 'contain',
      },
    },
    {
      id: 4,
      title: 'Mariano Flores',
      description: 'Sitio web para estudio de arquitectura',
      tags: ['UI', 'Wordpress', 'Template custom'],
      background: '#fff',
      url: '#',
      image: {
        url: 'mariano.png',
        size: 'cover',
      },
    },
  ];

  const articles = [
    {
      id: 1,
      title: 'Web 3.0: la guía completa para entender cómo funciona',
      url: '#',
      image: {
        url: 'web3.png',
      },
    },
    {
      id: 2,
      title: 'Bitcoin, accesibilidad e inclusión',
      url: '#',
      image: {
        url: 'bitcoin.png',
      },
    },
  ];

  return (
    <>
      <Navbar />

      <Hero />

      {/* Projects */}
      <Box mb='100px'>
        <Container>
          <Title as='h2' text='Proyectos' subtitle='Projects' />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mt='40px'>
            {projects.map((project) => (
              <ProjectPreview project={project} key={project.id} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Articles */}
      <Flex mb='100px'>
        <Container>
          <Title as='h2' text='Artículos' subtitle='Articles' />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mt='40px'>
            {articles.map((article) => (
              <ArticlePreview article={article} key={article.id} />
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </>
  );
}
