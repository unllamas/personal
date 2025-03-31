import Link from 'next/link';
import { Heading, Box, VStack, LinkBox, LinkOverlay, HStack } from '@chakra-ui/react';

import Arrow from '../Icons/Arrow';

export default function ArticlePreview({ article }) {
  const { image, url, title } = article;

  return (
    <Link href={url?.href} target={url?.target} tabIndex={-1}>
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
          <Heading
            as='h3'
            fontSize='20px'
            textUnderlineOffset={4}
            textDecoration='underline'
            textDecorationColor='gray.300'
          >
            {title}
          </Heading>
        </HStack>
      </VStack>
    </Link>
  );
}
