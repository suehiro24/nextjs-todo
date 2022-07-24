"----------------------------------------
" map
"----------------------------------------
inoremap jk <Esc>
" 削除,貼付時に選択対象をyankしない
noremap x "_x
noremap <Space>d "_d
noremap <Space>p "_dP

"----------------------------------------
" 検索
"----------------------------------------
" 検索するときに大文字小文字を区別しない
set ignorecase
" 小文字で検索すると大文字と小文字を無視して検索
set smartcase
" 検索がファイル末尾まで進んだら、ファイル先頭から再び検索
set wrapscan
" インクリメンタル検索 (検索ワードの最初の文字を入力した時点で検索が開始)
set incsearch
" 検索結果をハイライト表示
set hlsearch
" Escの2回押しでハイライト消去
nnoremap <Esc><Esc> :nohlsearch<CR><ESC>

"----------------------------------------
" 表示設定
"----------------------------------------
" タイトルを表示
set title
" 行番号の表示
set number
" シンタックスハイライト
syntax on
" 全角文字専用の設定
set ambiwidth=double


"----------------------------------------
" その他
"----------------------------------------
" エンコード
set encoding=utf-8
set fileencodings=utf-8,iso-2022-jp,euc-jp,sjis
" エラーメッセージの表示時にビープを鳴らさない
set noerrorbells
" ヤンクでクリップボードにコピー
set clipboard=unnamedplus
" 挿入モードでバックスペースで削除できるようにする
set backspace=indent,eol,start
