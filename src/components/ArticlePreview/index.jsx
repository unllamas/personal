import Link from 'next/link';
import { Heading, Box, VStack, LinkBox, LinkOverlay, HStack } from '@chakra-ui/react';

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
        />
        <HStack alignItems='flex-start' justifyContent='space-between' px='10px' w='100%' gap='20px'>
          <Heading as='h3' fontSize='22px' _groupHover={{ textDecoration: 'underline' }}>
            <Link href={url?.href} target={url?.target}>
              {title}
            </Link>
          </Heading>

          <Box>
            <LinkOverlay
              href={url?.href}
              target={url?.target}
              tabIndex={-1}
              opacity={{ base: 1, md: 0 }}
              h='50px'
              w='50px'
              borderRadius='12px'
              border='1px solid #eee'
              bg='#fff'
              display='flex'
              justifyContent='center'
              alignItems='center'
              transitionDuration='.4s'
              _groupHover={{ opacity: 1 }}
            >
              <Arrow />
            </LinkOverlay>
          </Box>
        </HStack>
      </VStack>
    </LinkBox>
  );
}
