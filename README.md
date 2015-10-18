# google-spread-use

Googleスプレッドシートをバックエンド、WebアプリをフロントエンドとしてWebサイトを表現する検証のためのデモ。

## 説明

本デモの理念はデータとインターフェースの分離である。
Webサイトはデータ（コンテンツ、内容）とインターフェース（操作性）の2つの要素によって構成される。
多くの訪問ユーザーは「データの閲覧」を行い、サイトの管理者ユーザーは「データの更新」を行う。
「データの閲覧」と「データの更新」は双方ともに運営のために重要であるが、「データの更新」が軽視され「データの閲覧」に比べて管理画面は適当なものを作るケースが多い。
さらに「データの更新」画面すら作成されないこともある。

そうした問題に対処すべく、一般に存在するデータ編集に特化したWebサービスを用いてデータ更新を行うことで解決を図る。
その一例としてGoogleスプレッドシートを用いる。
さらにGoogleスプレッドシートではAPIを通してJSON出力するが可能であり、これにより編集の結果がリアルタイムに閲覧できるようにWebアプリを作成することも可能である。

本デモアプリでは、Googleスプレッドシートを用いてWebアプリを作成し、その有用性を確認するものである。

## 例

* Googleスプレッドシート
  * https://docs.google.com/spreadsheets/d/1UX5JseKusqnzfCTrK5LKRi607m2Ezh-WupcwysWogyk/pubhtml
* デモ
  * http://google-spread-use.s3-website-ap-northeast-1.amazonaws.com/

## Googleスプレッドシートをバックエンドとすること

* 利点
  * 編集が容易である
    * スマートデバイスにおいても編集可能である
  * 編集のアクセスコントロールが容易である
  * JSON形式でAPI出力できるため、加工が容易である
  * 誰でも作成できる
  * コストがかからない
* 欠点
  * 公開したくない情報を隠匿しがたい
  * 公開した情報は容易に他者により流用可能、複製可能である

## Webアプリをフロントエンドとすること

* 慣れれば構築が早い
* Googleスプレッドシートの情報は複製されるが、違いを作るのは操作性である
* Webで操作性を追求するにはWebアプリの形になる
* 隠匿したければ、Googleスプレッドシート以外のAPIを利用するようにすれば良い
* htmlなどの静的ファイルを設置する費用で動作する
* サーバ側でPHPのようなスクリプトを動作させるCPU資源の必要がないため安価で済む
* クライアント側のCPU資源を必要とするが、現代ではスマートデバイスなども十分に高速であるため、実用となる
* クライアント側のCPU資源やブラウザなどのランタイムがpoorであった場合は動作困難である
* 表示速度において通常のWebサイトに劣る、データの非同期取得が必要になるため
* ページ遷移に関しては通常のWebサイトに勝る可能性がある、事前に取得したデータがキャッシュされていれば新たなデータの取得が必要ないため
* Webアプリはスマートデバイス向けアプリ（cordova）やデスクトップ向けアプリ（electron）として利用することも可能である

## Googleスプレッドシート+Webアプリについてのまとめ

* 維持に必要なコストはWebアプリの設置費用のみ
* Webアプリ作成に関しては現時点では専門的知識を要する
* Googleスプレッドシートは誰でも作成・編集が可能
* Webアプリのエンドポイントを変更すれば、様々なGoogleスプレッドシートからデータの取得が可能である
* データとインターフェースの疎結合は柔軟性を生み出す、より良いものが現れれば更新される
  * 例:TwitterクライアントとTwitterデータ

## 補足

* コメント機能はデータに紐づくのではなく、外部のサービスに紐づくものを利用する人が多い
  * 例えばTwitterやFacebookのようなソーシャルアカウントがよく利用される
    * これは1つのアカウントに様々なサービスに対しての発言が紐づくので、関係性を示すという意味において有用である
  * 仮に匿名コメントを欲するのであれば、コメント専門APIを別途作成して、様々なサービスに流用すべきだろうと考えている
* 認証も同様であり、外部のサービスを利用するか、独自に認証専門APIを立ち上げる方がよいのではないか
* コメントAPI、認証APIはスマートデバイス向けアプリにおいても活用できるようにAPIが整理される
