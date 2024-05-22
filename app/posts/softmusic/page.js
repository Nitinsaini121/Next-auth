"use client";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "@/app/dummydata/page";
import axios from "axios";

function page() {
  const [page, setPage] = useState({
    loadding: false,
    data: [],
    page: 1,
    prepagerow: 0,
    pageSize: 15,
  });

  useEffect(() => {
    const newsFunction = async () => {
      // setPage(old=>({...old , loadding: true}))
      try {
        // const news = await axios.get(
        //   `https://fakestoreapi.com/products?limit=${page.pageSize}`   https://dummyjson.com/products
        // );\
        setPage((old) => ({
          ...old,
          loadding: true,
        }));
        const news = await axios.get(
          `https://api.jikan.moe/v4/anime?limit=${page.pageSize}&page=${page.page}`
        );

        console.log("news", news);
        //  news.data.map((value)=> console.log("newV" , value))

        // console.log(news.products.map((value)=> console.log("new" , value)));

        // page.data = [...news]
        setPage((old) => ({
          ...old,
          loadding: true,
          data: news.data.data,
          pageSize: news.data.pagination?.items?.total,
        }));
      } catch (error) {
        console.log(error.name);
      }
    };
    newsFunction();
  }, [page.pageSize]);

  // console.log("data" , page.data)

  return (
    <>
      <div className="container" style={{ height: "100%", width: "100%" }}>
        <DataGrid
          autoHeight
          rows={page.data}
          rowCount={page?.data?.length}
          getRowId={(data) => data.mal_id}
          // page={page?.page - 1}
          // pageSize={page?.pageSize}
          // pagination
          paginationMode="server"
          // onPageSizeChange={(newPage) =>
          // setPage((old) => ({ ...old, page: newPage }))
          // }
          // onRowCountChange={(newPageSize) =>
          // setPage((old) => ({ ...old, pageSize: newPageSize }))
          // console.log("newPageSize", newPageSize)
          // }
          // rowsPerPageOptions={[20]}
          // pageSizeOptions={[5, 10, 25]}
          columns={columns}
          {...page.data}
          initialState={{
            ...page.data?.initialState,
            pagination: { paginationModel: { pageSize: 50 } }, 
            // pagination: { paginationModel: (pageSize)=> setPage((old)=>({...old , pageSize })) },
          }}
          pageSizeOptions={[5, 10, 25, 50, 100]}
          pagination
          checkboxSelection
          // checkboxSelectionVisibleOnly={checkboxSelectionVisibleOnly}
        />
      </div>
    </>
  );
}

export default page;
