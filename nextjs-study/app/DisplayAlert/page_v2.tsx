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
    setAlertState({ open: true, severity, message });
  };

  const handleCloseAlert = () => {
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  //このコードである程度整理することはできたが、メッセージは一つしか表示できない。
  //そのため、成功メッセージが表示されている途中でエラーメッセージを表示した場合、メッセージ内容は更新されるが、
  //AutoHideDurationを再設定シているわけではないため、すぐに消えてしまう。
  return (
    <>
      <h1>Material UIでのメッセージ表示コンポーネント</h1>
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
