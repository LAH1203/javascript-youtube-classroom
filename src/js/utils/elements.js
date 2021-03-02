const $ = (selector) => {
  const selected = document.querySelectorAll(selector);
  return selected.length === 1 ? selected[0] : selected;
};

const elements = {
  $searchForm: $("#search-form"),
  $searchResults: $("#search-results"),
  $notFound: $("#not-found"),
};

export default elements;
