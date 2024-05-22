"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { columns } from "@/app/dummydata/page";

export default function ControlledSelectionServerPaginationGrid() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 1,
    pageSize: 5,
  });
  const [rows, setRows] = React.useState([]);
  const [totalrows, setTotalRows] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  React.useEffect(() => {
    let active = true;

    setLoading(true);
    (async () => {
      const newRows = await axios.get(
        `https://api.jikan.moe/v4/anime?limit=${paginationModel.pageSize}&page=${paginationModel.page}`
      );
      setTotalRows(newRows.data?.pagination?.items?.total);
      if (!active) {
        return;
      }
      setRows(newRows.data.data);
    })();

    setLoading(false);
    return () => {
      active = false;
    };
  }, [paginationModel]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {rows?.length > 0 ? (
        <DataGrid
          {...rows}
          rows={rows}
          columns={columns}
          getRowId={(rows) => rows.mal_id}
          pagination
          checkboxSelection
          paginationModel={paginationModel}
          pageSizeOptions={[5, 10, 15, 25]}
          rowCount={totalrows}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          loading={loading}
          keepNonExistentRowsSelected
        />
      ) : (
        "Data Not Found"
      )}
    </div>
  );
}
