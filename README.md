# google-spread-use

Googleスプレッドシートをバックエンド、AngularJSをフロントエンドとしてWebサイトを表現する検証のためのデモ。

## 例

* Googleスプレッドシート
  * https://docs.google.com/spreadsheets/d/1UX5JseKusqnzfCTrK5LKRi607m2Ezh-WupcwysWogyk/pubhtml
* デモ
  * http://google-spread-use.s3-website-ap-northeast-1.amazonaws.com/

## Googleスプレッドシートをバックエンドとする利点

* 編集が容易である
* 編集のアクセスコントロールが容易である
* JSON形式でAPI出力できるため、加工が容易である

## Googleスプレッドシートをバックエンドとする欠点

* 公開したくない情報を隠匿しがたい
* 公開した情報は容易に他者により流用可能、複製可能である

## Webアプリをフロントエンドとすること

* 慣れれば構築が早い
* Googleスプレッドシートの情報は複製されるが、違いを作るのは操作性
* Webで操作性を追求するにはWebアプリの形になる
* 隠匿したければ、Googleスプレッドシート以外のAPIを利用するようにすれば良い
