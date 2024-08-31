---
title: "[react-query] 무한 스크롤 관련 예제"
---

# [react-query] 무한 스크롤 관련 예제

```jsx
import {
  useInfiniteQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Fragment } from "react";

function InfinitePage() {
  const fetchList = async ({ pageParam }) => {
    const data = Array.from({ length: 10 }, (_, i) => i + (pageParam - 1) * 10);
    return {
      data,
      page: pageParam,
      hasNext: pageParam < 10,
    };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["list"],
    queryFn: fetchList,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.page + 1 : undefined,
  });

  return (
    <div>
      <div>Current Page: {data?.page}</div>
      <div>
        {hasNextPage && (
          <button
            onClick={() => {
              fetchNextPage();
            }}
          >
            Next
          </button>
        )}
      </div>
      <div>
        <ul>
          {data?.pages?.map((group, i) => (
            <Fragment key={i}>
              {group.data.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <InfinitePage />
    </QueryClientProvider>
  );
}

export default App;
```
