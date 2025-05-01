"use client";

import React, { useState } from "react";
import { Alert, Button, Stack, Snackbar } from "@mui/material";

//Stackとは？
//Stackは、Material-UIのコンポーネントで、要素を縦または横に並べるためのレイアウトコンテナです。
//Stackを使用することで、要素の間隔や配置を簡単に調整できます。

//Snackbarとは？
//Snackbarは、Material-UIのコンポーネントで、画面の下部に一時的なメッセージを表示するためのものです。
//Snackbarは、ユーザーに通知やフィードバックを提供するために使用されます。

export default function AlertExample() {
  const [showCompleteMessage, setShowCompleteMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleClickComplete = () => {
    setShowCompleteMessage(true);
  };

  const handleCompleteClose = () => {
    setShowCompleteMessage(false);
  };

  const handleClickError = () => {
    setShowErrorMessage(true);
  };

  const handleErrorClose = () => {
    setShowErrorMessage(false);
  };

  return (
    <>
      <h1>Material UIでのメッセージ表示コンポーネント</h1>
      <Stack spacing={2} direction="row" sx={{ marginTop: "20px" }}>
        <Button variant="contained" onClick={handleClickComplete}>
          成功メッセージを表示
        </Button>
        <Button variant="contained" onClick={handleClickError}>
          エラーメッセージを表示
        </Button>
      </Stack>
      <Snackbar
        open={showCompleteMessage}
        autoHideDuration={3000}
        onClose={handleCompleteClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCompleteClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          成功しました！
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorMessage}
        autoHideDuration={3000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          エラーが発生しました
        </Alert>
      </Snackbar>
    </>
  );
}
