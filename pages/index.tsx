import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import NextLink from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <Flex direction="column" alignItems="center" padding="12rem">
      <Flex direction="column" alignItems="center" marginBottom="6rem">
        <Text fontSize="100px" fontWeight="800" textAlign="center">
          Best React conference 2022.
        </Text>
        <Text fontSize="3xl" fontWeight="600">
          Totally free too.
        </Text>
      </Flex>
      <NextLink href="/api/auth/login" passHref>
        <Link
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button
            backgroundColor="purple"
            color="white"
            size="lg"
            _hover={{
              backgroundColor: 'green',
            }}
          >
            Grab your ticket
          </Button>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default IndexPage;
