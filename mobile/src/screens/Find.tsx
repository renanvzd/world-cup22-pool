import React from "react";
import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por codigo" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontre um bolao atraves de {'\n'}
          seu codigo unico
        </Heading>

        <Input
          mb={2}
          placeholder="Qual codigo do bolao?"
        />

        <Button
          title="BUSCAR BOLAO"
        />
      </VStack>
    </VStack>
  )
}