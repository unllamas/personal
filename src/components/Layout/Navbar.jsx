import Link from 'next/link';
import { Flex, HStack, Button } from '@chakra-ui/react';

import Container from './Container';

import Logo from '../UI/Logo';
import Linkedin from '../Icons/Linkedin';
import Twitter from '../Icons/Twitter';
import Github from '../Icons/Github';

export default function Navbar() {
  return (
    <Flex
      py='20px'
      position='fixed'
      zIndex='10'
      top='0'
      w='100%'
      bg='rgba(255,255,255,.65)'
      backdropFilter='auto'
      backdropBlur='10px'
    >
      <Container>
        <HStack w={'100%'} justifyContent='space-between'>
          <Logo />
          <HStack>
            <Link href='https://www.linkedin.com/in/unllamas/' target='_blank'>
              <Button size='sm' colorScheme='gray' variant='ghost'>
                <Linkedin />
              </Button>
            </Link>
            <Link href='https://twitter.com/unllamas' target='_blank'>
              <Button size='sm' colorScheme='gray' variant='ghost'>
                <Twitter />
              </Button>
            </Link>
            <Link href='https://github.com/unllamas' target='_blank'>
              <Button size='sm' colorScheme='gray' variant='ghost'>
                <Github />
              </Button>
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Flex>
  );
}
