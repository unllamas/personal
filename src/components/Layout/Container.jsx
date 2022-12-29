import { Container as ContainerBox } from '@chakra-ui/react';

export default function Container(props) {
  const { children } = props;

  return (
    <ContainerBox maxW='850px' {...props}>
      {children}
    </ContainerBox>
  );
}
