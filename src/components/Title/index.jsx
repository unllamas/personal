import { Heading, Box, Text } from '@chakra-ui/react';

export default function Title({ text, subtitle, as }) {
  return (
    <Box>
      <Text
        position='relative'
        zIndex={1}
        fontSize={{ base: '60px', md: '100px' }}
        fontWeight='bold'
        color='#f1f1f1'
        textTransform='uppercase'
        mb={{ base: '-50px', md: '-75px' }}
      >
        {subtitle}
      </Text>
      <Heading as={as} position='relative' zIndex={2}>
        {text}
      </Heading>
    </Box>
  );
}
