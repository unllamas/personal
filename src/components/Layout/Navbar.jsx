import { Flex } from '@chakra-ui/react';

import Container from './Container';

import Logo from '../UI/Logo';

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
        <Logo />
      </Container>
    </Flex>
  );
}
