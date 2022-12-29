import { Flex, Heading, Text, Box, HStack, VStack } from '@chakra-ui/react';

import Title from '../Title';
import Container from '../Layout/Container';
import LinkButton from '../UI/LinkButton';

import Linkedin from '../Icons/Linkedin';
import Twitter from '../Icons/Twitter';
import Github from '../Icons/Github';
import Coffee from '../Icons/Coffee';
import DrinkACoffee from '../Icons/DrinkACoffee';

export default function Hero() {
  return (
    <Flex justifyContent='flex-start' h='100vh' alignItems='center'>
      <Container>
        <Box maxW='470px'>
          <VStack gap='10px'>
            <Title as='h1' text='Hola, soy Jonathan Llamas. Front-end Web3 Developer' subtitle='About' />
            <Text opacity='.65' fontSize='18px'>
              Con un variado backgrund en diferentes áreas en tecnología, hoy me encuentro{' '}
              <strong>desarrollando e investigando sobre software localfirst</strong>.
            </Text>
          </VStack>

          <Box mt='40px'>
            <Heading as='h3' fontSize='18px'>
              Conectamos?
            </Heading>
            <HStack position='relative' display='inline-flex' mt='10px'>
              <LinkButton href='/'>
                <Linkedin />
              </LinkButton>
              <LinkButton href='/'>
                <Twitter />
              </LinkButton>
              <LinkButton href='/'>
                <Github />
              </LinkButton>
              <LinkButton href='/'>
                <Coffee />
              </LinkButton>
              <Box position='absolute' left='100%' top='0'>
                <DrinkACoffee />
              </Box>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
}
