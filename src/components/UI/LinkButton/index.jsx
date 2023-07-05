import Link from 'next/link';
import { Heading, Box, VStack, LinkBox, LinkOverlay, HStack } from '@chakra-ui/react';

export default function LinkButton(props) {
  const { children } = props;

  return (
    <LinkBox>
      <LinkOverlay
        tabIndex={0}
        display='flex'
        justifyContent='center'
        alignItems='center'
        minH='50px'
        minW='50px'
        bg='#f1f1f1'
        borderRadius='12px'
        border='1px solid #eee'
        {...props}
        _hover={{ backgroundColor: '#000', color: '#f1f1f1' }}
      >
        {children}
      </LinkOverlay>
    </LinkBox>
  );
}
