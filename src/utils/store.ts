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
  currentPageNumber: 0, // the first time when the browser loads the homepage it should display news from hacker news front page
  totalNumberOfPages: 2, // hacky fix to make sure that we go to next page from front page and not go till total number of pages existing in the next set pages

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
