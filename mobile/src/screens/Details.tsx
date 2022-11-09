import React, { useEffect, useState } from "react";
import { useToast, VStack } from "native-base";
import { useRoute } from '@react-navigation/native';

import { api } from "../services/api";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { PoolCardProps } from '../components/PoolCard';
import { PoolHeader } from "../components/PoolHeader";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";

interface RouteParams {
  id: string;
}

export function Details() {
  const [isLoading, setIsLoading] = useState(false)
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps)
  const toast = useToast();

  const route = useRoute();
  const { id } = route.params as RouteParams

  async function fetchPoolsDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/pools/${id}`)
      // console.log(response.data.pool.participants)
      setPoolDetails(response.data.pool);
    } catch (error) {
      console.log(error);

      toast.show({
        title: 'Nao foi possivel carregar os detalhes boloes',
        placement: 'top',
        bgColor: 'red.500'
      });

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPoolsDetails();
  }, [id])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title={id} showBackButton showShareButton />

      {
        poolDetails._count?.participants > 0 ?
          <VStack px={5} flex={1}>
            <PoolHeader data={poolDetails} />
          </VStack>
          : <EmptyMyPoolList code={poolDetails.code} />
      }
    </VStack>
  );
}