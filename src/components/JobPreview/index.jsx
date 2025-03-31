import Link from 'next/link';
import { Heading, Text, Box, HStack, Stack, VStack } from '@chakra-ui/react';

export default function JobPreview({ job }) {
  const { company, date, title, description, url } = job;

  return (
    <Box
      overflow='hidden'
      position='relative'
      role='group'
      w='100%'
      py='6'
      borderBottom='1px solid #eee'
      transitionDuration='.4s'
    >
      <Box>
        <VStack alignItems='start' gap={'12px'} key={job?.id}>
          <HStack justifyContent={'space-between'} alignItems={'flex-start'} w='100%'>
            <HStack alignItems={'flex-start'}>
              <Box>
                <Stack flexDir='row' gap='1' fontWeight={500}>
                  {job?.title && (
                    <Heading as='h3' fontSize='16px' fontWeight={600}>
                      {title}
                    </Heading>
                  )}
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
                        {company}
                      </Heading>
                    </Link>
                  ) : (
                    <Heading as='h4' fontSize='16px' fontWeight={400}>
                      {company}
                    </Heading>
                  )}
                </Stack>
                <HStack gap='1' opacity={0.85} fontSize='14px'>
                  {date?.start && <Text>{date?.start}</Text>}
                  <Text>/</Text>
                  <Text>{date?.ending ? date?.ending : 'Presente'}</Text>
                </HStack>
              </Box>
            </HStack>
          </HStack>
          {description && (
            <Text fontSize={'14px'} opacity={0.85}>
              {description}
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
}
