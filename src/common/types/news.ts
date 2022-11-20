export type APINewsDataType = {
  id: number;
  created_at: string;
  author: string;
  title: string;
  url: string;
  text: string | null;
  points: number;
  parent_id: number;
  num_comments: number;
  children: APINewsDataType[];
};

export type APIResponse = {
  hits: APINewsDataType[];
  nbHits: number;
  nbPages: number;
  page: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: {
    nbHits: boolean;
    typo: boolean;
  };
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: {
    afterFetch: {
      total: number;
    };
    total: number;
  };
};

export type NewsDataType = {
  id: number;
  created_at: string;
  title: string;
  author: string;
  url: string;
  points: number;
  num_comments: number;
};
