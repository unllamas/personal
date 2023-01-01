import { Heading, Text, Box, HStack, LinkBox, LinkOverlay, List, ListItem, VStack } from '@chakra-ui/react';

import Arrow from '../Icons/Arrow';

export default function ProjectPreview({ project }) {
  const { background, title, description, tags, url, image } = project;

  return (
    <LinkBox position='relative' role='group'>
      <Box
        position='relative'
        overflow='hidden'
        zIndex={1}
        px='20px'
        bg={background}
        border='1px solid #eee'
        borderRadius='12px'
        transitionDuration='.4s'
        _groupHover={{
          boxShadow: '0 20px 40px rgba(45, 45, 45, .15)',
          zIndex: 2,
          transform: 'translateY(-10px)',
        }}
      >
        <HStack position='relative' justifyContent='space-between' alignItems='flex-start' gap='20px' py='20px'>
          <Box tabIndex={0}>
            <Heading as='h3' fontSize='22px'>
              {title}
            </Heading>
            <Text fontSize='16px' opacity='.65'>
              {description}
            </Text>
          </Box>
          <LinkOverlay
            href={url?.href}
            target={url?.target}
            tabIndex={-1}
            opacity={{ base: 1, md: 0 }}
            display='flex'
            justifyContent='center'
            alignItems='center'
            minH='50px'
            minW='50px'
            bg='#fff'
            borderRadius='12px'
            border='1px solid #eee'
            transitionDuration='.4s'
            _groupHover={{ opacity: 1 }}
          >
            <Arrow />
          </LinkOverlay>
          <Box position='absolute' top='100%' left='0' ml='0 !important' mt='-10px !important' w='100%'>
            <List
              opacity={{ base: 1, md: 0 }}
              display='flex'
              gap='4px'
              m='0'
              transitionDuration='.4s'
              _groupHover={{ opacity: 1 }}
            >
              {tags?.map((tag, key) => (
                <ListItem
                  key={key}
                  p='2px 8px'
                  bg='rgba(51,51,51,.65)'
                  backdropFilter='auto'
                  backdropBlur='10px'
                  borderRadius='12px'
                  color='#f1f1f1'
                  whiteSpace='nowrap'
                >
                  {tag}
                </ListItem>
              ))}
            </List>
          </Box>
        </HStack>
        <Box
          w='100%'
          h='100%'
          minH='300px'
          backgroundImage={`url(/projects/${image.url})`}
          backgroundPosition='center'
          backgroundSize={image.size}
          backgroundRepeat='no-repeat'
        />
      </Box>
    </LinkBox>
  );
}
