# frontend_workspace

フロントエンドカリキュラムのワークスペースです。

# 新規社員向け導入手順

<br>

## Slack について

Autumn の Slack に`#00_新規入社の方へ`というチャンネルがあります。そちらに入り、全ての Slack チャンネルに参加してください <br />
※ フロントエンド・バックエンドは所属分のみで大丈夫です。
<br><br>

## カリキュラムの提出について

カリキュラムの提出はプルリクエストの機能を用いてください。<br>
また、課題について質問があればイシューの機能を活用します。<br>
コミット〜プッシュまで完了し、プルリクエストを作成したら Slack でメンターにレビュー依頼をしてください。

## 管理スプレッドシート

各セクションの終了予定日など、自身の進捗管理に関しては下記シートで確認してください。
[カリキュラム進捗管理シート](https://docs.google.com/spreadsheets/d/1X2pq1ccVP-tjaZlvbuvNF9m_4gDTqqIlc-0Or9cZNlo/edit#gid=1835484300)
<br />

## カリキュラムの導入手順

<details><summary>手順</summary>

### 1. git clone をする

💡 「$」マークは除いて、ターミナル(Mac)またはコマンドプロンプト(Windows)で以下のコマンド実行してください。
<br>
💡 「//」はコメントなので無視してください。

```
// Windowsの方のみ以下を実行
$ cd Desktop
// 作業ディレクトリ作成＋移動
$ mkdir workspace && cd workspace
$ git clone （作業リポジトリのURL）
```

### 2. VSCode でクローンしたフォルダを開く

先ほど clone したフォルダを VSCode で開いてください。

### 3. ブランチを切り替える

#### コマンドでする場合

```
$ git checkout ブランチ名
```

#### GUI 操作でする場合

<img width="874" alt="checkout" src="https://user-images.githubusercontent.com/67848399/159731664-331b8045-5173-4dc5-b0ef-75a3c3f7cbf1.png">

</details>

## Github のメイン機能

Github では、主に以下の機能を活用します。

### branch

ブランチとは、作業環境です。通常の開発環境では、一般的に以下のように切り分けます。

- main/master : ユーザーへのリリース環境
- release : リリース前の環境（最終チェック）
- develop : 開発環境
- fix : 修正用
- hotfix : 緊急対応用

今回は、学習用のため、以下のようにして運営します。

- main : メインブランチ（絶対に編集しない）
- mentor : レビュー（提出先）ブランチ
- ◯_◯◯◯◯ 　: 作業ブランチ
  <br><br>

## 命名規則

カリキュラムを進める際に、命名規則というのがとても重要です。<br />
命名規則に従えば、プロジェクト全体の統一感が出て運用もしやすくなります。<br />
逆に、命名規則のない自己中心的な命名をしてしまうと、可動性も低くなる上、運用の負担がかかってしまいます。<br />
命名規則といえど、チームで勝手に設定するわけではなく、公式で指定がある規則に従います。

## フロントエンドの命名規則

#### HTML/ CSS / Sass

**FLOCSS**
<br>
https://haniwaman.com/flocss/
<br>
https://github.com/hiloki/flocss

#### JavaScript

https://cou929.nu/data/google_javascript_style_guide/#
<br>
http://memopad.bitter.jp/w3c/js/js_conventions.html

#### TypeScript

https://typescript-jp.gitbook.io/deep-dive/styleguide

#### React

フレームワークの場合、それ用の命名規則がありますが React はライブラリです。<br />
JavaScript ライブラリのため、基本は JavaScript または TypeScript の規則に準拠します。

## Git の命名規則

#### コミットメッセージ(commit)

<details><summary>命名規則</summary>

コミットメッセージは、規則に従って記述をしましょう。

```
[課題No][作業内容]概要
```

`作業内容は以下から選択`

- new :　新規
- retry : やり直し
- fix : レビュー後修正
- env : 環境構築系
- temp : 一時提出（issue 用）
- other : その他

**悪い例** <br>

> Lesson １ 0 <br>
> Lesson10 修正 <br>

**良い例** <br>

> [JS_1-1][new]初回提出 <br> > [JS_1-1][fix]計算ロジックの修正 <br>

💡 第三者が見ても「どんな作業をしたか」が明確になるよう心がけましょう。

</details>

#### プルリクエスト(pull request)

<details><summary>命名規則</summary>

**タイトル**

```
【提出者名】概要
（例）
【k_yuta】 JavaScript課題提出（1-1 ~ 1-4)
```

**本文**

```
提出課題一覧
【JS_1-1】
【JS_1-2】
【JS_1-3】
【JS_1-4】
...

メッセージ
```

</details>

#### イシュー(issue)

<details><summary>命名規則</summary>

基本は以下のテンプレートに準拠すること
**タイトル**

```
【課題No or セクション】【提出者名】概要
（例）
【JS_5-1】【k_yuta】エラーの解消方法がわからない
```

**本文**

```
### 最終的なゴールは何か（必須）
（例）・phpの条件分岐をうまくいくようにしたい

### 現状のエラー・課題（必須）
概要
現状のプログラムコード
ここにコードを添付
※ issueを立てると同時に現段階をプッシュしておくこと

### エラーコード
ここにコード

###解決への推測（必須）
現段階で、「これができればうまくいくのでは？」という推測を記入

コメント
※何かあれば書いてください
```

</details>

#### ブランチ(branch)/リポジトリ(repository)

フルネームをスネークケースで作成<br />
（例） 大月裕太の場合、y_otsuki

## 環境構築

適宜課題の進捗に応じて実行してください。

## カリキュラムの導入

<details><summary>内容</summary>

### 1.作業フォルダの作成 & 移動

1. リポジトリを clone する
2. VSCode で clone したフォルダを開く
3. 左下でブランチ切り替えもしくは以下のコマンドでブランチを切り替え、作業を行う。

各コマンドは以下の通りです。

```
// cloneする
git clone リポジトリURL

#### パスワードを要求された場合
パスワードを要求された場合は、Githubのパスワードではなくアクセストークンを入力するようにしてください。
<br>
手順は以下のサイトを参考にしてください。
https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

// ブランチ切り替え
git checkout ブランチ名
```

ーこれ以降の環境構築はカリキュラムの進捗に合わせて適宜行ってください。
<br />

</details>

## TypeScript 環境構築

<details><summary>内容</summary>

### （１）Node.js の確認

まずは、Node.js が使えることを確認します。

```
$ nodebrew -v
```

もしバージョンが表示されない場合、（３）の作業をもう一度実施してください。

### （２）作業フォルダに移動

TypeScript の課題の作業フォルダに移動してください。

### （３）TypeScript のインストール

```
$ npm install --save-dev typescript tslint @types/node
```

### （４）tsconfig.json の設定

まずは、tsconfig.json ファイルを作成しましょう。

```
$ touch tsconfig.json
```

### （５） 以下の内容をコピペ

tsconfig.json の内容を以下の通り書き換えてください

```
{
  "compilerOptions": {
    "module": "commonjs",
        "target": "es2015",
    "outDir": "dist",
    "sourceMap": true,
        "strict": true
  },
    "include": [
        "src"
    ],
  "exclude": [
    "node_modules"
  ]
}
```

### （６） tslint のインストール

```
$ ./node_modules/.bin/tslint --init
```

### （７）　完了！

コンパイル方法は、 `$ tsc （ファイル名）.ts `でコンパイル（動作確認）ができます！

</details>
