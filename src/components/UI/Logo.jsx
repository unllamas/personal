import { useColorMode } from '@chakra-ui/react';

export default function Logo() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <svg width='50' height='30' viewBox='0 0 50 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M40 20H48.8571C49.4883 20 50 20.5117 50 21.1429V28.8571C50 29.4883 49.4883 30 48.8571 30H41.1429C40.5117 30 40 29.4883 40 28.8571V20Z'
        fill={isDark ? '#fff' : '#333'}
      />
      <path d='M30 10H40V20H31.1429C30.5117 20 30 19.4883 30 18.8571V10Z' fill={isDark ? '#fff' : '#333'} />
      <path
        d='M30 1.14286C30 0.511674 30.5117 0 31.1429 0H38.8571C39.4883 0 40 0.511675 40 1.14286V10H30V1.14286Z'
        fill={isDark ? '#fff' : '#333'}
      />
      <path
        d='M0 21.1429C0 20.5117 0.511675 20 1.14286 20H10V30H1.14286C0.511674 30 0 29.4883 0 28.8571V21.1429Z'
        fill={isDark ? '#fff' : '#333'}
      />
      <path d='M10 20H20V28.8571C20 29.4883 19.4883 30 18.8571 30H10V20Z' fill={isDark ? '#fff' : '#333'} />
      <path
        d='M10 1.14286C10 0.511674 10.5117 0 11.1429 0H18.8571C19.4883 0 20 0.511675 20 1.14286V10H10V1.14286Z'
        fill={isDark ? '#fff' : '#333'}
      />
      <path d='M10 10H20V20H10V10Z' fill={isDark ? '#fff' : '#333'} />
    </svg>
  );
}
