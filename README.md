# jwt practice

> Because JWT just a one time key, so I don't really want to implement redis blacklist

```shell
$ cd ./service
# start initial database
$ docker-compose up -d

$ cd ../
# start jwt server
$ yarn start
# or
$ docker-compose build && docker-compose up
```
