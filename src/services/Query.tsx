export type Filter<T> = {
  name?: T;
  surname?: T;
  position?: T;
};

export class Query {
  getQueryStringFromObject = (filter: Filter<string>) => {
    return new URLSearchParams(filter).toString();
  };

  getObjectFromQueryString = (search: string) => {
    const paramsEntries = new URLSearchParams(search).entries();
    return Object.fromEntries(paramsEntries);
  };

  getQueryFilters() {
    const { search } = window?.location;
    return this.getObjectFromQueryString(search);
  }

  getAll() {
    return window?.location.pathname + window?.location.search;
  }
  getPath() {
    return window?.location.pathname;
  }

  updateQueryStringParameter(filter: Filter<string | null>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.keys(filter).map((i) => {
      const name = i as keyof typeof filter;
      const value = filter[name];

      if (value !== null) {
        searchParams.set(i, value || "");
      } else {
        searchParams.delete(i);
      }
    });

    const newUrl = window.location.pathname + "?" + searchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  }
}
