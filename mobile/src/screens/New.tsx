import React from "react";
import { Heading, VStack, Text } from "native-base";
import Logo from '../assets/logo.svg'
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolao" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
          Crie seu proprio bolao da copa {'\n'}
          e compartilhe entre amigos!
        </Heading>

        <Input
          mb={2}
          placeholder="Qual nome do seu bolao?"
        />

        <Button
          title="CRIAR MEU BOLAO"
        />

        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          Apos criar seu bolao, voce recebera um codigo unico que podera usar para convidar outras pessoas
        </Text>

      </VStack>
    </VStack>
  )
}