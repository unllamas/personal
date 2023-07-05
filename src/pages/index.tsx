import Head from 'next/head';
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
import JobPreview from '../components/JobPreview';

import projects from '../../data/projects.json';
import articles from '../../data/articles.json';
import jobs from '../../data/jobs.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Llamas</title>
      </Head>
      <Navbar />

      <Hero />

      {/* Experience */}
      <Flex mb='100px'>
        <Container>
          <Title as='h2' text='Experiencia' subtitle='Experience' />
          <VStack gap='20px' mt='40px'>
            {jobs?.length && jobs?.reverse().map((job) => <JobPreview job={job} key={job?.id} />)}
          </VStack>
        </Container>
      </Flex>

      {/* Projects */}
      <Box mb='100px'>
        <Container>
          <Title as='h2' text='Proyectos' subtitle='Projects' />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mt='40px'>
            {projects?.reverse().map((project) => (
              <ProjectPreview project={project} key={project?.id} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Articles */}
      <Flex mb='100px'>
        <Container>
          <Title as='h2' text='Artículos' subtitle='Articles' />
          <SimpleGrid columns={{ base: 1, md: 2 }} gap='20px' mt='40px'>
            {articles?.map((article) => (
              <ArticlePreview article={article} key={article?.id} />
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
    </>
  );
}
