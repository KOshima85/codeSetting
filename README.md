# vs code の設定あれこれ

## 使い方

1. `./settings/` 以下のjsonファイルとsnippetsを下記にコピーする
    - Windows `%APPDATA%\Code\User\settings.json`
    - Mac `$HOME/Library/Application Support/Code/User/settings.json`
    - Linux `$HOME/.config/Code/User/settings`
2. install-plugins.sh を実行する

メモ：jsonファイルはマージしたほうが良いかもしれない

## 更新方法

```
cp ~/AppData/Roaming/Code/User/*.json ./
cp -r ~/AppData/Roaming/Code/User/snippets/ ./
```

```
code --list-extensions | xargs -L 1 echo code --install-extension > install-plugins.sh
```

## 参考サイト

https://qiita.com/koshilife/items/3ed4b1c28de233f39ebb
https://qiita.com/canpok1/items/a7c4c96e3c1c2a1cc532