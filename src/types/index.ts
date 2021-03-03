import { Plan } from "types/Plans";

export interface Props {
  selectedPlanName: Plan["name"];
  subscriptionId: string;
  selectProduct: (name: string | null) => void;
  updateSubscription: (
    subscriptionId: string,
    selectedPlanName: string
  ) => void;
}
