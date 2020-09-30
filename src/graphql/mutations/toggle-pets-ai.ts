import gql from 'graphql-tag';
import {useMutation} from "@apollo/react-hooks";

const TOGGLE_PETS_AI = gql`
  mutation TogglePetsAI {
    togglePetsAI
  }
`;

const useTogglePetsAI = () => {
  return useMutation<{}, {}>(TOGGLE_PETS_AI);
};

export {useTogglePetsAI};
