import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "age", headerName: "Age", width: 90 },
  { field: "gender", headerName: "Gender", width: 100 },
  { field: "occupation", headerName: "Occupation", width: 150 },
];

const rows = [
  {
    id: 1,
    name: "Oliver Scott",
    age: 30,
    gender: "Male",
    occupation: "Engineer",
  },
  {
    id: 2,
    name: "Sophia Jones",
    age: 25,
    gender: "Female",
    occupation: "Designer",
  },
  {
    id: 3,
    name: "Isaac Johnson",
    age: 42,
    gender: "Male",
    occupation: "Manager",
  },
  { id: 4, name: "Mia Brown", age: 35, gender: "Female", occupation: "Lawyer" },
  { id: 5, name: "Elijah Garcia", age: 29, gender: "Male", occupation: "Chef" },
  {
    id: 6,
    name: "Amelia Miller",
    age: 40,
    gender: "Doctor",
    occupation: "Doctor",
  },
  {
    id: 7,
    name: "James Wilson",
    age: 28,
  },

  { id: 8, name: "Charlotte Martinez", age: 32 },
  {
    id: 9,
    name: "Benjamin Anderson",
    age: 38,
  },
  { id: 10, name: "Ava Taylor", age: 27 },
  {
    id: 11,
    name: "Lucas Thomas",
    age: 31,
  },
  { id: 12, name: "Harper White", age: 26 },
  {
    id: 13,
    name: "Henry Harris",
    age: 39,
  },
  { id: 14, name: "Evelyn Clark", age: 34 },
];

export default function ScreenSize() {
  return (
    //height="100vh"を指定することで、画面全体を使用することが可能になる
    //p={2}はpaddingの指定
    <Box display="flex" flexDirection="column" height="100vh" p={4}>
      <Box mb={2}>
        <h1>アプリケーションタイトル</h1>
      </Box>

      {/* 上部ボタン */}
      <Box mb={2}>
        <Button variant="contained" color="primary">
          上部ボタン
        </Button>
      </Box>

      {/* グリッド（高さ可変） */}
      {/* FlexGrowを指定することで、上部ボタンと下部ボタンの間のスペースを埋めることができる */}
      {/* minHeight={0}を指定することで、DataGridの高さが自動調整されないようにし、逆にゼロまで縮小できるようにする。これが重要！ */}
      <Box flexGrow={1} minHeight={0}>
        <DataGrid rows={rows} columns={columns} />
      </Box>

      {/* 下部ボタン */}
      <Box mt={2}>
        <Button variant="contained" color="primary">
          下部ボタン
        </Button>
      </Box>
    </Box>
  );
}
