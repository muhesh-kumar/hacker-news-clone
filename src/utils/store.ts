import create from 'zustand';

type NewsStore = {
  currentPageNumber: number;
  totalNumberOfPages: number;

  setCurrentPageNumber: (newPageNumber: number) => void;
  setTotalNumberOfPages: (newTotal: number) => void;
};

// TODO: for select options, give only those values which are possible
type SearchStore = {
  searchText: string;
  searchCategory: string;
  searchByOption: string;
  searchTimeRangeOption: string;

  setSearchText: (value: string) => void;
  setSearchCategory: (value: string) => void;
  setSearchByOption: (value: string) => void;
  setSearchTimeRangeOption: (value: string) => void;
};

export const useNewsStore = create<NewsStore>((set) => ({
  currentPageNumber: -1,
  totalNumberOfPages: 1,

  setCurrentPageNumber: (newPageNumber: number) =>
    set(() => ({
      currentPageNumber: newPageNumber,
    })),

  setTotalNumberOfPages: (newTotal: number) =>
    set(() => ({
      totalNumberOfPages: newTotal,
    })),
}));

export const useSearchStore = create<SearchStore>((set) => ({
  searchText: '',
  searchCategory: 'story',
  searchByOption: 'popularity',
  searchTimeRangeOption: 'all-time',

  setSearchText: (text: string) =>
    set(() => ({
      searchText: text,
    })),

  setSearchCategory: (category: string) =>
    set(() => ({
      searchCategory: category,
    })),

  setSearchByOption: (option: string) =>
    set(() => ({
      searchByOption: option,
    })),

  setSearchTimeRangeOption: (option: string) =>
    set(() => ({
      searchTimeRangeOption: option,
    })),
}));
