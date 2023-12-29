export interface IIndex {
  id: number;
  headline?: string;
  indexs: {
    id: number;
    icon: React.ReactNode;
    title: string;
    action?: () => void;
    url?: string;
  }[];
}

export interface IChat {
  content: string;
  role: string;
}
