import { Client } from 'presentation/shared/Clients/models/Client';
import { useClientsListData } from 'ui/Clients/Admin/Clients/components/ClientsList/clientsList.data';

type UseClientsList = {
  clients: Client[];
};

/** @scope src/ui/Clients/Admin/Clients/components/ClientsList */
export const useClientsList = async (): Promise<UseClientsList> => {
  const { getClients } = useClientsListData();

  const clients = await getClients();

  return {
    clients,
  };
};
