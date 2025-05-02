"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
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
    { id: 5, category1: "E", category2: "V", name: "Item 5" },
    { id: 6, category1: "F", category2: "U", name: "Item 6" },
    { id: 7, category1: "G", category2: "T", name: "Item 7" },
    { id: 8, category1: "H", category2: "S", name: "Item 8" },
    { id: 9, category1: "I", category2: "R", name: "Item 9" },
    { id: 10, category1: "J", category2: "Q", name: "Item 10" },
    { id: 11, category1: "K", category2: "P", name: "Item 11" },
    { id: 12, category1: "L", category2: "O", name: "Item 12" },
    { id: 13, category1: "M", category2: "N", name: "Item 13" },
    { id: 14, category1: "N", category2: "M", name: "Item 14" },
    { id: 15, category1: "O", category2: "L", name: "Item 15" },
    { id: 16, category1: "P", category2: "K", name: "Item 16" },
    { id: 17, category1: "Q", category2: "J", name: "Item 17" },
    { id: 18, category1: "R", category2: "I", name: "Item 18" },
    { id: 19, category1: "S", category2: "H", name: "Item 19" },
    { id: 20, category1: "T", category2: "G", name: "Item 20" },
    { id: 21, category1: "U", category2: "F", name: "Item 21" },
    { id: 22, category1: "V", category2: "E", name: "Item 22" },
    { id: 23, category1: "W", category2: "D", name: "Item 23" },
    { id: 24, category1: "X", category2: "C", name: "Item 24" },
    { id: 25, category1: "Y", category2: "B", name: "Item 25" },
    { id: 26, category1: "Z", category2: "A", name: "Item 26" },
    { id: 27, category1: "AA", category2: "Z", name: "Item 27" },
    { id: 28, category1: "AB", category2: "Y", name: "Item 28" },
    { id: 29, category1: "AC", category2: "X", name: "Item 29" },
    { id: 30, category1: "AD", category2: "W", name: "Item 30" },
    { id: 31, category1: "AE", category2: "V", name: "Item 31" },
    { id: 32, category1: "AF", category2: "U", name: "Item 32" },
    { id: 33, category1: "AG", category2: "T", name: "Item 33" },
    { id: 34, category1: "AH", category2: "S", name: "Item 34" },
    { id: 35, category1: "AI", category2: "R", name: "Item 35" },
    { id: 36, category1: "AJ", category2: "Q", name: "Item 36" },
    { id: 37, category1: "AK", category2: "P", name: "Item 37" },
    { id: 38, category1: "AL", category2: "O", name: "Item 38" },
    { id: 39, category1: "AM", category2: "N", name: "Item 39" },
    { id: 40, category1: "AN", category2: "M", name: "Item 40" },
    { id: 41, category1: "AO", category2: "L", name: "Item 41" },
    { id: 42, category1: "AP", category2: "K", name: "Item 42" },
    { id: 43, category1: "AQ", category2: "J", name: "Item 43" },
    { id: 44, category1: "AR", category2: "I", name: "Item 44" },
    { id: 45, category1: "AS", category2: "H", name: "Item 45" },
    { id: 46, category1: "AT", category2: "G", name: "Item 46" },
    { id: 47, category1: "AU", category2: "F", name: "Item 47" },
    { id: 48, category1: "AV", category2: "E", name: "Item 48" },
    { id: 49, category1: "AW", category2: "D", name: "Item 49" },
    { id: 50, category1: "AX", category2: "C", name: "Item 50" },
    { id: 51, category1: "AY", category2: "B", name: "Item 51" },
    { id: 52, category1: "AZ", category2: "A", name: "Item 52" },
    { id: 53, category1: "BA", category2: "Z", name: "Item 53" },
    { id: 54, category1: "BB", category2: "Y", name: "Item 54" },
    { id: 55, category1: "BC", category2: "X", name: "Item 55" },
    { id: 56, category1: "BD", category2: "W", name: "Item 56" },
    { id: 57, category1: "BE", category2: "V", name: "Item 57" },
    { id: 58, category1: "BF", category2: "U", name: "Item 58" },
    { id: 59, category1: "BG", category2: "T", name: "Item 59" },
    { id: 60, category1: "BH", category2: "S", name: "Item 60" },
    { id: 61, category1: "BI", category2: "R", name: "Item 61" },
    { id: 62, category1: "BJ", category2: "Q", name: "Item 62" },
    { id: 63, category1: "BK", category2: "P", name: "Item 63" },
    { id: 64, category1: "BL", category2: "O", name: "Item 64" },
    { id: 65, category1: "BM", category2: "N", name: "Item 65" },
    { id: 66, category1: "BN", category2: "M", name: "Item 66" },
    { id: 67, category1: "BO", category2: "L", name: "Item 67" },
    { id: 68, category1: "BP", category2: "K", name: "Item 68" },
    { id: 69, category1: "BQ", category2: "J", name: "Item 69" },
    { id: 70, category1: "BR", category2: "I", name: "Item 70" },
    { id: 71, category1: "BS", category2: "H", name: "Item 71" },
    { id: 72, category1: "BT", category2: "G", name: "Item 72" },
    { id: 73, category1: "BU", category2: "F", name: "Item 73" },
    { id: 74, category1: "BV", category2: "E", name: "Item 74" },
    { id: 75, category1: "BW", category2: "D", name: "Item 75" },
    { id: 76, category1: "BX", category2: "C", name: "Item 76" },
    { id: 77, category1: "BY", category2: "B", name: "Item 77" },
    { id: 78, category1: "BZ", category2: "A", name: "Item 78" },
    { id: 79, category1: "CA", category2: "Z", name: "Item 79" },
    { id: 80, category1: "CB", category2: "Y", name: "Item 80" },
    { id: 81, category1: "CC", category2: "X", name: "Item 81" },
    { id: 82, category1: "CD", category2: "W", name: "Item 82" },
    { id: 83, category1: "CE", category2: "V", name: "Item 83" },
    { id: 84, category1: "CF", category2: "U", name: "Item 84" },
    { id: 85, category1: "CG", category2: "T", name: "Item 85" },
    { id: 86, category1: "CH", category2: "S", name: "Item 86" },
    { id: 87, category1: "CI", category2: "R", name: "Item 87" },
    { id: 88, category1: "CJ", category2: "Q", name: "Item 88" },
    { id: 89, category1: "CK", category2: "P", name: "Item 89" },
    { id: 90, category1: "CL", category2: "O", name: "Item 90" },
    { id: 91, category1: "CM", category2: "N", name: "Item 91" },
    { id: 92, category1: "CN", category2: "M", name: "Item 92" },
    { id: 93, category1: "CO", category2: "L", name: "Item 93" },
    { id: 94, category1: "CP", category2: "K", name: "Item 94" },
    { id: 95, category1: "CQ", category2: "J", name: "Item 95" },
    { id: 96, category1: "CR", category2: "I", name: "Item 96" },
    { id: 97, category1: "CS", category2: "H", name: "Item 97" },
    { id: 98, category1: "CT", category2: "G", name: "Item 98" },
    { id: 99, category1: "CU", category2: "F", name: "Item 99" },
    { id: 100, category1: "CV", category2: "E", name: "Item 100" },
    { id: 101, category1: "CW", category2: "D", name: "Item 101" },
    { id: 102, category1: "CX", category2: "C", name: "Item 102" },
    { id: 103, category1: "CY", category2: "B", name: "Item 103" },
    { id: 104, category1: "CZ", category2: "A", name: "Item 104" },
    { id: 105, category1: "DA", category2: "Z", name: "Item 105" },
    { id: 106, category1: "DB", category2: "Y", name: "Item 106" },
    { id: 107, category1: "DC", category2: "X", name: "Item 107" },
    { id: 108, category1: "DD", category2: "W", name: "Item 108" },
    { id: 109, category1: "DE", category2: "V", name: "Item 109" },
    { id: 110, category1: "DF", category2: "U", name: "Item 110" },
    { id: 111, category1: "DG", category2: "T", name: "Item 111" },
    { id: 112, category1: "DH", category2: "S", name: "Item 112" },
    { id: 113, category1: "DI", category2: "R", name: "Item 113" },
    { id: 114, category1: "DJ", category2: "Q", name: "Item 114" },
    { id: 115, category1: "DK", category2: "P", name: "Item 115" },
  ]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "category1", headerName: "Category1", width: 300 },
    { field: "category2", headerName: "Category2", width: 300 },
    { field: "name", headerName: "Name", width: 300 },
  ];

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 15, // 1ページあたりの表示件数
  });

  return (
    <>
      <h1>ページング設定のカスタマイズ</h1>
      <li>デフォルトの表示行数を15に設定（オプションとして10も追加設定）</li>
      <li>
        ただし、UseSateでの状態管理が必要であるため、クライアントサイドでの動作になってしまう
      </li>
      <li>
        データベースから全件取得したうえで、クライアントサイドでページング処理を実行
      </li>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={selectList}
          columns={columns}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={(model) => setPaginationModel(model)}
          pageSizeOptions={[10, 15]}
        />
      </div>

      <h1>Quick Filter機能の実装</h1>
      <h2>いわゆるグローバル検索機能を簡単に実装することができる</h2>
      <li>
        showToolbar設定をするだけ、、、簡単。これによりCSVエクスポート機能も表示される
      </li>
      <li>
        disableDensitySelectorも設定しているが、これを行うと行高さを広げる・縮める設定が非表示になる
      </li>
      <li>
        列単位でのフィルター機能とはバッティングせず、両方の検索条件が同時に適用される！
      </li>
      <li>Quick Filterでの検索対象列を別途定義して渡すことも可能</li>
      <li>
        スペース区切りで入力すれば複数をANDで組み合わせて検索反映可能（※ただし全角スペース区切りはNG）
      </li>
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          rows={selectList}
          columns={columns}
          disableDensitySelector
          showToolbar
        />
      </Box>
    </>
  );
}
