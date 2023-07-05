import { Image, Heading, Text, Box, HStack, LinkOverlay, Stack, VStack } from '@chakra-ui/react';

import Arrow from '../Icons/Arrow';

export default function JobPreview({ job }) {
  const { image, company, date, title, description, url, background } = job;

  return (
    <Box
      position='relative'
      role='group'
      w='100%'
      transitionDuration='.4s'
      borderRadius='8px'
      overflow='hidden'
      bg='#fafafa'
      _hover={{
        background: '#fff',
        boxShadow: '0 18px 20px 0px rgba(45, 45, 45, .05)',
        zIndex: 2,
        transform: 'translateY(-10px)',
      }}
    >
      <Box p={{ base: '20px', md: '40px' }} border='1px solid #eee' borderRadius='8px'>
        <VStack alignItems='start' gap={{ base: '10px', md: '20px' }} key={job?.id}>
          <HStack justifyContent={'space-between'} alignItems={'flex-start'} w='100%'>
            <HStack alignItems={'flex-start'}>
              {image?.url && (
                <Box w='50px' h='50px' borderRadius='4px' overflow='hidden' bg={background} border='1px solid #eee'>
                  <Image src={`/jobs/${image?.url}.jpeg`} />
                </Box>
              )}
              <Box>
                {job?.title && (
                  <Heading as='h3' fontSize={{ base: '18px', md: '22px' }}>
                    {title}
                  </Heading>
                )}
                <Stack flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 0, md: '8px' }}>
                  {company && <Text>{company}</Text>}
                  <Text display={{ base: 'none', md: 'block' }} mt={'0 !important'} opacity={0.35}>
                    -
                  </Text>
                  <HStack mt={'0 !important'} opacity={0.65}>
                    {date?.start && <Text>{date?.start}</Text>}
                    <Text>/</Text>
                    <Text>{date?.ending ? date?.ending : 'Presente'}</Text>
                  </HStack>
                </Stack>
              </Box>
            </HStack>

            {url?.href && (
              <LinkOverlay
                href={url?.href}
                target={url?.target}
                tabIndex={0}
                display='flex'
                justifyContent='center'
                alignItems='center'
                minH='50px'
                minW='50px'
                bg='#fff'
                borderRadius='12px'
                border='1px solid #eee'
              >
                <Arrow />
              </LinkOverlay>
            )}
          </HStack>
          {description && <Text>{description}</Text>}
        </VStack>
      </Box>
    </Box>
  );
}
