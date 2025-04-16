//手順１:ReactとReactDOMのライブラリーをインポート(import)する。
import React from 'react'
import ReactDOM from 'react-dom/client'
import Winner from './winner/Winner'

//手順2:index.htmlファイルの<div id="root">要素への参照を取得する。
//index.htmlファイルの<div id="root">要素を取得します。
const el = document.getElementById('root')

//手順3:Reactにindex.htmlファイルの<div id="root">要素の参照を渡す。
const root = ReactDOM.createRoot(el)

//手順4:コンポーネントを作成する。
//Reactのコンポーネントを一つ作成します。
//Reactのコンポーネントは、何らかのJSXを返す関数である必要があります。

root.render(<Winner />)
