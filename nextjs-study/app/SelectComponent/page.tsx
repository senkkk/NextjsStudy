"use client";

import React, { useState } from "react";
import { Alert, Button, Stack, Snackbar, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

export default function AlertExample() {
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
  ]);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value as string);
  };

  const [selectedValue1, setSelectedValue1] = useState("");

  const handleChange1 = (event: SelectChangeEvent) => {
    setSelectedValue1(event.target.value as string);
  };

  const [selectedValue2, setSelectedValue2] = useState("");

  const handleChange2 = (event: SelectChangeEvent) => {
    setSelectedValue2(event.target.value as string);
  };

  const [selectedValue3, setSelectedValue3] = useState("");

  const handleChange3 = (event: SelectChangeEvent) => {
    setSelectedValue3(event.target.value as string);
  };

  const [selectedValue4, setSelectedValue4] = useState("");

  const handleChange4 = (event: SelectChangeEvent) => {
    setSelectedValue4(event.target.value as string);
  };

  return (
    <>
      <h1>Material UIのSelectコンポーネント理解</h1>
      <h2>やったこと</h2>
      <li>マスタ値を選択肢に反映する手順（MenuItemにループで反映）</li>
      <li>読み取り専用制御</li>
      <li>未選択状態の選択肢を追加する方法</li>
      <h2>学んだこと</h2>
      <li>
        Selectコンポーネントを配置しただけではだめで、onChangeイベントを捉え、useStateで値を状態管理する必要がある
      </li>
      <li>
        複数列の情報を表示させることも可能！ただちゃんと実装するなら、Dialogとかで別画面を表示させたほうが良いかも
      </li>
      <li>
        Selectコンポーネントではテキスト入力させてフィルタリングする、ということはできないので、それはAutocomplete部品を別途使用する
      </li>
      <div></div>

      <h1>通常ケース</h1>
      <FormControl sx={{ marginTop: "20px", width: "30%" }}>
        <InputLabel id="demo-simple-select-label">選択肢入力</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          onChange={handleChange}
          input={<OutlinedInput label="選択肢入力" />}
          fullWidth
        >
          {selectList.map((item) => (
            //keyとvalueは同じ値を設定しても問題ない
            //keyはReactが要素を識別する（UIの差分更新のために使われる）ためのもので、valueは選択された値を示すためのもの
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <h1>読み取り専用ケース</h1>
      <h2>
        FormControl自体をDisabledに設定してしまうと、テキストがグレー色になるため若干見にくくなるが、見た目で読み取り専用であることがわかりやすい
      </h2>
      <FormControl sx={{ marginTop: "20px" }} disabled>
        <InputLabel id="demo-simple-select-label">選択肢入力</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue1}
          onChange={handleChange1}
          input={<OutlinedInput label="選択肢入力" />}
        >
          {selectList.map((item) => (
            //keyとvalueは同じ値を設定しても問題ない
            //keyはReactが要素を識別する（UIの差分更新のために使われる）ためのもので、valueは選択された値を示すためのもの
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          この項目は読み取り専用に設定されています
        </FormHelperText>
      </FormControl>

      <h1>未選択状態の選択肢を追加する方法</h1>
      <h2>
        FormControl自体をDisabledに設定してしまうと、テキストがグレー色になるため若干見にくくなるが、見た目で読み取り専用であることがわかりやすい
      </h2>
      <FormControl sx={{ marginTop: "20px", width: "30%" }}>
        <InputLabel id="demo-simple-select-label">選択肢入力</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue2}
          onChange={handleChange2}
          input={<OutlinedInput label="選択肢入力" />}
        >
          <MenuItem key="0" value="">
            選択してください
          </MenuItem>
          {selectList.map((item) => (
            //
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <h1>複数列の情報を同時に表示したい場合</h1>
      <h2>
        MenuItemで書式設定を行って複数列を出力する。またrenderValueで、選択後に表示される値は名称だけに変換をかけている
      </h2>
      <FormControl sx={{ marginTop: "20px", width: "30%" }}>
        <InputLabel id="demo-simple-select-label">選択肢入力</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue3}
          onChange={handleChange3}
          input={<OutlinedInput label="選択肢入力" />}
          renderValue={(selected) => {
            const selectedItem = selectList.find(
              (item) => item.id === Number(selected)
            );
            return selectedItem ? selectedItem.name : "";
          }}
        >
          {selectList.map((item) => (
            //
            <MenuItem key={item.id} value={item.id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span style={{ width: "20%" }}>{item.category1}</span>
                <span style={{ width: "20%" }}>{item.category2}</span>
                <span style={{ width: "60%" }}>{item.name}</span>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <h1>必須、エラー制御</h1>
      <li>FormControlにrequired設定することで、*表示が設定される</li>
      <li>
        FormControlにerror設定することで、特定条件下でエラー扱いとして、赤枠表示させることができる
      </li>
      <li>
        詳細メッセージを表示したい場合には、FormHelperTextを条件分岐して表示させる
      </li>
      <FormControl
        sx={{ marginTop: "20px", width: "30%" }}
        error={!selectedValue3}
        required
      >
        <InputLabel id="demo-simple-select-label">選択肢入力</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue3}
          onChange={handleChange3}
          input={<OutlinedInput label="選択肢入力" />}
        >
          <MenuItem key="0" value="">
            選択してください
          </MenuItem>
          {selectList.map((item) => (
            //
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {/* エラー時のメッセージを表示 */}
        {!selectedValue3 && (
          <FormHelperText>
            この項目は必須です。選択してください。
          </FormHelperText>
        )}
      </FormControl>
    </>
  );
}
