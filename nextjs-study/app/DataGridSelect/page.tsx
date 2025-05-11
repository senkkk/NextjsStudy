"use client";

import React, { useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  useGridApiRef,
} from "@mui/x-data-grid";
import { Alert, Button, Stack, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";

export default function DataGridFilter() {
  const [selectList, setSelectList] = useState<
    {
      id: number;
      category1: string;
      category2: string;
      name: string;
    }[]
  >([
    { id: 1, category1: "A", category2: "X", name: "Item 1" },
    { id: 2, category1: "B", category2: "Y", name: "Item 2" },
    { id: 3, category1: "C", category2: "Z", name: "Item 3" },
    { id: 4, category1: "D", category2: "W", name: "Item 4" },
  ]);

  const [category1, setCategory1] = useState<
    {
      id: string;
      name: string;
    }[]
  >([
    { id: "A", name: "Category A" },
    { id: "B", name: "Category B" },
    { id: "C", name: "Category C" },
    { id: "D", name: "Category D" },
  ]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "category1",
      headerName: "Category1",
      width: 300,
      type: "singleSelect",
      valueOptions: category1.map((d) => ({
        value: d.id,
        label: d.name,
      })),
      editable: true,
    },
    { field: "category2", headerName: "Category2", width: 300 },
    { field: "name", headerName: "Name", width: 300 },
  ];

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 15, // 1ページあたりの表示件数
  });

  const apiRef = useGridApiRef();

  const handleButtonClick = () => {
    if (apiRef.current) {
      const allRowModels = apiRef.current
        .getAllRowIds()
        .map((id) => apiRef.current!.getRow(id));
      console.log("現在の行データ:", allRowModels);
    } else {
      console.warn("apiRef.current is null");
    }
  };

  return (
    <>
      <h1>選択肢列はtype:"singleSelect"で設定するのが楽ちん！</h1>
      <li>
        セル編集時にイベント処理などを実装する必要もないし、パフォーマンス的にも良さそう？
      </li>
      <li>
        ボタンクリック時に、編集中のデータをapiRef経由で取得してConsoleログに出力する
      </li>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid rows={selectList} columns={columns} apiRef={apiRef} />
      </div>
      <Button onClick={handleButtonClick}>クリック</Button>
    </>
  );
}
