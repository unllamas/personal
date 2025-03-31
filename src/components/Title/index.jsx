import { Heading, Box, Text } from '@chakra-ui/react';

export default function Title({ text, subtitle, as, ...props }) {
  return (
    <Box position='relative' width={'100%'} {...props}>
      <Text
        zIndex={1}
        fontSize={{ base: '42px', md: '64px' }}
        fontWeight='bold'
        color='#f1f1f1'
        textTransform='uppercase'
      >
        {subtitle}
      </Text>
      <Heading as={as} w='100%' position='absolute' bottom={{ base: '8px', md: '18px' }} zIndex={2} fontSize={'22px'}>
        {text}
      </Heading>
    </Box>
  );
}
