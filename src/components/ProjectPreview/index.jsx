import { Heading, Text, Box, HStack, LinkBox, LinkOverlay, List, ListItem } from '@chakra-ui/react';

import Arrow from '../Icons/Arrow';

export default function ProjectPreview({ project }) {
  const { background, title, description, tags, url, image } = project;

  return (
    <LinkBox
      position='relative'
      zIndex={1}
      borderRadius='12px'
      overflow='hidden'
      border='1px solid #eee'
      transitionDuration='1'
      _hover={{ boxShadow: '0 20px 40px rgba(45, 45, 45, .15)', zIndex: 2 }}
      role='group'
    >
      <Box bg={background} px='20px'>
        <HStack justifyContent='space-between' alignItems='flex-start' gap='20px' py='20px'>
          <Box>
            <Heading as='h3' fontSize='22px'>
              {title}
            </Heading>
            <Text fontSize='16px' opacity='.65'>
              {description}
            </Text>
            <List display='flex' mt='10px' gap='4px' opacity={{ base: 1, md: 0 }} _groupHover={{ opacity: 1 }}>
              {tags?.map((tag, key) => (
                <ListItem
                  key={key}
                  p='2px 8px'
                  whiteSpace='nowrap'
                  borderRadius='12px'
                  bg='rgba(51,51,51,.65)'
                  color='#f1f1f1'
                >
                  {tag}
                </ListItem>
              ))}
            </List>
          </Box>
          <LinkOverlay
            href={url?.href}
            target={url?.target}
            minH='50px'
            minW='50px'
            borderRadius='12px'
            border='1px solid #eee'
            bg='#fff'
            display={{ base: 'flex', md: 'none' }}
            justifyContent='center'
            alignItems='center'
            _groupHover={{ display: 'flex' }}
          >
            <Arrow />
          </LinkOverlay>
        </HStack>
        <Box
          backgroundImage={`url(/projects/${image.url})`}
          backgroundPosition='center'
          backgroundSize={image.size}
          backgroundRepeat='no-repeat'
          w='100%'
          h='100%'
          minH='300px'
        />
      </Box>
    </LinkBox>
  );
}
