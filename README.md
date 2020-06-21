# lp-system-api
SPS:サンプルAPI

# 初期化
`serverless config credentials --provider aws --key ${AWS-ACCESS-KEY} --secret ${AWS-SECRET-KEY}`

※AdministratorAccess があるIAMユーザーの認証情報を設定ください

# デプロイ
```
$ sls deploy -v -s dev

-v: 進捗表示
-s: ステージ（サンプルだとdevelepment）
```
