import React, { useState } from "react";
import { Heading, useToast, VStack } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Find() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('')

  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool() {
    try {
      setIsLoading(true)

      if (!code.trim()) {
        return toast.show({
          title: 'Informe o codigo',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      await api.post('/pools/join', { code });

      toast.show({
        title: 'Voce entrou no bolao com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      });

      navigate('pools')

    } catch (error) {
      console.log(error)
      setIsLoading(false)

      if (error.response?.data?.message === 'Pool not found') {
        return toast.show({
          title: 'Bolao nao encontrado',
          placement: 'top',
          bgColor: 'red.500'
        });
      }
      if (error.response?.data?.message === 'You already joined this poll') {
        return toast.show({
          title: 'Voce ja esta nesse bolao',
          placement: 'top',
          bgColor: 'red.500'
        });
      }

      toast.show({
        title: 'Nao foi possivel encontrar o bolao',
        placement: 'top',
        bgColor: 'red.500'
      });


    } finally {
      setIsLoading(false)
    }
  }

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
          autoCapitalize="characters"
          onChangeText={setCode}
        />

        <Button
          title="BUSCAR BOLAO"
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  )
}