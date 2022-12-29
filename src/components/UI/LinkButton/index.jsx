import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

export default function LinkButton(props) {
  const { children } = props;

  return (
    <Link {...props} passHref>
      <Flex
        h='50px'
        w='50px'
        bg='#f1f1f1'
        justifyContent='center'
        alignItems='center'
        borderRadius='12px'
        _hover={{ backgroundColor: '#000', color: '#f1f1f1' }}
      >
        {children}
      </Flex>
    </Link>
  );
}
