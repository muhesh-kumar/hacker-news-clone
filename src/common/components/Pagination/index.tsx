import PageBtn from '@elements/PageBtn';

import { useNewsStore } from '@utils/store';

const Pagination = () => {
  const currentPageNumber = useNewsStore((state) => state.currentPageNumber);
  const totalNumberOfPages = useNewsStore((state) => state.totalNumberOfPages);
  const setCurrentPageNumber = useNewsStore(
    (state) => state.setCurrentPageNumber,
  );

  const goToPreviousPage = () =>
    setCurrentPageNumber(Math.max(0, currentPageNumber - 1));

  const goToNextPage = () =>
    setCurrentPageNumber(
      Math.min(totalNumberOfPages - 1, currentPageNumber + 1),
    );

  const goToPage = (pageNumber: number) => setCurrentPageNumber(pageNumber);

  const pageBtns = [];
  for (
    let pageNumber = currentPageNumber;
    pageNumber <= Math.min(totalNumberOfPages - 1, currentPageNumber + 4);
    pageNumber++
  ) {
    pageBtns.push(
      <PageBtn
        handleClick={() => goToPage(pageNumber)}
        btnText={pageNumber}
        isHighlighted={pageNumber === currentPageNumber}
      />,
    );
  }

  return (
    <div className="flex gap-3">
      <PageBtn btnText="prev" handleClick={goToPreviousPage} />
      {pageBtns}
      {currentPageNumber != totalNumberOfPages - 1 && (
        <PageBtn btnText="next" handleClick={goToNextPage} />
      )}
    </div>
  );
};

export default Pagination;
