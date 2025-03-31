import Link from 'next/link';
import { Heading, Text, VStack, Stack, HStack, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function ProjectPreview({ project }) {
  const { title, description, url, status } = project;

  return (
    <VStack gap='2' alignItems={'start'} w={'100%'} borderBottom={'1px solid #eee'} py='6'>
      <Stack flexDir='row' alignItems={'center'} justifyContent={'center'} gap='1' fontWeight={500}>
        <HStack alignItems={'center'} justifyContent={'center'}>
          <MotionBox
            w={'10px'}
            h={'10px'}
            borderRadius='full'
            bg={status === 'active' ? 'green.500' : 'gray.300'}
            animate={
              status === 'active'
                ? {
                    opacity: [1, 0.6, 0],
                    scale: [1, 1.2, 1.4],
                  }
                : {}
            }
            transition={
              status === 'active'
                ? {
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }
                : {}
            }
          />
          <Heading as='h3' fontSize='16px' fontWeight={600}>
            {title}
          </Heading>
        </HStack>
        <Text opacity={0.35}>-</Text>
        {url?.href ? (
          <Link href={url?.href} target={url?.target}>
            <Heading
              as='h4'
              fontSize='16px'
              fontWeight={400}
              textUnderlineOffset={4}
              textDecoration='underline'
              textDecorationColor='gray.300'
            >
              Github
            </Heading>
          </Link>
        ) : (
          <Heading as='h4' fontSize='16px' fontWeight={400}>
            {company}
          </Heading>
        )}
      </Stack>
      <Text fontSize='14px' opacity='.85'>
        {description}
      </Text>
    </VStack>
  );
}
