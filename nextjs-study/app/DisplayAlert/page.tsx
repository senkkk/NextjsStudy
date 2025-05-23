"use client";

import React, { useState } from "react";
import { Alert, Button, Stack, Snackbar } from "@mui/material";

export default function AlertExample() {
  //学び：useStateで、Typescriptだと型指定することができる。Javascriptだと型指定できないと思われる。
  const [alertState, setAlertState] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({
    open: false,
    severity: "success",
    message: "",
  });

  const handleShowAlert = (severity: "success" | "error", message: string) => {
    if (alertState.open) {
      setAlertState((prev) => ({ ...prev, open: false }));

      //openをfalseに変更してから、実際にMaterial-UIのSnackbarが閉じるまでには約225msかかると言われているため、
      //300ms待ってから、openをtrueに変更する
      setTimeout(() => {
        setAlertState({ open: true, severity, message });
      }, 300);
    } else {
      setAlertState({ open: true, severity, message });
    }
  };

  const handleCloseAlert = () => {
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <h1>Material UIでのメッセージ表示コンポーネント</h1>
      <h2>やったこと</h2>
      <li>
        ボタンを押下することで、汎用的なメッセージ表示関数を呼び出し、成功・エラー、メッセージ文言を切り替えて表示する
      </li>
      <li>
        メッセージ表示中に、別のメッセージ処理が差し込まれた場合には、一旦メッセージを閉じたうえで再表示する処理を実装
      </li>
      <li>
        同時に複数件のメッセージを表示する仕様も検討したが、実装が複雑になる可能性があったため一旦PENDING
      </li>
      <Stack spacing={2} direction="row" sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          onClick={() => handleShowAlert("success", "成功しました！")}
        >
          成功メッセージを表示
        </Button>
        <Button
          variant="contained"
          onClick={() => handleShowAlert("error", "エラーが発生しました")}
        >
          エラーメッセージを表示
        </Button>
      </Stack>
      <Snackbar
        open={alertState.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alertState.severity}
          sx={{ width: "100%" }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </>
  );
}
