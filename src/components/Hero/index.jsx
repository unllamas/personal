import Link from 'next/link';
import { Flex, Text, Box, HStack, VStack, Button } from '@chakra-ui/react';

import Title from '../Title';
import Container from '../Layout/Container';
import DrinkACoffee from '../Icons/DrinkACoffee';

export default function Hero() {
  return (
    <Flex justifyContent='flex-start' h='100vh' alignItems='center'>
      <Container>
        <Box maxW='470px'>
          <VStack gap='10px'>
            <Title as='h1' text='Hola, soy Jonathan Llamas.' subtitle='About' />
            <Text opacity='.65' fontSize='18px'>
              Con un variado background en diferentes áreas en tecnología, hoy me encuentro{' '}
              <strong>desarrollando e investigando sobre software localfirst</strong>.
            </Text>
          </VStack>

          <Box mt='40px'>
            <HStack position='relative' display='inline-flex' mt='10px'>
              <Link href='https://calendly.com/unllamas' target='_blank'>
                <Button flexDirection={'row'} colorScheme='green' gap='2'>
                  Conectemos ahora
                </Button>
              </Link>
              <Box position='absolute' left='100%' top='-4px'>
                <DrinkACoffee />
              </Box>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
}
