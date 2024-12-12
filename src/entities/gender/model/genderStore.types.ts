export type GenderType = 'men' | 'women';

export interface IGenderStore {
  gender: GenderType;
  setGender: (gender: GenderType) => void;
}
