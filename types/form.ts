export  type Form = {
  id: number;
  ownerId: string;
  published: boolean;
  content: any;
  submissions: number;
  shareUrl: string;
};

export type Fields = {
  name?: string;
  label?: string;
  placeholder?: string;
};

export type Content = {
  formTitle: string;
  formFields: Fields[];
};
