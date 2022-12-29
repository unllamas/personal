import Link from 'next/link';
import { Heading, Box, VStack, LinkBox, LinkOverlay } from '@chakra-ui/react';

import Arrow from '../Icons/Arrow';

export default function ArticlePreview({ article }) {
  const { image, url, title } = article;

  return (
    <LinkBox as='article' position='relative' role='group'>
      <VStack gap='10px'>
        <Box
          backgroundImage={`/articles/${image.url}`}
          backgroundPosition='center'
          backgroundSize='cover'
          backgroundRepeat='no-repeat'
          w='100%'
          h='100%'
          minH='250px'
          maxH='250px'
          position='relative'
          borderRadius='12px'
          overflow='hidden'
        >
          <Box position='absolute' right='20px' top='20px'>
            <LinkOverlay
              href={url}
              h='50px'
              w='50px'
              borderRadius='12px'
              border='1px solid #eee'
              bg='#fff'
              display='none'
              justifyContent='center'
              alignItems='center'
              _groupHover={{ display: 'flex' }}
            >
              <Arrow />
            </LinkOverlay>
          </Box>
        </Box>
        <Box px='10px'>
          <Heading as='h3' fontSize='22px'>
            <Link href={url}>{title}</Link>
          </Heading>
        </Box>
      </VStack>
    </LinkBox>
  );
}
